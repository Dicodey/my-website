const Contact = () => {
    return (
        <section id="contact" style={{ paddingBottom: '4rem' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                    textAlign: 'center',
                    maxWidth: '600px',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(10px)',
                    padding: '2.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                }}>
                    <h2>Let's Chat!</h2>
                    <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        Whether you've got a wild idea, a question about how brains work, or just want to say hi—I'd love to hear from you.
                        No boring contact forms here, just drop me a line!
                    </p>
                    <a href="mailto:hello@di.example.com" style={{
                        display: 'inline-block',
                        padding: '1rem 3rem',
                        backgroundColor: 'var(--text-primary)',
                        color: 'white',
                        borderRadius: '4px',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        transition: 'all 0.3s',
                        border: '2px solid var(--text-primary)'
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'var(--accent-primary)';
                            e.target.style.borderColor = 'var(--accent-primary)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'var(--text-primary)';
                            e.target.style.borderColor = 'var(--text-primary)';
                        }}>
                        hello@di.example.com
                    </a>

                    <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        <a href="#" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
                        <a href="#" style={{ color: 'var(--text-secondary)' }}>ResearchGate</a>
                        <a href="#" style={{ color: 'var(--text-secondary)' }}>Twitter / X</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
