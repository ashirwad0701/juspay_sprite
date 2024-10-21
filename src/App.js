// src/App.js
import React, { useState } from 'react';
import Sprite from './component/Sprite';
import Header from './Header'; // Import the Header component
import './styles.css';

const App = () => {
    const [sprites, setSprites] = useState([]);
    const [selectedSpriteIndex, setSelectedSpriteIndex] = useState(null);

    const addSprite = () => {
        const newSprite = {
            id: Date.now(),
            src: 'https://www.stemdetectivelab.com/wp-content/uploads/2019/07/scratch-mascot.png', // Placeholder image
            position: { x: 200, y: 200 },
            rotation: 0,
        };
        setSprites([...sprites, newSprite]);
    };

    const handleMove = (dx, dy) => {
        if (selectedSpriteIndex === null) return; // No sprite selected
        const updatedSprites = [...sprites];
        const sprite = updatedSprites[selectedSpriteIndex];
        sprite.position = {
            x: sprite.position.x + dx,
            y: sprite.position.y + dy,
        };
        setSprites(updatedSprites);
    };

    const handleRotate = (angle) => {
        if (selectedSpriteIndex === null) return; // No sprite selected
        const updatedSprites = [...sprites];
        const sprite = updatedSprites[selectedSpriteIndex];
        sprite.rotation = (sprite.rotation + angle) % 360;
        setSprites(updatedSprites);
    };

    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        padding: '10px',
        cursor: 'pointer',
        marginBottom: '10px',
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header />
            <div style={{ display: 'flex', flexGrow: 1 }}>
                <div style={{ padding: '20px', borderRight: '1px solid black' }}>
                    <button onClick={addSprite} style={buttonStyle}>Add Sprite</button>
                    <div>
                        <button onClick={() => handleMove(10, 0)} style={buttonStyle}>Move Right</button>
                    </div>
                    <div>
                        <button onClick={() => handleMove(-10, 0)} style={buttonStyle}>Move Left</button>
                    </div>
                    <div>
                        <button onClick={() => handleMove(0, 10)} style={buttonStyle}>Move Down</button>
                    </div>
                    <div>
                        <button onClick={() => handleMove(0, -10)} style={buttonStyle}>Move Up</button>
                    </div>
                    <div>
                        <label htmlFor="rotation">Rotate by degrees:</label>
                        <select id="rotation" onChange={(e) => handleRotate(Number(e.target.value))}>
                            <option value="0">Select angle</option>
                            <option value="15">15°</option>
                            <option value="30">30°</option>
                            <option value="45">45°</option>
                            <option value="60">60°</option>
                            <option value="90">90°</option>
                            <option value="180">180°</option>
                        </select>
                    </div>
                </div>
                <div style={{ position: 'relative', flexGrow: 1 }}>
                    {sprites.map((sprite, index) => (
                        <div key={sprite.id} style={{ display: 'inline-block', margin: '10px' }}>
                            <Sprite
                                src={sprite.src}
                                position={sprite.position}
                                rotation={sprite.rotation}
                            />
                            <button
                                onClick={() => setSelectedSpriteIndex(index)}
                                style={{
                                    backgroundColor: selectedSpriteIndex === index ? 'lightblue' : 'blue',
                                    color: 'white',
                                    border: 'none',
                                    padding: '5px',
                                    cursor: 'pointer',
                                    borderRadius:'10',
                                
                                }}
                            >
                                Select
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
