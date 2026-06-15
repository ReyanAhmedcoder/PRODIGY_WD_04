# Reyan Ahmed — AI & ML Portfolio

A modern, fully responsive portfolio website showcasing AI, Machine Learning, and Web Development projects and achievements.

## 🚀 Features

- **Modern Design**: Glassmorphism UI with gradient accents
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Animated Neural Network Canvas**: Interactive background animation
- **Smooth Scroll Reveals**: Progressive element animations
- **Contact Form**: Fully functional contact section
- **Dark Theme**: Easy on the eyes with vibrant accent colors
- **Performance Optimized**: Lightweight, fast-loading
- **Vercel Ready**: Easy one-click deployment

## 📋 Sections

1. **Home**: Hero section with call-to-action buttons
2. **About**: Personal introduction and statistics
3. **Education**: Academic background and scholarships
4. **Skills**: Technical skills with proficiency bars
5. **Projects**: Featured projects with links
6. **Achievements**: Milestones and accomplishments
7. **Contact**: Get in touch with contact form and social links

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Advanced styling with CSS variables
- **Vanilla JavaScript**: No frameworks required
- **Canvas API**: Neural network animation

## 📦 Project Structure

```
.
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Extracted stylesheet (optional)
├── js/
│   └── script.js       # Extracted JavaScript (optional)
├── package.json        # Node.js project metadata
├── vercel.json         # Vercel deployment configuration
├── .gitignore          # Git ignore rules
├── README.md           # This file
└── .github/
    └── workflows/      # CI/CD workflows (optional)
```

## 🚀 Deployment to Vercel

### Quick Deploy (Recommended)

1. Push this repository to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Add New..." → "Project"
4. Select your GitHub repository
5. Click "Deploy"

That's it! Your site will be live in seconds.

### Manual Deploy

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build (no build step needed for static site)
npm run build
```

## ✏️ Customization

### Update Personal Information

Edit `index.html` and replace:
- `Reyan Ahmed` with your name
- `your@email.com` with your email
- `linkedin.com/in/yourprofile` with your LinkedIn
- `github.com/yourusername` with your GitHub
- Update project details, achievements, and skills

### Modify Colors

Edit the CSS variables in `index.html`:
```css
:root {
  --navy:    #050A1A;
  --indigo:  #4F46E5;
  --violet:  #7C3AED;
  --cyan:    #06B6D4;
  /* ... more colors ... */
}
```

### Add Your Photo

Replace the emoji placeholder (🧑‍💻) with an actual image:
```html
<img src="path/to/your/photo.jpg" class="hero-photo" alt="Profile photo" />
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📄 License

MIT License - Feel free to use this template for your own portfolio.

## 🤝 Contributing

Feel free to fork and customize this template for your portfolio!

## 📞 Contact

- **Email**: your@email.com
- **LinkedIn**: linkedin.com/in/yourprofile
- **GitHub**: github.com/yourusername

---

**Made with ❤️ using HTML, CSS & JavaScript**
