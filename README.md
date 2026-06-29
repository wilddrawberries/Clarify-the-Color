# Clarify the Color

Clarify the Color is a small Wordle-inspired neural color puzzle. The player adjusts weights in a simple neural net until it says a target RGB color **is the color**, while rejecting the comparison colors in the auto test.

The project is a static site: no framework, no build step, no package install.

## Play Modes

- **Daily**: picks a deterministic color for the current date.
- **Random**: picks a random color from the built-in color pool.
- **Custom**: lets the player choose any RGB color with a color picker or direct RGB inputs.

## Neural Modes

- **Single perceptron**: one linear equation over RGB plus bias.
- **Two hidden nodes**: two threshold color gates feeding an output threshold.

Each mode has a **Nodes** view and an **Equation** view.

## Files

- `index.html`: page markup
- `styles.css`: layout and visual design
- `script.js`: game logic, neural math, daily/random/custom target handling
- `generate-playable-colors.js`: optional helper script for generating playable color pools

The app runs directly from `index.html`.

## Run Locally

You can open `index.html` directly in a browser.

Or serve the folder locally:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Optional Color Pool Tool

The included generator can create a precomputed playable color list and a swatch sheet:

```powershell
node generate-playable-colors.js 400
```

This writes:

- `playable-colors.generated.txt`
- `playable-colors.generated.swatches.html`

The current app does not require this file to run.

## Host on GitHub Pages

1. Create a new GitHub repository.
2. Upload or commit these project files to the repository root:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. In GitHub, open the repository settings.
4. Go to **Pages**.
5. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: `main`
   - Folder: `/root`
6. Save.

GitHub will publish the site at:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

It can take a minute or two for the first deploy to appear.
