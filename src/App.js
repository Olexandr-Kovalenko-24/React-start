import React from "react";

import ImageWrapper from "./components/ImageWrapper";


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <ImageWrapper 
            width="200px" 
            height="350px" 
            title="this is image!!!">
                <img src='https://i.pinimg.com/originals/b9/59/f1/b959f1670d2631589643575de5a782b7.jpg' width='100%'/>
            </ImageWrapper>
            <ImageWrapper 
            width="200px" 
            height="350px" 
            onClick={()=>{console.log('hello')}}>
                <img src='https://i.pinimg.com/originals/b9/59/f1/b959f1670d2631589643575de5a782b7.jpg' width='100%'/>
            </ImageWrapper>
            </>
        )
    }
}

export default App;