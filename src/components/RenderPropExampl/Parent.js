import React from 'react';
import Child from './Child';

const Parent = () => {

    const userData = 'Test Testovich';

    return (
        <div>
         <Child>
            {({data})=>{
                return <p>{data.value} - {userData}</p>
            }}
        </Child>   
        </div>
    );
}

export default Parent;