import React from 'react';
import { render } from 'react-dom';
import App from './App';

const appStyle = {
    width: '100%',
    margin: 'none',
    padding: 'none'
}


render(<App style = {appStyle} />, document.getElementById('root'));
