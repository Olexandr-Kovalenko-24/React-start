import React, {useState} from 'react';

const MouseTracker = () => {
    const [coordinates, setCoordinates] = useState(
                                    {x: 0,
                                    y: 0} );

    const [count, setCount] = useState(0);

    const handleMouseMove = ({clientX, clientY}) => {
        setCoordinates({
            x: clientX,
            y: clientY
        })
    }

    const handleClick = () => {
        setCount(count+1)
    }
    
    return (
        <div onMouseMove={handleMouseMove}>
            <p>X: {coordinates.x}</p>
            <p>Y: {coordinates.y}</p>
            <p>Counter: {count}</p>
            <button onClick={handleClick}></button>
        </div>
    );
}

export default MouseTracker;
