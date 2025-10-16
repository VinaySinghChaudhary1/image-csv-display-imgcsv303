# image-csv-display

**Live demo:** https://VinaySinghChaudhary1.github.io/image-csv-display-imgcsv303/

## Summary

Create a gallery card area with id #gallery that displays three thumbnails and a linked larger image area with id #viewer. Also include a CSV-based inventory table with id #inventory and a filter input #inventory-filter.

## Features

- LLM-generated single-page web app
- Automated GitHub Pages deployment
- Basic validation against provided selector checks

## Project structure

* `index.html` — Single-page application entry (HTML + inline references to CSS/JS)
* `style.css` — Project stylesheet (Bootstrap + custom rules)
* `script.js` — Lightweight vanilla JS for interactivity (theme toggle, CSV parsing, UI wiring)
* `assets/` — Images, PDFs, and other uploaded attachments
* `LICENSE` — Project license (MIT)

## How to run (local)

1. Clone the repository:

```bash
git clone https://github.com/VinaySinghChaudhary1/image-csv-display-imgcsv303.git
cd image-csv-display-imgcsv303
```

2. Open `index.html` in your browser (no build step required for this single-page app):

```bash
# quick open (macOS)
open index.html
# or (Linux)
xdg-open index.html
```

## Usage

Visit the GitHub Pages URL above to see the generated app. The page implements the behavior required by the evaluation checks (tables, theme toggle, assets rendering). Attachments pushed alongside the app are available in the `assets/` folder.

## Code explanation

- `index.html` — The generated HTML includes semantic layout, a container for the main UI, and script tags that wire up behavior required by the checks.
- `style.css` — Minimal overrides and project styles, loaded after Bootstrap.
- `script.js` — Handles CSV/JSON parsing, rendering tables into `#product-sales` or `#csv-data`, theme toggle logic, and small UI helpers.
- `assets/` — Static files (images, CSV/JSON, PDFs) used by the app. The generator places uploaded attachments here and references them from the app.

## License

This repository is distributed under the MIT License. See the `LICENSE` file.

---

## Round report — 2025-10-16

**Brief:** Create a gallery card area with id #gallery that displays three thumbnails and a linked larger image area with id #viewer. Also include a CSV-based inventory table with id #inventory and a filter input #inventory-filter.

**Checks:**
- !!document.querySelector('#gallery')
- document.querySelectorAll('#gallery img').length >= 3
- !!document.querySelector('#viewer')
- !!document.querySelector('#inventory')
- !!document.querySelector('#inventory-filter')

**Status:** ✅ Completed

**Pages URL:** https://VinaySinghChaudhary1.github.io/image-csv-display-imgcsv303/

---
