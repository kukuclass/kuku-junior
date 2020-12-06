import React from 'react';
import './index.css';

import Switch from "./switch";

function ToggleBar({handleToggle, loading}) {
    return (
        <div className="toggle-bar-container">
            <Switch disable={loading} onChange={(checked) => handleToggle(checked)}/>
            <span style={{paddingLeft: '16px', fontWeight: 'bold'}}>Only Show Product in Stock</span>
        </div>
    )
}

export default ToggleBar;
