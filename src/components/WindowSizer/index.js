import React, { useEffect, useState } from 'react';

const WindowSizer = () => {
    const [sizes, setSizes] = useState({
        x: window.innerWidth,
        y: window.innerHeight
    });

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [])

    const resizeHandler = () => {
        setSizes({
            y: window.innerHeight,
            x: window.innerWidth
        })
    }

    return (
        <div>
            <p>Current width: {sizes.x}px</p>
            <p>Current height: {sizes.y}px</p>
        </div>
    );
}

export default WindowSizer;


// class WindowSizer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             y: window.innerHeight,
//             x: window.innerWidth
//         }
//     }

//     resizeHandler = () => {
//         this.setState({
//             y: window.innerHeight,
//             x: window.innerWidth
//         })
//     }

//     componentDidMount () {
//         window.addEventListener('resize', this.resizeHandler)
//     }

//     componentWillUnmount () {
//         window.removeEventListener('resize', this.resizeHandler)
//     }

//     render() {
//         return this.props.children(this.state);
//     }
// }


