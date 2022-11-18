import React from "react";

const FlexContainer = (props) => {
    const {children, fd, jc, ai} = props;

    const styles = {
        display: 'flex',
        flexDirection: fd,
        justifyContent: jc,
        alignItems: ai
    }

    return (
        <div style={styles}>
            {children}
        </div>
    );
}

export default FlexContainer;
