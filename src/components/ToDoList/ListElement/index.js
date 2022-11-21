import React from 'react';
import PropTypes from 'prop-types'

function ListElement(props) {

    const deleteTask = () => {
        const {id, deleteCallback} = props;
        deleteCallback(id);
    }

    return (
        <li>{props.text} <button onClick={deleteTask}>X</button></li>
    );
}

ListElement.defaultProps = {
    text: 'Default text',
    deleteCallback: ()=>{},
    id: 0
}

ListElement.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string,
    deleteCallback: PropTypes.func.isRequired
}

export default ListElement;
