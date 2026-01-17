const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "The Architecture of Choice",
            date: "October 15, 2025",
            excerpt: "How small changes in the way options are presented can drastically influence our decisions.",
            readTime: "5 min read"
        },
        {
            id: 2,
            title: "Digital Minimalism in a Hyper-connected World",
            date: "September 28, 2025",
            excerpt: "Exploring the psychological benefits of reducing screen time and curating your digital environment.",
            readTime: "7 min read"
        },
        {
            id: 3,
            title: "The Sunk Cost Fallacy: Letting Go",
            date: "August 10, 2025",
            excerpt: "Why we cling to failing projects and how to overcome the fear of quitting.",
            readTime: "4 min read"
        }
    ];

    return (
        <section id="blog" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <h2>Latest Thoughts</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                    {posts.map(post => (
                        <article key={post.id} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', marginBottom: '0.5rem', fontWeight: 600 }}>
                                {post.date} &bull; {post.readTime}
                            </div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{post.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '1.5rem' }}>
                                {post.excerpt}
                            </p>
                            <a href={`#blog/${post.id}`} style={{ fontWeight: 600, display: 'flex', itemsAlign: 'center', gap: '0.5rem' }}>
                                Read Article &rarr;
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
