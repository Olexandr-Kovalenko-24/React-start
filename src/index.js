import React from 'react';
import ReactDOM from 'react-dom/client';
import OurComponents from './OurComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

// React.createElement(OurComponents, {today: 'tuesday'})
<div>
<OurComponents today="monday"/>
<OurComponents today="tuesday"/>
<OurComponents today="wednesday"/>
</div>
);

