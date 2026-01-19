/**
 * posts.js - Blog Post Data Store
 * 
 * Contains all blog posts as an array of objects. Each post has:
 * - id: URL-friendly slug for routing (use lowercase-with-dashes)
 * - title: Display title
 * - date: Publication date (YYYY-MM-DD format, e.g., "2025-10-15")
 * - author: Post author name
 * - excerpt: Short preview text for listings (1-2 sentences)
 * - readTime: Estimated reading time (e.g., "5 min read")
 * - content: Full HTML content of the post (see formatting guide below)
 * 
 * ═══════════════════════════════════════════════════════════════════
 * HOW TO ADD A NEW BLOG POST
 * ═══════════════════════════════════════════════════════════════════
 * 
 * Copy this template and add it to the array below:
 * 
 *   {
 *     id: "my-post-title",           // URL slug (lowercase, dashes instead of spaces)
 *     title: "My Post Title",        // Display title
 *     date: "2025-01-19",            // Today's date in YYYY-MM-DD
 *     author: "Di",
 *     excerpt: "A short teaser that appears on the blog listing page.",
 *     readTime: "5 min read",
 *     content: `
 *       <p>Your post content here...</p>
 *     `
 *   },
 * 
 * ═══════════════════════════════════════════════════════════════════
 * HTML FORMATTING GUIDE (for the "content" field)
 * ═══════════════════════════════════════════════════════════════════
 * 
 * PARAGRAPHS:
 *   <p>This is a paragraph of text.</p>
 *   <p>This is another paragraph. Leave a blank line between them.</p>
 * 
 * BOLD TEXT:
 *   <strong>This text will be bold</strong>
 * 
 * ITALIC TEXT:
 *   <em>This text will be italic</em>
 * 
 * LINKS:
 *   <a href="https://example.com">Click here</a>
 * 
 * HEADINGS (inside posts):
 *   <h2>Big Heading</h2>
 *   <h3>Smaller Heading</h3>
 * 
 * BULLET LISTS:
 *   <ul>
 *     <li>First item</li>
 *     <li>Second item</li>
 *   </ul>
 * 
 * NUMBERED LISTS:
 *   <ol>
 *     <li>First step</li>
 *     <li>Second step</li>
 *   </ol>
 * 
 * QUOTE/CALLOUT:
 *   <blockquote>This is a quote or important callout.</blockquote>
 * 
 * ═══════════════════════════════════════════════════════════════════
 * EXAMPLE POST:
 * ═══════════════════════════════════════════════════════════════════
 * 
 *   {
 *     id: "my-first-post",
 *     title: "My First Blog Post",
 *     date: "2025-01-19",
 *     author: "Di",
 *     excerpt: "Just getting started with blogging!",
 *     readTime: "3 min read",
 *     content: `
 *       <p>Welcome to my <strong>first ever</strong> blog post!</p>
 *       <p>Here's what I'll cover:</p>
 *       <ul>
 *         <li>Introduction</li>
 *         <li>Main points</li>
 *         <li>Conclusion</li>
 *       </ul>
 *       <p>For more info, <a href="https://example.com">click here</a>.</p>
 *     `
 *   },
 * 
 * ═══════════════════════════════════════════════════════════════════
 */
export const posts = [
  {
    id: "architecture-of-choice",
    title: "The Architecture of Choice",
    date: "2025-10-15",
    author: "Di",
    excerpt: "Ever noticed how the snacks at eye level are always the ones you grab? That's not an accident.",
    readTime: "5 min read",
    content: `
      <p>In the world of behavioural science, we love a good nerdy term—and "choice architecture" is one of my favourites. It's basically the art of designing how options are presented to people, and spoiler alert: it matters <em>a lot</em>.</p>
      <p>Think about it: put the healthy snacks at eye level and suddenly everyone's reaching for carrots instead of crisps. Magic? Nope. Just a clever nudge. The beauty is, you're not taking away anyone's choice—you're just making the better option a little easier to grab.</p>
      <p>In this post, we'll explore how digital interfaces are the new cafeterias—and how they're shaping our decisions every single day, often without us even realising it...</p>
    `
  },
  {
    id: "digital-minimalism",
    title: "Digital Minimalism in a Hyper-connected World",
    date: "2025-09-28",
    author: "Di",
    excerpt: "Six hours a day on screens? Yep, we've all been there. Here's how to take back your attention.",
    readTime: "7 min read",
    content: `
      <p>Let's be honest: we're all a little addicted to our screens. And while technology has given us a lot (cat memes, video calls with mum, instant access to any song ever made), it's also stolen something precious—our attention.</p>
      <p>Digital minimalism isn't about chucking your phone into the Thames. It's about being intentional. Which apps actually make your life better? Which ones are just... noise?</p>
      <p>By curating our digital environment—yes, like a museum of only the good stuff—we can reclaim our time and focus for the things that actually matter. Like, you know, talking to actual humans. Or just staring out the window. Remember that?</p>
    `
  },
  {
    id: "sunk-cost-fallacy",
    title: "The Sunk Cost Fallacy: Why Quitting is a Superpower",
    date: "2025-08-10",
    author: "Di",
    excerpt: "Ever stayed in a bad movie just because you paid for the ticket? You're not alone.",
    readTime: "4 min read",
    content: `
      <p>We've all done it. Sat through a truly terrible film just because we'd already bought the popcorn. Or finished a book that was putting us to sleep because we were "too far in to stop now." This, my friends, is the sunk cost fallacy in action.</p>
      <p>Our brains are wired to hate losing things—even time we've already spent. So we keep investing, hoping it'll somehow pay off. Spoiler: it usually doesn't.</p>
      <p>The good news? Once you spot this sneaky mental trap, you can start to escape it. Learning to let go of what's not working—whether it's a project, a habit, or yes, a bad Netflix series—is honestly a superpower.</p>
    `
  }
];
