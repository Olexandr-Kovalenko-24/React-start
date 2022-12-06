import React, {useEffect, useState} from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        const handleClick = () => {
            setCount((count)=>count+1)
        }
        
        window.addEventListener('click', handleClick)
        return () => {
            window.removeEventListener('click', handleClick)
        }
    }, []);



    return (
        <div>
            <p>Counter: {count}</p>
        </div>
    );
}

export default Counter;
