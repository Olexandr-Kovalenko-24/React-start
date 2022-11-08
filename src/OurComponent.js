import React from "react"
function OurComponents(props){
    return (
    <article>
    <h1>React day is {props.today}</h1>
    <p>Text</p>
    <img src=""></img>
    </article>
    )
}

class OurComponent extends React.Component {
    render () {
        return (
            <article>
            <h1>React day is</h1>
            <p>Text</p>
            <img src=""></img>
            </article>
        )
    }
}

export default OurComponent