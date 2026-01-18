#!/bin/bash

# Ensure we are in the correct directory
cd "$(dirname "$0")"

# Quick Photo Publisher
# Strips metadata and publishes your photos to the website

echo "----------------------------------------"
echo "🔒 Stripping metadata from photos..."

# Check if exiftool is installed
if ! command -v exiftool &> /dev/null; then
    echo "❌ exiftool is not installed."
    echo "💡 Run: brew install exiftool"
    exit 1
fi

# Strip metadata
exiftool -all= -overwrite_original public/photos/*.jpg public/photos/*.jpeg public/photos/*.png 2>/dev/null

echo "✅ Metadata removed!"
echo ""
echo "📦 Building and deploying..."
echo "----------------------------------------"

git add .
git commit -m "Update photography gallery" || echo "⚠️ No changes to commit"

echo "📦 Building website..."
npm run build || { echo "❌ Build failed!"; exit 1; }

echo "🌍 Sending to GitHub..."
npm run deploy || { echo "❌ Deployment failed!"; exit 1; }

echo ""
echo "----------------------------------------"
echo "✅ Success! Your site is live at:"
echo "   https://dicodey.github.io/my-website/"
echo "----------------------------------------"
