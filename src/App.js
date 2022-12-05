import React, {useState} from "react";


function App(props){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    return (
        <>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
        </>
    )
}

// class App extends React.Component {


//     render() {
//         return (
//             <FormSquadPage />
//         )
//     }
// }

export default App;
