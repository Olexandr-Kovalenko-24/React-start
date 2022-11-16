import React from 'react';

function ListElement(props) {
    return (
        <li>{props.text} <button>X</button></li>
    );
}

export default ListElement;
