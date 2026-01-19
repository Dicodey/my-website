/**
 * Navbar.jsx - Site Navigation Header
 * 
 * Fixed navigation bar that becomes opaque with blur effect
 * when user scrolls past 50px. Uses React Router Links for
 * smooth navigation between sections.
 */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyle = {
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease',
        zIndex: 1000,
        padding: '1rem 0'
    };

    const linkStyle = {
        marginLeft: '2rem',
        fontWeight: 500,
        color: 'var(--text-primary)',
        fontSize: '0.95rem',
        whiteSpace: 'nowrap'
    };

    return (
        <nav style={navStyle}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                    Di
                </Link>
                <div className="nav-links" style={{
                    display: 'flex',
                    gap: 'clamp(0.8rem, 3vw, 2rem)',
                    fontSize: 'clamp(0.85rem, 2vw, 1rem)'
                }}>
                    <Link to="/about" style={{ ...linkStyle, marginLeft: 0 }}>About</Link>
                    <Link to="/experience" style={{ ...linkStyle, marginLeft: 0 }}>Experience</Link>
                    <Link to="/thoughts" style={{ ...linkStyle, marginLeft: 0 }}>Blog</Link>
                    <Link to="/contact" style={{ ...linkStyle, marginLeft: 0 }}>Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
