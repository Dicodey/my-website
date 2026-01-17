import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(to bottom, var(--bg-color), #f0f4f8)',
            paddingTop: '80px'
        }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '4rem',
                flexWrap: 'wrap-reverse'
            }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                        Hello, I'm Di.
                    </h1>
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: 400,
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem',
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

                <div style={{
                    flex: '0 0 auto',
                    width: '350px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '8px solid white',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                    margin: '0 auto'
                }}>
                    <img
                        src={profileImg}
                        alt="Di"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
