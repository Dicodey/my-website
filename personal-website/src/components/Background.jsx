import React from 'react';
import './Background.style.css';


const Background = () => {
    const blobs = [
        { image: `${import.meta.env.BASE_URL}brain-yellow.png`, top: '20px', left: '-100px', size: '520px', delay: '0s' },
        { image: `${import.meta.env.BASE_URL}brain-green.png`, top: '1000px', right: '10%', size: '400px', delay: '-15s' },
        { image: `${import.meta.env.BASE_URL}brain-orange.png`, top: '2200px', right: '-15%', size: '440px', delay: '-5s' },
        { image: `${import.meta.env.BASE_URL}brain-red.png`, top: '3400px', left: '5%', size: '360px', delay: '-10s' },
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
