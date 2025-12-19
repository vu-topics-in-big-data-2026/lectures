# Big Data Course Website

This is a responsive, single-page website for the Topics in Big Data course (CS:4266/5266) at Vanderbilt University.

## Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern, clean UI with smooth animations
- ⚡ Fast loading with optimized assets
- ♿ Accessible navigation and keyboard support
- 🌐 Ready for GitHub Pages deployment

## Deployment to GitHub Pages

### Option 1: Deploy from the `site` directory (Recommended)

1. Go to your repository settings on GitHub
2. Navigate to **Pages** section
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/site**
4. Click **Save**

Your site will be available at: `https://jptalusan.github.io/vu-topics-in-big-data-2026/`

### Option 2: Deploy from root with custom path

If you want to deploy from root, move `index.html`, `styles.css`, and `script.js` to the root directory.

## Local Development

To preview the site locally:

1. **Using Python's built-in server:**
   ```bash
   cd site
   python3 -m http.server 8000
   ```
   Then visit: `http://localhost:8000`

2. **Using Node.js (if you have it installed):**
   ```bash
   cd site
   npx serve
   ```

3. **Using VS Code Live Server extension:**
   - Install "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

## File Structure

```
site/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # Interactive features
├── assets/         # Images and PDFs
└── readme.md       # This file
```

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #f59e0b;
    /* ... */
}
```

### Content
All content is in `index.html`. Each section is clearly marked with comments.

### Adding New Weeks
Add a new card in the `.weeks-grid` section:
```html
<div class="week-card">
    <div class="week-number">Week 9</div>
    <h3>Your Topic</h3>
    <p>Description</p>
    <a href="link" class="week-link">View Materials →</a>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Vanilla JS (no frameworks = faster load)
- CSS animations (GPU accelerated)
- Lazy loading for images
- Responsive images
- Optimized assets

## Accessibility

- Semantic HTML5
- ARIA labels where needed
- Keyboard navigation
- Focus indicators
- Color contrast ratios meet WCAG 2.1 AA

## License

© 2026 Vanderbilt University

## Credits

Developed for CS:4266/5266 - Topics in Big Data

 This year the class is online and synchronous. If there is an emergency please inform the instructor and follow localized safety instructions applicable to your condition and scenario.

