import './style.css';


function Lamp(props) {

    const toggle = () => {
        props.callbackParent()
    }

    const classNames = props.toggleState ? "lamp-on" : "lamp-off";

    return (
        <>
            <div className={classNames}></div>
            <button onClick={toggle}>Toggle</button>
        </>
    );
}

export default Lamp;
