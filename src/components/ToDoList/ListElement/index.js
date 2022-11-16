import React from 'react';

function ListElement(props) {

    const deleteTask = () => {
        const {id, deleteCallback} = props;
        deleteCallback(id);
    }

    return (
        <li>{props.text} <button onClick={deleteTask}>X</button></li>
    );
}

export default ListElement;
