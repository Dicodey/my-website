import React from 'react';
import './Background.style.css';


const Background = () => {
    const blobs = [
        { image: '/brain-yellow.png', top: '200px', left: '-5%', size: '650px', delay: '0s' },
        { image: '/brain-green.png', top: '1000px', right: '10%', size: '500px', delay: '-15s' },
        { image: '/brain-orange.png', top: '2200px', right: '-15%', size: '550px', delay: '-5s' },
        { image: '/brain-red.png', top: '3400px', left: '5%', size: '450px', delay: '-10s' },
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
