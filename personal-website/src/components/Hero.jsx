/**
 * Hero.jsx - Landing Section Component
 * 
 * The first section visitors see, featuring:
 * - Name and tagline introduction
 * - Profile photo with styled border
 * - Call-to-action buttons (Learn More, Get in Touch)
 * 
 * Uses responsive typography with clamp() for fluid scaling
 * and wrap-reverse flexbox for mobile-friendly layout.
 */
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px'
        }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '4rem',
                flexWrap: 'wrap-reverse'
            }}>
                <div style={{ flex: '1', minWidth: '280px' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                        Hello, I'm Di.
                    </h1>
                    <h2 style={{
                        fontSize: 'clamp(1.1rem, 4vw, 2rem)',
                        fontWeight: 400,
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem',
                    }}>
                        I'm a Behavioural Scientist who geeks out over why we do the things we do—and how a little nudge can make a big difference.
                    </h2>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#about" style={{
                            display: 'inline-block',
                            padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
                            backgroundColor: 'var(--accent-primary)',
                            color: 'white',
                            borderRadius: '4px',
                            fontWeight: 600,
                            fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                        }}>
                            Learn More
                        </a>
                        <a href="#contact" style={{
                            display: 'inline-block',
                            padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
                            border: '2px solid var(--accent-primary)',
                            color: 'var(--accent-primary)',
                            borderRadius: '4px',
                            fontWeight: 600,
                            fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                        }}>
                            Get in Touch
                        </a>
                    </div>
                </div>

                <div style={{
                    flex: '0 0 auto',
                    width: 'min(350px, 85vw)',
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
