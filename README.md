# Balochi Potli

Small static web project demonstrating a simple page with images and client-side scripting.

## Project structure

- `index.html` — main page and entry point
- `style.css` — styles for layout and presentation
- `script.js` — interactive behavior
- `images.js` — image data or image-related helper code

## Description

This repository contains a lightweight static site titled "Balochi Potli." It is intended for learning and demonstration purposes. The UI loads images from `images.js` and applies styles from `style.css`. No build step or server is required.

## Task 2 (Areeba Tariq)

This branch `task-2-AreebaTariq` should contain the Task 2 deliverable. Current contents are the project files and this README. If you want a specific implementation for Task 2 (feature, bugfix, or enhancement), describe it here and I will add the changes.

Example Task 2 ideas you might request:
- Add an image gallery with captions
- Implement responsive layout and mobile navigation
- Add form to collect visitor feedback

## How to run locally

1. Open the project folder in File Explorer.
2. Double-click `index.html` or open it in any browser.

No web server is required. To preview with a local server (optional):

```powershell
# using Python 3
cd "C:\Users\User\Documents\bag"
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

## Git / push instructions

To push this project to GitHub on branch `task-2-AreebaTariq`, run these commands in PowerShell from the project folder:

```powershell
cd "C:\Users\User\Documents\bag"
git init
git checkout -b task-2-AreebaTariq
git add .
git commit -m "Initial project import + Task 2"
git remote remove origin 2>$null
git remote add origin https://github.com/areeba20044-cmyk/Task-2-AreebaTariq
git push -u origin task-2-AreebaTariq
```

If you prefer I push from here, provide a GitHub Personal Access Token (PAT) with `repo` scope and confirm consent; I will create/overwrite the `task-2-AreebaTariq` branch.

## Author

Areeba Tariq

---

If you'd like a tailored Task 2 implementation, tell me the requirements and I'll add the code and update this README accordingly.
