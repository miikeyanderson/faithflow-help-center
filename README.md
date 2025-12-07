# Faithflow Help Center

Official Help Center, documentation, and legal pages for Faithflow.

Built with [Docusaurus](https://docusaurus.io/), deployed to [Cloudflare Pages](https://pages.cloudflare.com/).

**Live Site**: [faithflow-help.pages.dev](https://faithflow-help.pages.dev)

## Structure

```
faithflow-help-center/
├── docs/                    # Help Center articles
│   ├── getting-started/     # Getting started guides
│   ├── lessons/             # Lesson documentation
│   ├── accounts/            # Account & profile help
│   ├── hearts-and-xp/       # Hearts & XP system
│   ├── streaks/             # Streaks documentation
│   ├── subscriptions/       # Subscription & billing
│   ├── notifications/       # Notification settings
│   └── troubleshooting/     # Common issues & support
├── src/pages/               # Static pages
│   ├── privacy.md           # Privacy Policy
│   ├── terms.md             # Terms of Use
│   ├── acknowledgements.md  # Open source licenses
│   └── feedback.tsx         # Feedback page
├── static/                  # Static assets (images, etc.)
└── docusaurus.config.ts     # Site configuration
```

## Local Development

### Prerequisites
- Node.js 20.0 or higher
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Start Development Server

```bash
npm start
```

Opens browser at `http://localhost:3000` with hot-reload enabled.

### Build

```bash
npm run build
```

Generates static files in `build/` directory.

### Serve Build Locally

```bash
npm run serve
```

Test the production build locally before deploying.

## Deployment

### Automatic Deployment (Cloudflare Pages)

Deployment is **automatic** via GitHub Actions:

1. **Push to main**: Commits to `main` branch trigger automatic deployment
2. **Pull Requests**: PRs get preview deployments automatically
3. **Live in ~2 minutes**: Changes appear on `faithflow-help.pages.dev`

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
npx wrangler pages deploy build --project-name=faithflow-help
```

Requires Cloudflare API credentials configured locally.

### Cloudflare Pages Setup

**First-time setup** (already completed):

1. **Create Cloudflare Pages project** named `faithflow-help`
2. **Connect GitHub repository** `miikeyanderson/faithflow-help-center`
3. **Add GitHub Secrets** in repository settings:
   - `CLOUDFLARE_API_TOKEN`: Cloudflare API token with Pages permissions
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID
4. **Build configuration**:
   - Build command: `npm run build`
   - Build output directory: `build`
   - Node version: `20`

## Content Updates

### Adding a New Help Article

1. Navigate to the appropriate category folder in `docs/`
2. Create a new `.md` file with frontmatter:

```md
---
sidebar_position: 5
---

# Article Title

Your content here...
```

3. The article automatically appears in the sidebar

### Updating Legal Pages

Legal pages are in `src/pages/`:
- `privacy.md` - Privacy Policy
- `terms.md` - Terms of Use
- `acknowledgements.md` - Open source licenses

Edit these files directly. They're Markdown with frontmatter.

### Adding a New Category

1. Create a folder in `docs/` (e.g., `docs/new-category/`)
2. Add `_category_.json`:

```json
{
  "label": "Category Name",
  "position": 5,
  "link": {
    "type": "generated-index",
    "description": "Category description"
  }
}
```

## Configuration

### Site Settings

Edit `docusaurus.config.ts` to change:
- Site title and tagline
- URL and base URL
- Navigation bar items
- Footer links
- Theme settings

### Sidebar

Sidebar is **auto-generated** from the `docs/` folder structure.

For manual control, edit `sidebars.ts`.

## URLs

### Help Center
- Production: `https://faithflow-help.pages.dev`
- Local: `http://localhost:3000`

### Key Pages
- Help Center: `/help/intro`
- Privacy Policy: `/privacy`
- Terms of Use: `/terms`
- Acknowledgements: `/acknowledgements`
- Feedback: `/feedback`

## iOS App Integration

The Faithflow iOS app links to these pages from Settings:
- `ExternalLinks.swift` contains all external URLs
- Settings → Privacy → Privacy Policy
- Settings → Privacy → Terms of Use
- Settings → Support → Help Center
- Settings → Support → Send Feedback

**When URLs change**, update `ExternalLinks.swift` in the iOS repo.

## Custom Domain (Future)

To use `help.faithflow.app` instead of `.pages.dev`:

1. Add custom domain in Cloudflare Pages dashboard
2. Update `docusaurus.config.ts` URL to `https://help.faithflow.app`
3. Configure DNS CNAME record: `help` → `faithflow-help.pages.dev`
4. Update iOS `ExternalLinks.swift` with new domain

## Contributing

1. Create a feature branch
2. Make changes and test locally with `npm start`
3. Build and verify: `npm run build && npm run serve`
4. Push and create a Pull Request
5. Review the preview deployment automatically created for your PR
6. Merge to `main` to deploy to production

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json build .docusaurus
npm install
npm run build
```

### Links Broken

Check that internal links use:
- Docs: `./relative-path` or `../category/article`
- Pages: `/page-name` (absolute from root)

### Images Not Loading

Place images in:
- `static/img/` for static assets
- Reference as `/img/filename.png` in Markdown

## License

Copyright © 2025 Asymmetric Labs. All rights reserved.

See [acknowledgements](/acknowledgements) for open-source licenses.
