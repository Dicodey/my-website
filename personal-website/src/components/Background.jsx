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
                {/* Main Mass (No Blur) */}
                <path
                    className="brain-mass"
                    d="M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20 Z"
                    fill={color}
                    opacity={opacity * 0.8}
                />

                {/* Brain Outline/Shape (Sharp) */}
                <path
                    className="brain-outline"
                    d="M100,40 C115,40 130,45 145,55 C160,65 165,85 165,100 C165,115 160,135 145,145 C130,155 115,160 100,160 C85,160 70,155 55,145 C40,135 35,115 35,100 C35,85 40,65 55,55 C70,45 85,40 100,40 Z"
                    fill={color}
                    opacity={opacity}
                />

                {/* Internal Convolutions (Brain Texture) */}
                <g stroke={color} strokeWidth="2.5" fill="none" opacity="0.9">
                    {/* Left side */}
                    <path d="M70,70 C60,80 60,90 70,100 T70,130" />
                    <path d="M50,90 C45,100 45,110 50,120" />
                    <path d="M85,85 C75,95 75,105 85,115" />

                    {/* Right side */}
                    <path d="M130,70 C140,80 140,90 130,100 T130,130" />
                    <path d="M150,90 C155,100 155,110 150,120" />
                    <path d="M115,85 C125,95 125,105 115,115" />

                    {/* Fissure */}
                    <path d="M100,45 L100,155" strokeOpacity="0.5" strokeWidth="1.5" />
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
