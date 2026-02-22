# Railway Status Map

## Overview
- Local-only railway operation status viewer for strict environments.
- Runs with `file://` in Microsoft Edge.
- No install, no web server, no external CDN.
- Main workflow: natural language input -> parse -> auto-apply to line cards.

## Files
- `railway_status_map.html`: UI and styles.
- `railway_lines.js`: line master data + parser + rendering logic.

## Run
1. Put `railway_status_map.html` and `railway_lines.js` in the same folder.
2. Open `railway_status_map.html` in Edge (double-click is fine).

## Current Data Model
- Internal key: `area:line_key`
- Line record:
  - `area` (e.g. 関東 / 東北 / 信越)
  - `lineName`
  - `scope` (管轄・系統区分、同一エリア内分割に対応)
  - `stations` (ordered station list for segment visualization)

## Implemented Features
- Natural language parsing:
  - Line detection
  - Area/scope disambiguation (station match + scope hint)
  - Status detection (`normal`, `delay`, `suspend`, `stop`)
  - Section extraction (`A〜B`)
  - Cause/resume extraction
  - Direction detection (`both`, `up`, `down`, `unknown`)
- Manual override:
  - Line / status / direction / section / cause / resume
- Card view:
  - Area + scope chips
  - Station list
  - Intended segment highlight by affected section and direction

## Known Issue (Important)
- Segment animation/color on station links is currently **not visible in actual browser output** (reported during testing), despite CSS/JS implementation being present.
- This is the first item to debug in the next session.

## Next Session Quick Plan
1. Add temporary debug mode to force all segments active (`both + delay`) and verify rendering path.
2. If still invisible:
   - replace current segment CSS animation with simpler always-visible solid color first,
   - then reintroduce motion.
3. If CSS remains unreliable on target Edge:
   - switch segment rendering to SVG-based lines/arrows.

## Example Input (tested)
- `京浜東北線は、東十条～王子駅間での異音の確認の影響で、上下線の一部列車に遅れがでています。`

## Notes for Migration
- Copy this whole folder as-is to home PC.
- Open in Edge and continue editing these same two files.

## Bundle Export / Restore
- Create one-file bundle:
  - `powershell -ExecutionPolicy Bypass -File tools\make_bundle.ps1`
- Output:
  - `out\bundle.txt`
  - `out\bundle_report.txt`
- Excel restore macro:
  - `excel_macro\RestoreFromBundle.bas`
- Operation guides:
  - `docs\MAKE_BUNDLE_GUIDE.md`
  - `docs\RESTORE_GUIDE.md`
