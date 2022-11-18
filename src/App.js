import React from "react";

import ImageWrapper from "./components/ImageWrapper";


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ImageWrapper w="200px" h="350px" t="this is image!!!" d="flex">
                <img src='https://i.pinimg.com/originals/b9/59/f1/b959f1670d2631589643575de5a782b7.jpg' />
            </ImageWrapper>
        )
    }
}

export default App;