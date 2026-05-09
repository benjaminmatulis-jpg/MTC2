# Emterracy — Static HTML Website

A fully responsive, hand-editable HTML/CSS/JavaScript website for Emterracy lawn care and home services. Perfect for Netlify deployment.

## File Structure

```
emterracy-static/
├── index.html              # Homepage
├── services.html           # Services detail page
├── pricing.html            # Pricing page
├── about.html              # About us page
├── get-quote.html          # Quote form page
├── css/
│   └── styles.css          # Shared stylesheet (all design tokens, components, responsive)
├── js/
│   └── main.js             # Vanilla JavaScript (mobile menu, form handling, animations)
├── _redirects              # Netlify SPA routing configuration
├── netlify.toml            # Netlify build & headers config
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Key Features

- **5 Fully Responsive Pages** — Homepage, Services, Pricing, About, Get Quote
- **Warm Craft Design** — Forest green, cream, and amber color scheme with DM Serif Display + DM Sans typography
- **Hand-Editable HTML** — No build process required; edit content directly in any HTML file
- **Vanilla JavaScript** — Mobile menu, form handling, fade-in animations, toast notifications
- **CDN Images** — All images served from CDN (no local files to cause deployment issues)
- **Netlify Ready** — Includes `_redirects` and `netlify.toml` for proper SPA routing and caching

## Editing Content

### Change Text or Pricing
Open any `.html` file in a text editor and find the content you want to change. For example:
- **Homepage hero text**: Edit `index.html` around line 50
- **Service descriptions**: Edit `services.html` around line 100
- **Pricing tiers**: Edit `pricing.html` around line 80

### Update Images
All images are served from CDN URLs. To replace an image:
1. Upload your image to a CDN (e.g., Cloudinary, AWS S3, or your own hosting)
2. Copy the CDN URL
3. Find the `<img src="...">` tag in the relevant HTML file
4. Replace the URL with your new image URL

Example:
```html
<!-- Before -->
<img src="https://d2xsxph8kpxj0f.cloudfront.net/.../hero-banner.webp" alt="..." />

<!-- After -->
<img src="https://your-cdn.com/your-image.webp" alt="..." />
```

### Customize Colors
All colors are defined in `css/styles.css` at the top of the file:
```css
:root {
  --forest: #2d4a3d;
  --cream: #f5f1ed;
  --amber: #d4a574;
  --white: #ffffff;
  /* ... more colors ... */
}
```

Change these values to update the entire site's color scheme.

### Customize Fonts
Google Fonts are loaded in each HTML file's `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
```

To use different fonts, replace the URL with your preferred Google Fonts link.

## Form Handling

The Get Quote form (`get-quote.html`) currently stores data in the browser and shows a success message. To actually receive submissions:

1. **Option 1: Use Netlify Forms** — Add `netlify` attribute to the form:
   ```html
   <form id="quote-form" netlify>
     <!-- form fields -->
   </form>
   ```
   Then Netlify will email you submissions automatically.

2. **Option 2: Use a Third-Party Service** — Integrate Formspree, Basin, or similar:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
     <!-- form fields -->
   </form>
   ```

3. **Option 3: Add a Backend** — Set up a simple Node.js/Python backend to handle form submissions.

## Deploying to Netlify

### Method 1: Drag & Drop (Easiest)
1. Go to [app.netlify.com](https://app.netlify.com)
2. Drag and drop the `emterracy-static` folder onto the deploy area
3. Your site is live in seconds!

### Method 2: Git Integration
1. Push this folder to a GitHub repository
2. Connect your GitHub repo to Netlify
3. Netlify automatically deploys on every push

### Method 3: Netlify CLI
```bash
npm install -g netlify-cli
cd emterracy-static
netlify deploy --prod
```

## Performance Tips

- All images are already optimized and served from CDN
- CSS and JS are minimal and inline-friendly
- Mobile menu uses vanilla JS (no jQuery or framework bloat)
- Animations use CSS transforms for smooth 60fps performance

## Customization Ideas

1. **Add a contact form** — Integrate Formspree or Netlify Forms
2. **Add testimonials carousel** — Expand the testimonials section with a slider
3. **Add service booking** — Integrate Calendly or a booking system
4. **Add blog section** — Create a `blog/` folder with blog post HTML files
5. **Add live chat** — Integrate Intercom, Drift, or similar
6. **Add Google Analytics** — Add a GA script tag to track visitor behavior

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This website is custom-built for Emterracy. Feel free to modify and deploy as needed.

---

**Need help?** Edit the HTML files directly, test locally by opening them in a browser, and deploy to Netlify when ready!
