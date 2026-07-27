# Prachi Solanki Website

A static, multi-page personal website for Prachi Solanki, Research Analyst and Statistician.

## Pages

- `index.html` — home and biography
- `research/index.html` — research projects, publications, and presentations
- `education/index.html` — teaching and consulting
- `contact/index.html` — LinkedIn contact option and embedded Google Form

## Run locally

No build step or package installation is required. From the repository root, start a local web server:

```sh
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in a browser.

## Project structure

```text
assets/
  particles-background.js  Shared particle-background configuration
  styles.css               Shared site styles
  posters/                 Conference-poster images and notes
contact/
education/
research/                  Individual page directories
```

## Particle background

All pages load particles.js from jsDelivr and use `assets/particles-background.js` for the configuration. The animation sits behind the site content, responds to cursor movement and clicks, and uses window-level events so it does not prevent visitors from interacting with links, forms, or controls. It is disabled for visitors who have enabled reduced-motion preferences.

## Third-party software

The site uses particles.js, which is licensed under the MIT License. Attribution and the full license text are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
