const Contact = () => {
    return (
        <section id="contact" style={{ backgroundColor: 'var(--bg-color)', paddingBottom: '4rem' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
                <h2>Get in Touch</h2>
                <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                    I'm always open to discussing new research, speaking opportunities, or just chatting about
                    behavioural science. Feel free to reach out.
                </p>
                <a href="mailto:hello@di.example.com" style={{
                    display: 'inline-block',
                    padding: '1rem 3rem',
                    backgroundColor: 'var(--text-primary)',
                    color: 'white',
                    borderRadius: '4px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    transition: 'background-color 0.3s'
                }}>
                    hello@di.example.com
                </a>

                <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>ResearchGate</a>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>Twitter / X</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
