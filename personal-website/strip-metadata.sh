#!/bin/bash

# Photo Metadata Stripper
# This script removes EXIF metadata from photos before adding them to your website

echo "🔒 Photo Metadata Stripper"
echo "=========================="
echo ""

# Check if exiftool is installed
if ! command -v exiftool &> /dev/null; then
    echo "❌ exiftool is not installed."
    echo ""
    echo "To install it, run:"
    echo "  brew install exiftool"
    echo ""
    exit 1
fi

# Check if any photos are in the folder
PHOTO_COUNT=$(find public/photos -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) ! -name ".*" | wc -l | tr -d ' ')

if [ "$PHOTO_COUNT" -eq 0 ]; then
    echo "📁 No photos found in public/photos/"
    echo ""
    echo "Add your photos to public/photos/ and run this script again."
    exit 0
fi

echo "Found $PHOTO_COUNT photo(s) in public/photos/"
echo ""
echo "This will remove ALL metadata (EXIF, GPS, etc.) from your photos."
read -p "Continue? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cancelled."
    exit 0
fi

echo ""
echo "🧹 Stripping metadata..."
echo ""

# Strip all metadata from photos
exiftool -all= -overwrite_original public/photos/*.jpg public/photos/*.jpeg public/photos/*.png 2>/dev/null

echo ""
echo "✅ Done! Your photos are now metadata-free and safe to publish."
echo ""
