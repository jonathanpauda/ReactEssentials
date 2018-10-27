'use strict';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;
//take in 2 arguments, name of element we want to render, 2nd is where we want it to be rendered in the DOM

render(React.createElement(
    'h1',
    { id: 'title',
        className: 'header',
        style: { backgroundColor: 'orange', color: 'white', fontFamily: 'verdana' } },
    'Hello world'
), document.getElementById('react-container'));
