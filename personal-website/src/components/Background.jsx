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
                    d="M30,-50 C10,-60 -10,-60 -30,-50 C-45,-40 -50,-20 -50,0 C-50,20 -40,40 -20,50 C0,60 20,60 40,50 C50,40 55,20 55,0 C55,-20 50,-40 30,-50 Z M-5,-35 Q0,-45 5,-35 M-15,-20 Q-25,-10 -15,0 M15,-20 Q25,-10 15,0"
                    fill={color}
                    opacity={opacity}
                    transform="translate(100 100) scale(2.0)"
                />
                <g stroke={color} strokeWidth="2.5" fill="none" opacity="0.7" transform="translate(100 100) scale(2.0)">
                    {/* Central sulcus */}
                    <path d="M0,-45 C2,-20 -2,20 0,45" opacity="0.4" />

                    {/* Left hemisphere convolutions */}
                    <path d="M-15,-30 Q-25,-25 -20,-15 T-25,0 T-15,15" />
                    <path d="M-35,-10 Q-40,0 -35,10" />
                    <path d="M-10,25 Q-20,35 -5,40" />

                    {/* Right hemisphere convolutions */}
                    <path d="M15,-30 Q25,-25 20,-15 T25,0 T15,15" />
                    <path d="M35,-10 Q40,0 35,10" />
                    <path d="M10,25 Q20,35 5,40" />
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
