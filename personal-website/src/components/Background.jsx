/**
 * Background.jsx - Animated Brain Blob Background
 * 
 * Renders decorative brain images that float behind the page content.
 * Each brain has a unique color (yellow, green, orange, red) and is 
 * positioned at different scroll depths to create visual interest.
 * 
 * Features:
 * - Absolute positioning with z-index: -1 to sit behind content
 * - Gentle floating animation (40s cycle)
 * - Responsive sizing via inline styles
 * - Uses BASE_URL for correct asset paths in production
 */
import React from 'react';
import './Background.style.css';


const Background = () => {
    const blobs = [
        { image: `${import.meta.env.BASE_URL}brain-yellow.png`, top: '20px', left: '-100px', size: '520px', delay: '0s' },
        { image: `${import.meta.env.BASE_URL}brain-green.png`, top: '1000px', right: '10%', size: '400px', delay: '-15s' },
        { image: `${import.meta.env.BASE_URL}brain-orange.png`, top: '2200px', right: '-15%', size: '440px', delay: '-5s' },
        { image: `${import.meta.env.BASE_URL}brain-red.png`, top: '2800px', left: '-80px', size: '360px', delay: '-10s' },
    ];

    return (
        <div className="background-wrapper">
            <div className="blobs-container">
                {blobs.map((blob, index) => (
                    <div
                        key={index}
                        className="brain-blob-container"
                        style={{
                            position: 'absolute',
                            top: blob.top,
                            left: blob.left,
                            right: blob.right,
                            width: blob.size,
                            height: blob.size,
                            animationDelay: blob.delay,
                            opacity: 0.8
                        }}
                    >
                        <div
                            className="brain-blob-image"
                            style={{ backgroundImage: `url(${blob.image})` }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Background;
