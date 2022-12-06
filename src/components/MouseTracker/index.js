import React, {useEffect, useState} from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(2);

    useEffect(()=>{
        const handleClick = () => {
            setCount((count)=>count+step)
        }

        window.addEventListener('click', handleClick)
        return () => {
            window.removeEventListener('click', handleClick)
        }
    }, [step]);

    const handleChange = ({target:{value}}) => {
        setStep(value);
    }

    return (
        <div>
            <p>Counter: {count}</p>
            <input type='text' name='step' value={step} onChange={handleChange}/>
        </div>
    );
}

export default Counter;
