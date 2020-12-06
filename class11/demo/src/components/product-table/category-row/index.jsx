import React from 'react';

export default function CategoryRow({ categoryName }) {
    return (
        <div
        style={{
            width: '90%',
            height: '30px',
            fontSize: '30px',
            fontWeight: 'light',
            lineHeight: '30px',
            paddingTop: '38px',
        }}
            className="category-row-container">
            {
                categoryName
            }
        </div>
    )
}
