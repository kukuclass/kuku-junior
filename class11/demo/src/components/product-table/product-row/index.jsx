import React from 'react';
import './index.css';

export default function ProductRow({image, name, price}) {
    return (
        <div className="product-row-container">
            <img className="product-image" src={image} alt="load failed"/>
            <div className="product-detail-container">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}
