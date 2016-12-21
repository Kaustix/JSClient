import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component';

window.onload = () => {
    ReactDOM.render(
        <Component />,
        document.getElementById('app')
    );
};