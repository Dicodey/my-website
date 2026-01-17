#!/bin/bash

# 1. Ask for a description of changes
echo "📝 What did you change? (e.g., 'Updated bio'):"
read commit_message

if [ -z "$commit_message" ]; then
  commit_message="Update content"
fi

echo "🚀 Starting deployment..."

# 2. Add changes
git add .

# 3. Commit changes
git commit -m "$commit_message"

# 4. Build the site
echo "📦 Building website..."
npm run build

# 5. Deploy to GitHub
echo "🌍 Sending to GitHub..."
npm run deploy

echo "✅ Success! Your site is live found at: https://dicodey.github.io/my-website/"
echo "   (It may take 1-2 minutes to update)"
