import React from 'react';
import ReactDOM from 'react-dom';
import App, {AppAnotherFirst, AppAnotherSecond} from "./App";

ReactDOM.render(
    <div
        style={{
            width: '100vw',
            height: '200px',
            background: 'black',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }}
    >
        <App/>
        <AppAnotherFirst/>
        <AppAnotherSecond/>
    </div>,
    document.getElementById('root')
);