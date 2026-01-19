/**
 * BlogPost.jsx - Individual Blog Post View
 * 
 * Renders a full blog post based on the :id URL parameter.
 * Includes SEO meta tags via react-helmet-async and renders
 * HTML content from the posts data store.
 * 
 * Falls back to "Post not found" if ID doesn't match any post.
 */
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { Helmet } from 'react-helmet-async';

const BlogPost = () => {
    const { id } = useParams();
    const post = posts.find((p) => p.id === id);

    if (!post) {
        return (
            <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
                <h2>Post not found</h2>
                <Link href="/">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: 'clamp(4rem, 10vw, 8rem) clamp(1rem, 3vw, 2rem)', maxWidth: '800px' }}>
            <Helmet>
                <title>{post.title} | Di</title>
                <meta name="description" content={post.excerpt} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta name="author" content={post.author} />
            </Helmet>

            <Link to="/" style={{ display: 'inline-block', marginBottom: '2rem', fontWeight: 600 }}>
                &larr; Back to Home
            </Link>

            <article>
                <div style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '1rem' }}>
                    {new Date(post.date).toLocaleDateString()} &bull; {post.readTime}
                </div>
                <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', marginBottom: '2rem' }}>{post.title}</h1>
                <div
                    className="blog-content"
                    style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '1.8', color: 'var(--text-secondary)' }}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </div>
    );
};

export default BlogPost;
