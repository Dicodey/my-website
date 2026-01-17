import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

const Blog = () => {
    return (
        <section id="thoughts" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <h2>Latest Thoughts</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                    {posts.map(post => (
                        <article key={post.id} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', marginBottom: '0.5rem', fontWeight: 600 }}>
                                {new Date(post.date).toLocaleDateString()} &bull; {post.readTime}
                            </div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{post.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '1.5rem' }}>
                                {post.excerpt}
                            </p>
                            <Link to={`/blog/${post.id}`} style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Read Article &rarr;
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
