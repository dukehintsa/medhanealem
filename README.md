# Debre Mehret Medhane Alem EOTC Website

A static website (plain HTML, CSS and JS) for Debre Mehret Medhane Alem Ethiopian Orthodox Tewahedo Church in Jamestown, NC. It includes the church building fund GoFundMe campaign: https://gofund.me/287dd9adf

There is no build step, so it runs on GitHub Pages as it is.

## Files

```
index.html            main page
assets/css/style.css  styles
assets/js/main.js     menu, slideshow, gallery lightbox, share button
assets/img/           logo, photos, rendering of the new church
.nojekyll             tells GitHub Pages to serve files as they are
```

## Preview locally

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Publish on GitHub Pages

1. Create a new repository on GitHub, for example `medhanealem-website`.
2. Upload the files from this folder. You can drag and drop them on the repo page ("Add file → Upload files"), or run:
   ```bash
   git init
   git add .
   git commit -m "Initial church website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/medhanealem-website.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, then branch `main` and folder `/ (root)`, and click **Save**.
4. After a minute or two the site will be live at `https://<your-username>.github.io/medhanealem-website/`.

To use a custom domain (such as `medhanealem.org`), enter it under Settings → Pages → Custom domain and follow GitHub's DNS instructions.

## Editing

- **Service times:** in `index.html`, find the `Services` section (marked `TODO`) and put in the real days and times.
- **GoFundMe:** the live widget uses the campaign URL in the `gfm-embed` element. The buttons link to `https://gofund.me/287dd9adf`.
- **Photos:** replace or add images in `assets/img/` and update the `gallery` section.
