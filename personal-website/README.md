# Di's Personal Website

A personal portfolio website built with React + Vite, featuring animated brain blob decorations.

**Live site:** https://diypma.github.io/my-website/

---

## 📝 How to Write & Publish Blog Posts

### Step 1: Open the posts file
Open `src/data/posts.js` in any text editor.

### Step 2: Add a new post
Copy this template and paste it at the TOP of the `posts = [` array (after the opening bracket):

```javascript
  {
    id: "my-post-title",
    title: "My Post Title",
    date: "2025-01-19",
    author: "Di",
    excerpt: "A short teaser for the listing page.",
    readTime: "5 min read",
    content: `
      <p>Your post content goes here...</p>
    `
  },
```

### Step 3: Fill in your content using HTML formatting

| To create... | Use this code |
|--------------|---------------|
| Paragraph | `<p>Your text here.</p>` |
| **Bold** | `<strong>bold text</strong>` |
| *Italic* | `<em>italic text</em>` |
| Link | `<a href="https://url.com">link text</a>` |
| Heading | `<h2>Big Heading</h2>` or `<h3>Smaller</h3>` |
| Bullet list | `<ul><li>Item 1</li><li>Item 2</li></ul>` |
| Numbered list | `<ol><li>Step 1</li><li>Step 2</li></ol>` |
| Quote | `<blockquote>Quote text</blockquote>` |

### Step 4: Publish
Run this command in the project folder:
```bash
npm run deploy
```

This will build the site and publish it. The RSS feed at `/rss.xml` updates automatically!

---

## ✏️ Editing Other Sections

| Section | File to edit |
|---------|--------------|
| Hero intro | `src/components/Hero.jsx` (lines 30-40) |
| About Me | `src/components/About.jsx` (lines 24-34) |
| Experience cards | `src/components/Experience.jsx` (the `experiences` array) |
| Contact info | `src/components/Contact.jsx` (email, social links) |

**Tip:** Just look for the text you want to change and edit it directly. Be careful not to delete any `<` or `>` symbols!

---

## 🚀 Quick Commands

```bash
npm run dev      # Start local preview at localhost:5173
npm run build    # Build for production
npm run deploy   # Build AND publish to GitHub Pages
```

---

## 📁 Project Structure

```
src/
├── components/     # Page sections (Hero, About, etc.)
├── data/
│   └── posts.js    # Blog post content (edit this!)
├── assets/         # Images (profile photo)
├── App.jsx         # Main app layout
└── index.css       # Global styles
```
