# Understrap Web Awesome Child Theme

A modern WordPress child theme for [Understrap](https://understrap.com), integrating [Web Awesome Pro](https://webawesome.pro) for next-generation UI components and icons. Built for rapid development, accessibility, and seamless Bootstrap 5 support.

## Features

- **Based on Understrap**: Leverages the Understrap parent theme for a solid, Bootstrap 5-powered foundation.
- **Web Awesome Pro Integration**: Includes pre-bundled Web Awesome Pro for advanced UI components and icons.
- **Modern Build Tools**: Uses Sass, PostCSS, Rollup, and Terser for efficient asset management.
- **SVG Support**: Upload and use SVGs safely in the media library.
- **Custom Templates**: Includes full-width, portfolio, and Web Awesome demo page templates.
- **Translation Ready**: Supports localization via `understrap-child` text domain.

## Installation

1. **Install Understrap Parent Theme**
	- Download and install [Understrap](https://understrap.com) in your `wp-content/themes` directory.
2. **Add This Child Theme**
	- Copy this folder (`under-webawesome-child`) to `wp-content/themes/`.
3. **Activate**
	- In your WordPress admin, go to Appearance > Themes and activate "Understrap Web Awesome Child".

## Web Awesome Pro Usage

Web Awesome Pro assets are included in the `webawesome/` directory. They are automatically enqueued. To use Web Awesome components or icons in your templates or posts, refer to the [Web Awesome USAGE.md](webawesome/USAGE.md) for examples.

Example (in a template):

```html
<wa-button variant="primary">Primary Button</wa-button>
<wa-icon name="rocket" variant="solid"></wa-icon>
```

## Development

### Requirements
- Node.js >= 14
- npm

### Build Commands

- `npm install` — Install dependencies
- `npm run dist` — Build CSS and JS assets
- `npm run watch` — Watch for changes in Sass/JS and rebuild automatically

See `package.json` for more scripts.

## Custom Templates

- `page-webawesome.php`: Demo of Web Awesome components
- `page-templates/fullwidthpage.php`: Full-width page layout
- `page-templates/page-portfolio.php`: Portfolio item display (with ACF support)

## File Structure

- `css/` — Compiled CSS
- `js/` — Compiled JS
- `src/sass/` — Source Sass files
- `src/js/` — Source JS files
- `webawesome/` — Web Awesome Pro assets and docs

## Credits

- [Understrap](https://understrap.com)
- [Web Awesome Pro](https://webawesome.pro)
- [Fonticons, Inc.](https://fontawesome.com)

## License

This theme is licensed under the GNU GPL v3. See [LICENSE](LICENSE).
Web Awesome Pro assets are © Fonticons, Inc. and subject to their own license (see `webawesome/LICENSE.md`).
