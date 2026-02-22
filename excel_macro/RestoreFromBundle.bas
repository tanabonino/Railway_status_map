Attribute VB_Name = "RestoreFromBundle"
Option Explicit

' Restores files from bundle.txt placed next to this workbook.
' Output directory: <workbook folder>\restored\
' Overwrite policy: overwrite existing files.

Public Sub RestoreFilesFromBundle()
    On Error GoTo EH

    Dim baseDir As String
    Dim bundlePath As String
    Dim outRoot As String
    Dim content As String

    baseDir = ThisWorkbook.Path
    If Len(baseDir) = 0 Then
        MsgBox "先にExcelファイルを保存してください。", vbExclamation
        Exit Sub
    End If

    bundlePath = baseDir & "\bundle.txt"
    outRoot = baseDir & "\restored"

    If Dir(bundlePath) = "" Then
        MsgBox "bundle.txt が見つかりません: " & bundlePath, vbExclamation
        Exit Sub
    End If

    EnsureFolderExists outRoot
    content = ReadUtf8Text(bundlePath)
    content = NormalizeNewlines(RemoveUtf8Bom(content))

    ParseAndRestore content, outRoot

    MsgBox "復元完了: " & outRoot, vbInformation
    Exit Sub

EH:
    MsgBox "復元エラー: " & Err.Description, vbCritical
End Sub

Private Sub ParseAndRestore(ByVal bundleText As String, ByVal outRoot As String)
    Dim lines() As String
    Dim i As Long
    Dim line As String
    Dim currentPath As String
    Dim currentBody As String
    Dim inFile As Boolean

    lines = Split(bundleText, vbLf)
    inFile = False
    currentPath = ""
    currentBody = ""

    For i = LBound(lines) To UBound(lines)
        line = lines(i)
        If IsHeaderLine(line) Then
            If inFile Then
                WriteOneFile outRoot, currentPath, currentBody
            End If
            currentPath = ExtractPathFromHeader(line)
            currentBody = ""
            inFile = True
        Else
            If inFile Then
                If Len(currentBody) = 0 Then
                    currentBody = line
                Else
                    currentBody = currentBody & vbLf & line
                End If
            End If
        End If
    Next i

    If inFile Then
        WriteOneFile outRoot, currentPath, currentBody
    End If
End Sub

Private Function IsHeaderLine(ByVal s As String) As Boolean
    Dim t As String
    t = Trim$(s)
    If Left$(t, 11) <> "===== FILE:" Then
        IsHeaderLine = False
        Exit Function
    End If
    If Right$(t, 5) <> "=====" Then
        IsHeaderLine = False
        Exit Function
    End If
    If Len(ExtractPathFromHeader(t)) = 0 Then
        IsHeaderLine = False
        Exit Function
    End If
    IsHeaderLine = True
End Function

Private Function ExtractPathFromHeader(ByVal headerLine As String) As String
    Dim t As String
    Dim body As String
    t = Trim$(headerLine)
    If Left$(t, 11) <> "===== FILE:" Then Exit Function
    If Right$(t, 5) <> "=====" Then Exit Function

    body = Mid$(t, 12, Len(t) - 16) ' remove prefix and suffix
    body = Trim$(body)
    ExtractPathFromHeader = Replace(body, "/", "\")
End Function

Private Sub WriteOneFile(ByVal outRoot As String, ByVal relPath As String, ByVal fileBodyLf As String)
    On Error GoTo EH

    Dim safeRel As String
    Dim fullPath As String
    Dim parentDir As String
    Dim textOut As String

    safeRel = SanitizeRelPath(relPath)
    If Len(safeRel) = 0 Then
        Err.Raise vbObjectError + 200, , "不正な相対パス: " & relPath
    End If

    fullPath = outRoot & "\" & safeRel
    parentDir = Left$(fullPath, InStrRev(fullPath, "\") - 1)
    EnsureFolderExists parentDir

    ' WriteText uses vbCrLf for line breaks in Windows editors.
    textOut = Replace(fileBodyLf, vbLf, vbCrLf)
    WriteUtf8Text fullPath, textOut
    Exit Sub

EH:
    Err.Raise vbObjectError + 201, , "書き込み失敗: " & relPath & " / " & Err.Description
End Sub

Private Function SanitizeRelPath(ByVal relPath As String) As String
    Dim p As String
    p = Replace(relPath, "/", "\")
    p = Trim$(p)
    Do While Left$(p, 1) = "\"
        p = Mid$(p, 2)
    Loop
    If InStr(p, ":") > 0 Then p = ""
    If InStr(p, "..\") > 0 Or Right$(p, 2) = ".." Then p = ""
    SanitizeRelPath = p
End Function

Private Sub EnsureFolderExists(ByVal folderPath As String)
    Dim parts() As String
    Dim i As Long
    Dim cur As String

    If Len(folderPath) = 0 Then Exit Sub

    parts = Split(folderPath, "\")
    If UBound(parts) < 0 Then Exit Sub

    cur = parts(0)
    If InStr(cur, ":") = 0 Then
        cur = ""
    End If

    For i = 1 To UBound(parts)
        If Len(cur) = 0 Then
            cur = parts(i)
        Else
            cur = cur & "\" & parts(i)
        End If
        If Len(cur) > 0 Then
            If Dir(cur, vbDirectory) = "" Then MkDir cur
        End If
    Next i
End Sub

Private Function ReadUtf8Text(ByVal filePath As String) As String
    Dim stm As Object
    Set stm = CreateObject("ADODB.Stream")

    stm.Type = 2 ' text
    stm.Charset = "utf-8"
    stm.Open
    stm.LoadFromFile filePath
    ReadUtf8Text = stm.ReadText(-1)
    stm.Close
End Function

Private Sub WriteUtf8Text(ByVal filePath As String, ByVal body As String)
    Dim stm As Object
    Set stm = CreateObject("ADODB.Stream")

    stm.Type = 2 ' text
    stm.Charset = "utf-8"
    stm.Open
    stm.WriteText body
    stm.SaveToFile filePath, 2 ' overwrite
    stm.Close
End Sub

Private Function RemoveUtf8Bom(ByVal s As String) As String
    If Len(s) > 0 Then
        If AscW(Left$(s, 1)) = &HFEFF Then
            RemoveUtf8Bom = Mid$(s, 2)
            Exit Function
        End If
    End If
    RemoveUtf8Bom = s
End Function

Private Function NormalizeNewlines(ByVal s As String) As String
    s = Replace(s, vbCrLf, vbLf)
    s = Replace(s, vbCr, vbLf)
    NormalizeNewlines = s
End Function

