const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(to bottom, var(--bg-color), #f0f4f8)'
        }}>
            <div className="container">
                <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    Hello, I'm Diderik.
                </h1>
                <h2 style={{
                    fontSize: '2rem',
                    fontWeight: 400,
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem',
                    maxWidth: '800px'
                }}>
                    Behavioural Scientist specializing in human decision making and digital interventions.
                </h2>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#about" style={{
                        display: 'inline-block',
                        padding: '1rem 2rem',
                        backgroundColor: 'var(--accent-primary)',
                        color: 'white',
                        borderRadius: '4px',
                        fontWeight: 600
                    }}>
                        Learn More
                    </a>
                    <a href="#contact" style={{
                        display: 'inline-block',
                        padding: '1rem 2rem',
                        border: '2px solid var(--accent-primary)',
                        color: 'var(--accent-primary)',
                        borderRadius: '4px',
                        fontWeight: 600
                    }}>
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
