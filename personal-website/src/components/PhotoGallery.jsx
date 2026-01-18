import { Link } from 'react-router-dom';
import { photos } from '../data/photos';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

const PhotoGallery = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    return (
        <div className="container" style={{ padding: '8rem 1rem', maxWidth: '1200px' }}>
            <Helmet>
                <title>Photography | Di</title>
                <meta name="description" content="A collection of my favorite captures." />
            </Helmet>

            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1rem' }}>Behind the Lens</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                    A quiet corner for my favorite moments captured in the wild.
                </p>
                <Link to="/" style={{ display: 'inline-block', marginTop: '2rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                    &larr; Back to Reality
                </Link>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
                padding: '1rem 0'
            }}>
                {photos.map(photo => (
                    <div
                        key={photo.id}
                        className="card"
                        style={{
                            padding: '0',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            aspectRatio: '4/5'
                        }}
                        onClick={() => setSelectedPhoto(photo)}
                    >
                        <img
                            src={photo.url}
                            alt={photo.caption}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.5s ease'
                            }}
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: '1.5rem',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                            color: 'white',
                            opacity: 0,
                            transition: 'opacity 0.3s ease'
                        }}
                            className="photo-caption"
                        >
                            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{photo.category}</span>
                            <h3 style={{ color: 'white', margin: '0.25rem 0 0', fontSize: '1.1rem' }}>{photo.caption}</h3>
                        </div>
                        <style>{`
                            .card:hover .photo-caption { opacity: 1 !important; }
                        `}</style>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedPhoto && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.9)',
                        zIndex: 2000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem',
                        cursor: 'zoom-out'
                    }}
                    onClick={() => setSelectedPhoto(null)}
                >
                    <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
                        <img
                            src={selectedPhoto.url}
                            alt={selectedPhoto.caption}
                            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '4px' }}
                        />
                        <div style={{ textAlign: 'center', color: 'white', marginTop: '1rem' }}>
                            <h3>{selectedPhoto.caption}</h3>
                            <p style={{ opacity: 0.8 }}>{selectedPhoto.category}</p>
                        </div>
                    </div>
                    <button
                        style={{
                            position: 'absolute',
                            top: '2rem',
                            right: '2rem',
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            fontSize: '2rem',
                            cursor: 'pointer'
                        }}
                        onClick={() => setSelectedPhoto(null)}
                    >
                        &times;
                    </button>
                </div>
            )}
        </div>
    );
};

export default PhotoGallery;
