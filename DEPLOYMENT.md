# Deployment Guide

## Quick Start: Deploy to Vercel in 3 Steps

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Portfolio ready for deployment"
git branch -M main
git remote add origin https://github.com/yourusername/reyan-ahmed-portfolio.git
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with GitHub
3. Click "Add New" → "Project"
4. Select your repository
5. Click "Deploy"

### Step 3: Your Site is Live! 🎉
- Default URL: `https://project-name.vercel.app`
- Configure custom domain in Vercel dashboard

## What Gets Deployed

- `index.html` - Main portfolio page
- `package.json` - Project metadata
- `vercel.json` - Deployment configuration
- `README.md` - Documentation
- All other files in the repository

## Environment Setup

### Prerequisites
- GitHub account (for version control)
- Vercel account (free tier available)
- Git installed locally

### Create GitHub Repository

1. Create a new repository on GitHub
2. Clone locally:
   ```bash
   git clone https://github.com/yourusername/repo-name.git
   cd repo-name
   ```
3. Copy all files from this project
4. Commit and push:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

## Vercel Deployment Configuration

The `vercel.json` file includes:

- **cleanUrls**: Remove `.html` from URLs
- **trailingSlash**: Normalize URL trailing slashes
- **Headers**: Security and caching headers
- **Rewrites**: SPA routing (if needed later)

## Custom Domain Setup

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Domain will be active in ~48 hours

## Continuous Deployment

Every time you push to `main` branch:
1. Vercel automatically detects changes
2. Builds and deploys new version
3. Updates live site instantly

## Rollback / Version History

- View all deployments in Vercel Dashboard
- Click any deployment to promote/rollback
- No manual intervention needed

## Performance Optimization

This site is already optimized for:
- Fast loading (static HTML/CSS/JS)
- High Lighthouse scores
- Mobile-friendly
- SEO-friendly

## Monitoring & Analytics

Vercel provides:
- Build logs
- Deployment history
- Performance metrics
- Analytics overview

Check these in your Vercel Dashboard.

## Troubleshooting

### Site shows 404
- Check that `index.html` exists
- Verify `vercel.json` configuration
- Check deployment logs in Vercel Dashboard

### Custom domain not working
- Allow 24-48 hours for DNS propagation
- Verify DNS records in domain registrar
- Check Vercel domain settings

### Form submissions not working
- Contact form is currently client-side only
- For backend integration, see Vercel Functions docs

## Next Steps

1. **Update your information** in `index.html`
2. **Add your real projects** with GitHub links
3. **Set up custom domain** (optional)
4. **Enable analytics** in Vercel Dashboard
5. **Promote on LinkedIn, Twitter, etc.**

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel GitHub Integration](https://vercel.com/docs/git)
- [Custom Domains Guide](https://vercel.com/docs/concepts/projects/custom-domains)

---

Your portfolio is production-ready! 🚀
