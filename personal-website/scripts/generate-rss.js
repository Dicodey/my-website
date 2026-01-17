import fs from 'fs';
import path from 'path';
import { posts } from '../src/data/posts.js';

const DOMAIN = 'https://dicodey.github.io/my-website';

const generateRSS = () => {
    const rssItems = posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${DOMAIN}/#/blog/${post.id}</link>
      <guid>${DOMAIN}/#/blog/${post.id}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
    </item>
  `).join('');

    const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Diderik | Behavioural Scientist Blog</title>
  <link>${DOMAIN}</link>
  <description>Thoughts on human decision making and digital interventions.</description>
  <atom:link href="${DOMAIN}/rss.xml" rel="self" type="application/rss+xml" />
  ${rssItems}
</channel>
</rss>`;

    const distPath = path.resolve('public');
    if (!fs.existsSync(distPath)) {
        fs.mkdirSync(distPath, { recursive: true });
    }

    fs.writeFileSync(path.join(distPath, 'rss.xml'), rssFeed);
    console.log('✅ RSS Feed generated at public/rss.xml');
};

generateRSS();
