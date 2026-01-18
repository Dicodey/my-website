# How to Add Your Photography to the Website

## Quick Start Guide

### Step 1: Add Your Photos to the Folder

1. **Navigate to the photos folder:**
   ```
   /Users/diderik/Documents/Antigravity/personal-website/public/photos/
   ```

2. **Copy your photos into this folder**
   - Drag and drop your photos into this folder
   - Name them something simple (e.g., `sunset-thames.jpg`, `street-london.jpg`)
   - Recommended: Keep file sizes under 500KB for fast loading

### Step 2: Remove Metadata (Important for Privacy!)

Photos contain EXIF metadata that can include GPS coordinates, camera info, and timestamps. Remove this before publishing:

1. **Install exiftool** (one-time setup):
   ```bash
   brew install exiftool
   ```

2. **Run the metadata stripper:**
   ```bash
   cd /Users/diderik/Documents/Antigravity/personal-website
   ./strip-metadata.sh
   ```

This will remove ALL metadata from your photos while keeping the image quality intact.

### Step 3: Update the Photo List

1. **Open this file:**
   ```
   /Users/diderik/Documents/Antigravity/personal-website/src/data/photos.js
   ```

2. **Replace the placeholder photos with your own:**

   ```javascript
   export const photos = [
       {
           id: '1',
           url: '/photos/sunset-thames.jpg',      // Your photo filename
           caption: 'Sunset over the Thames',     // Your caption
           category: 'Landscape'                  // Your category
       },
       {
           id: '2',
           url: '/photos/street-london.jpg',
           caption: 'Morning Commute',
           category: 'Street'
       },
       // Add more photos here!
   ];
   ```

3. **Tips:**
   - The `url` should be `/photos/YOUR-FILENAME.jpg`
   - Keep captions short and evocative
   - Use categories like: Street, Landscape, Portrait, Architecture, Nature

### Step 4: Deploy Your Changes

Run the publish script:

```bash
cd /Users/diderik/Documents/Antigravity/personal-website
./publish.sh
```

Your gallery will be live in about 1 minute!

---

## Finding the Easter Egg

1. Visit your website homepage
2. Scroll to the very bottom
3. Click the period `.` at the end of "© 2026 Di. All rights reserved**.**"
4. Enjoy your secret gallery! 📸

---

## Example: Adding a New Photo

1. Copy `my-awesome-photo.jpg` to `/Users/diderik/Documents/Antigravity/personal-website/public/photos/`
2. Open `src/data/photos.js`
3. Add this entry:
   ```javascript
   {
       id: '5',
       url: '/photos/my-awesome-photo.jpg',
       caption: 'My Awesome Photo',
       category: 'Nature'
   },
   ```
4. Run `./publish.sh`
5. Done! ✨

---

## Photo Folder Location

```
/Users/diderik/Documents/Antigravity/personal-website/public/photos/
```

Just drop your photos here and reference them in `photos.js`!
