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
        fontSize: '0.95rem'
    };

    return (
        <nav style={navStyle}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                    Dx.
                </Link>
                <div className="nav-links">
                    <Link to="/about" style={linkStyle}>About</Link>
                    <Link to="/experience" style={linkStyle}>Experience</Link>
                    <Link to="/thoughts" style={linkStyle}>Blog</Link>
                    <Link to="/contact" style={linkStyle}>Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
