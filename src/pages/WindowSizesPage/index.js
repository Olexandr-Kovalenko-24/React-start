import React from 'react';
import WindowSizer from '../../components/WindowResizer';

const WindowSizerPage = () => {
    return (
        <div>
            <WindowSizer>
                {({x,y})=>( <section>
                            <p>Current width: {x}px</p>
                            <p>Current height: {y}px</p>
                        </section>
                        )}
            </WindowSizer>
        </div>
    );
}

export default WindowSizerPage;