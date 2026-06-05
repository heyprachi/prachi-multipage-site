Add poster or conference images to this folder.

To add a new slide:

1. Put the image file here, for example `my-conference-poster.jpg`.
2. Open `research/index.html`.
3. Copy one `<article class="poster-slide">...</article>` block.
4. Update the image path in both places:
   - `href="../assets/posters/my-conference-poster.jpg"`
   - `src="../assets/posters/my-conference-poster.jpg"`
5. Update the slide title inside `<h3>...</h3>`.
6. Update the subtitle inside the caption `<p>...</p>`.
7. Add one more dot button in `.poster-dots` and set the next number:
   - `data-poster-dot="3"`
   - `aria-label="Show poster 4"`

Use `.jpg`, `.png`, `.webp`, or `.svg` files. Wide poster images work best.
