import React from 'react';
import './Background.style.css';

const BrainBlob = ({ className, color, opacity = 0.65, delay = '0s' }) => {
    return (
        <div className={`brain-blob-container ${className}`} style={{ animationDelay: delay }}>
            <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="brain-blob-svg"
            >
                <path
                    d="M30,-50 C10,-65 -10,-65 -30,-50 C-55,-30 -60,0 -50,30 C-35,60 0,65 35,60 C60,50 65,20 60,-10 C55,-35 45,-45 30,-50 Z"
                    fill={color}
                    opacity={opacity}
                    transform="translate(100 100) scale(2.2)"
                />
                {/* Brain gyri/sulci */}
                <g stroke={color} strokeWidth="1.5" fill="none" opacity="0.5" transform="translate(100 100) scale(2.2)">
                    {/* Left Hemisphere hint */}
                    <path d="M-15,-40 Q-25,-20 -15,0 T-20,40" />
                    <path d="M-30,-20 Q-40,0 -25,20" />
                    
                    {/* Right Hemisphere hint */}
                    <path d="M15,-40 Q25,-20 15,0 T20,40" />
                    <path d="M30,-20 Q40,0 25,20" />

                    {/* Center division */}
                    <path d="M0,-45 L0,45" strokeOpacity="0.3" strokeWidth="1" />
                </g>
            </svg>
        </div>
    );
};

const Background = () => {
    const blobs = [
        { className: 'blob-1', color: '#fde047', delay: '0s' },
        { className: 'blob-2', color: '#f97316', delay: '-5s' },
        { className: 'blob-3', color: '#dc2626', delay: '-10s' },
        { className: 'blob-4', color: '#16a34a', delay: '-15s' },
        { className: 'blob-5', color: '#fde047', delay: '-2s' },
        { className: 'blob-6', color: '#f97316', delay: '-7s' },
        { className: 'blob-7', color: '#dc2626', delay: '-12s' },
    ];

    return (
        <div className="background-wrapper">
            <div className="blobs-container">
                {blobs.map((blob, index) => (
                    <BrainBlob key={index} {...blob} />
                ))}
            </div>
        </div>
    );
};

export default Background;
