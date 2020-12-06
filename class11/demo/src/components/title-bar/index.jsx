import React from 'react';
import './index.css';

function TitleBar({title}) {
    return (
        <div className="product-table-header">
            {
                title
            }
        </div>
    )
}

export default TitleBar;
