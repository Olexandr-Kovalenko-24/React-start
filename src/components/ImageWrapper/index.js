import React from 'react';

const ImageWrapper = (props) => {
    const {children, width, height, title, ...rest} = props;

    const inlineStyles = {
        width, 
        height,
        overflow: 'hidden',
        objectFit: 'cover'
    }

    return (
        <div style={inlineStyles} {...rest}>
            {children}
        </div>
    );
}

export default ImageWrapper;
