# Quick Photo Upload Guide

## Super Simple Workflow

1. **Drop your photos** into this folder:
   ```
   /Users/diderik/Documents/Antigravity/personal-website/public/photos/
   ```

2. **Edit the photo list** at `src/data/photos.js`:
   ```javascript
   export const photos = [
       {
           id: '1',
           url: '/photos/YOUR-FILENAME.jpg',  // ← Change this
           caption: 'Your Caption Here',      // ← Change this
           category: 'Landscape'              // ← Change this
       },
       // Add more photos...
   ];
   ```

3. **Run this one command:**
   ```bash
   cd /Users/diderik/Documents/Antigravity/personal-website && ./update-photos.sh
   ```

That's it! The script will automatically:
- ✅ Strip all metadata (GPS, camera info, etc.)
- ✅ Build and deploy to your website
- ✅ No pauses or prompts - just runs!

**IMPORTANT:** Make sure you update `photos.js` BEFORE running the command!

---

## The One-Liner

After adding photos and updating `photos.js`, just run:

```bash
cd /Users/diderik/Documents/Antigravity/personal-website && ./update-photos.sh
```

---

## First Time Setup

Install exiftool (one-time only):
```bash
brew install exiftool
```
