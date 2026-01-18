#!/bin/bash

# Ensure we are in the correct directory
cd "$(dirname "$0")"

# 1. Ask for a description of changes
echo "----------------------------------------"
echo "📝 What did you change? (e.g., 'Updated bio'):"
read commit_message

if [ -z "$commit_message" ]; then
  commit_message="Update content"
fi

echo ""
echo "🚀 Starting deployment..."
echo "----------------------------------------"

# 2. Add changes
echo "➕ Adding changes..."
git add .

# 3. Commit changes
echo "💾 Committing changes..."
git commit -m "$commit_message" || echo "⚠️ No changes to commit"

# 4. Build the site
echo "📦 Building website..."
npm run build || { echo "❌ Build failed!"; exit 1; }

# 5. Deploy to GitHub
echo "🌍 Sending to GitHub..."
npm run deploy || { echo "❌ Deployment failed!"; exit 1; }

echo ""
echo "----------------------------------------"
echo "✅ Success! Your site is live at:"
echo "   https://dicodey.github.io/my-website/"
echo "   (It may take 1-2 minutes to update)"
echo "----------------------------------------"
