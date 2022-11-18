import React from 'react';

const ImageWrapper = (props) => {
    const {children, w, h, t, d} = props;

    const styles = {
        width: w,
        height: h,
        title: t,
        display: d
    }

    return (
        <div style={styles}>
            {children}
        </div>
    );
}

export default ImageWrapper;
