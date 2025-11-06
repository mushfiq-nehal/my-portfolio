# Quick Reference Guide

## 📝 How to Edit Content

### Update Your Name/Title
**File:** `index.html`
**Line:** ~94-99 (Hero section)
```html
<h1>Hi, I'm <span>Your Name</span> 👋</h1>
```

### Change Contact Information
**File:** `index.html`
**Lines:** ~156-183 (About section)
Update: Email, Phone, LinkedIn, GitHub, Codeforces

### Add New Skills
**File:** `index.html`
**Lines:** ~248-295 (Skills section)
Copy existing skill badge:
```html
<span class="skill-badge">New Skill</span>
```

### Add New Project
**File:** `index.html`
**Lines:** ~307-367 (Projects section)
Copy existing project card and update:
- Title
- Tech tags
- Description
- Links

### Update Social Links
**File:** `index.html`
**Lines:** ~516-531 (Contact section)
Update href attributes with your URLs

---

## 🎨 How to Change Colors

### Primary Color (Sky Blue)
**Current:** `#38bdf8`
**Files to update:** `index.html`, `styles.css`

**Find and replace:**
- `#38bdf8` → Your new color
- Update Tailwind config in `<script>` tag

### Dark Background
**Current:** `#0f172a`
**Change in:** Tailwind config section

---

## 🖼️ How to Change Images

### Profile Photo
1. Add new image to `assets/images/`
2. Update in `index.html`:
   - Line ~109 (Hero section)
   - Line ~158 (About section)
3. Update in `script.js`:
   - Line ~215 (preloadImages function)

---

## 📄 Resume Setup

1. Create/export your resume as PDF
2. Name it exactly: `resume.pdf`
3. Place in: `assets/` folder
4. Delete: `RESUME_PLACEHOLDER.txt`
5. Done! Download button will work automatically

---

## 🌐 Social Media Links

Update these in the Contact section:

### LinkedIn
```html
href="https://linkedin.com/in/your-username"
```

### GitHub
```html
href="https://github.com/your-username"
```

### Codeforces
```html
href="https://codeforces.com/profile/your-username"
```

### Email
```html
href="mailto:your-email@example.com"
```

---

## 🚀 Deployment Commands

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/username/username.github.io
git push -u origin main
```

### Netlify
1. Drag and drop entire Portfolio folder
2. Or use CLI:
```bash
npm install -g netlify-cli
netlify deploy
```

---

## 🔧 Common Issues

### Dark mode not persisting?
- Clear localStorage: F12 → Application → Local Storage → Clear

### Animations not working?
- Check AOS library loaded: F12 → Network → Check for aos.css/aos.js

### Images not showing?
- Verify file paths are correct
- Check file extensions (.jpg vs .png)
- Open F12 console to see 404 errors

### Mobile menu not closing?
- Check JavaScript loaded correctly
- Clear browser cache

---

## 📊 SEO Optimization (Optional)

Add to `<head>` section:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://yoursite.com/">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yoursite.com/assets/images/preview.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://yoursite.com/">
<meta property="twitter:title" content="Your Name - Portfolio">
<meta property="twitter:description" content="Your description">
<meta property="twitter:image" content="https://yoursite.com/assets/images/preview.png">
```

---

## 🎯 Performance Tips

1. **Optimize Images:**
   - Compress using TinyPNG
   - Use WebP format
   - Max size: 500KB per image

2. **Minify Files (for production):**
   - Use online minifiers
   - Or build tools like Webpack

3. **Enable Caching:**
   - Add `.htaccess` for Apache
   - Or configure on hosting platform

---

## 📱 Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

---

## 💡 Tips for Success

1. **Keep it updated:** Add new projects regularly
2. **Show personality:** Add unique touches
3. **Mobile first:** Test on phones
4. **Fast loading:** Optimize images
5. **Clear CTAs:** Make it easy to contact you
6. **Proofread:** Check for typos
7. **Get feedback:** Ask friends to review
8. **Analytics:** Add Google Analytics to track visitors

---

## 🆘 Support

For issues or questions:
1. Check SETUP_GUIDE.txt
2. Read README.md
3. Check browser console (F12)
4. Search online for specific errors

---

**Happy coding! 🚀**
