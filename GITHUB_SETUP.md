# GitHub Setup Guide

## Step 1: Initialize Git Repository

From your project directory, run:

```bash
git init
git add .
git commit -m "Initial commit: Portfolio ready for Vercel deployment"
```

## Step 2: Create Repository on GitHub

1. Go to [GitHub.com](https://github.com/new)
2. Create a new repository named `reyan-ahmed-portfolio`
3. Do **NOT** initialize with README (you already have one)
4. Click "Create repository"

## Step 3: Push to GitHub

After creating the repository, GitHub will show you the commands. Run:

```bash
git branch -M main
git remote add origin https://github.com/yourusername/reyan-ahmed-portfolio.git
git push -u origin main
```

Replace `yourusername` with your actual GitHub username.

## Step 4: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Select "Import Git Repository"
4. Paste your repository URL and click "Continue"
5. Click "Deploy"

Your portfolio will be live in minutes!

## File Structure Overview

```
reyan-ahmed-portfolio/
├── index.html              # Main portfolio page
├── css/
│   └── styles.css          # All styling (separated)
├── js/
│   └── script.js           # All JavaScript logic (separated)
├── package.json            # Project metadata
├── vercel.json             # Vercel deployment config
├── .gitignore              # Git ignore rules
├── README.md               # Project documentation
├── DEPLOYMENT.md           # Deployment instructions
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions CI/CD
```

## What to Customize Before Pushing

1. **Update Personal Info in index.html:**
   - Replace "Reyan Ahmed" with your name
   - Update email: `your@email.com`
   - Update LinkedIn: `linkedin.com/in/yourprofile`
   - Update GitHub: `github.com/yourusername`

2. **Update Projects:** Add your actual project links and descriptions

3. **Update package.json:** Modify the name and description to reflect your portfolio

## Vercel Configuration Includes

✅ SEO-friendly URLs (cleanUrls)  
✅ Security headers (X-Frame-Options, X-XSS-Protection, etc.)  
✅ Caching configuration  
✅ SPA routing support (ready for future expansion)  

## After Deployment

- Share your live URL on LinkedIn, Twitter, GitHub bio
- Monitor performance in Vercel Dashboard
- Every push to `main` branch auto-deploys!

## Need Help?

- [Vercel Docs](https://vercel.com/docs)
- [GitHub Git Basics](https://docs.github.com/en/get-started)
- [HTML/CSS/JS Resources](https://developer.mozilla.org)

---

You're all set! Push your code to GitHub and deploy to Vercel. 🚀
