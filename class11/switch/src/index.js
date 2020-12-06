import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import './index.css'

function Switcher() {

    const [open, toggle] = useState(false);

    return (
        <div
            onClick={() => toggle(!open)}
            className={open ? 'switcher switcher-open' : 'switcher switcher-close'}
        >
            <div className="circle-button">
                {/*circle button inner*/}
            </div>
        </div>
    )
}

ReactDOM.render(
    <Switcher/>,
    document.querySelector('#root')
)

