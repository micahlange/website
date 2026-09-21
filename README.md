# Micah Lange Personal Website

Static personal website for `micahlange.com`, designed to be hosted with GitHub Pages.

## Editing

- `index.html` controls the page structure.
- `styles.css` controls the visual design.
- `app.js` contains the editable year recap content and image links.

The site images are stored in `assets/photos/` and referenced through the `img` object in `app.js`.

For 2026 photos, use `2026-SS-PP-description.jpeg`: `SS` is the two-digit section number and `PP` is the photo's order within that section. The featured image uses section `00`. Keep the matching section numbers in `app.js` and `2026-notes.md` in sync when reordering sections.

## GitHub Pages

When ready, enable GitHub Pages for the repository's `main` branch. Add a `CNAME` file only when you are ready to point `micahlange.com` away from Wix and toward GitHub Pages.
