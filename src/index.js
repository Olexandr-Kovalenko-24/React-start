import React from 'react';
import ReactDOM from 'react-dom/client';

const component = React.createElement(Section);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
component
);

function Section (props){
    const username = 'Alex';
    const today = new Date();

    return (
        <section>
            <div>
                <h1>Hello, {username}</h1>
            </div>
            <article>
                <p>{today.toDateString()}</p>
                <button>Text</button>
            </article>
        </section>
    )
}