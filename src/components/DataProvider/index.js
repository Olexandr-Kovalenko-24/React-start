import React, { useState, useEffect } from "react";

const DataProvider = (props) => {
    const [data, setData] = useState([]);
    const [isFetching, setisFetching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        props.loadData()
        .then((data) => {
            setData(data)
        })
        .catch((error)=>{
            setError(error)
        })
        .finally(()=>{
            setisFetching(false)
        })
    })

    return props.children(data);
}


export default DataProvider;

// class DataProvider extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//             isFetching: true,
//             error: null
//         }
//     }

//     componentDidMount() {
//         this.props.loadData()
//         .then((data) => {
//             this.setState({
//                 data
//             })
//         })
//         .catch((error)=>{
//             this.setState({
//                 error
//             })
//         })
//         .finally(()=>{
//             this.setState({
//                 isFetching: false
//             })
//         })
//     }
    
//     render() {
//         return this.props.children(this.state);
//     }
// }