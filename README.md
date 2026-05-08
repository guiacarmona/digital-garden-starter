# Digital Garden Starter

A bilingual (English / Spanish) static site template for a digital garden,
built with plain HTML and CSS. No build step. No framework. Edit a file,
push to GitHub, your changes are live.

This is the starter template for the Digital Garden course.

## What's inside

```
.
├── index.html               # English home
├── es/index.html            # Spanish home
├── en/
│   ├── garden/              # Your notes (the digital garden itself)
│   ├── letters/             # Newsletter / longer pieces
│   ├── offerings/           # Workshops, services, products
│   ├── about/
│   └── contact/
├── es/                      # Mirror of /en/ in Spanish
├── assets/
│   ├── style.css            # All visual styling lives here
│   ├── menu.js              # Mobile menu toggle
│   └── images/              # Drop your images here
└── .github/workflows/static.yml   # Auto-deploys to GitHub Pages
```

## Getting started

1. Create a new repository on GitHub from this template.
2. Clone it locally.
3. Open `index.html` in a browser to preview (no server needed).
4. Edit text directly in the HTML files.
5. Replace placeholder images in `assets/images/`.
6. Push to `main` — GitHub Pages will build and deploy automatically.

## Customizing the look

All colors and typography are defined as CSS variables at the top of
`assets/style.css`:

```css
:root {
    --bg-color: #fbfaf6;
    --text-color: #1a1a1a;
    --accent: #5a7a5a;       /* links, hover states */
    --border-color: #d8d3c7;
    --muted: #6e6960;
}
```

Change those five values and the entire site re-skins.

The fonts are loaded from Google Fonts (Lora for body and headings,
JetBrains Mono for navigation, captions, and code). To swap fonts, edit
the `@import` line at the top of `style.css` and the `font-family`
declarations.

## Adding a new note to your garden

1. Make a new folder inside `en/garden/` (and optionally `es/garden/`).
   The folder name becomes the URL slug — keep it lowercase, hyphenated:
   `en/garden/the-quiet-page/`.
2. Copy `en/garden/first-note/index.html` into it as a starting point.
3. Edit the title, body, and date.
4. Add a link to it from `en/garden/index.html`.

## Deploying

The included GitHub Action (`.github/workflows/static.yml`) deploys the
entire repository to GitHub Pages whenever you push to `main`. To enable:

1. In your repo on GitHub, go to **Settings → Pages**.
2. Under "Build and deployment → Source", choose **GitHub Actions**.
3. Push any change to `main`. The site will be live at
   `https://<your-username>.github.io/<repo-name>/`.

To use a custom domain, edit the `CNAME` file and add your domain in
**Settings → Pages**.

## License

This template is released under the MIT License so you can use it
however you like.
