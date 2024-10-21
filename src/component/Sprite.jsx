// src/Sprite.js
import React from 'react';

const Sprite = ({ src, position, rotation, onMove, onRotate }) => {
    return (
        <div
            style={{
                position: 'absolute',
                left: position.x,
                top: position.y,
                transform: `rotate(${rotation}deg)`,
                transition: 'transform 0.3s',
            }}
        >
            <img src={src} alt="Sprite" style={{ width: '100px', height: '100px' }} />
        </div>
    );
};

export default Sprite;
