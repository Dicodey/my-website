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
        <div className="container" style={{ padding: '8rem 0', maxWidth: '800px' }}>
            <Helmet>
                <title>{post.title} | Diderik</title>
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
                <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>{post.title}</h1>
                <div
                    className="blog-content"
                    style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </div>
    );
};

export default BlogPost;
