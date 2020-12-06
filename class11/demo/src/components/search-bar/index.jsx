import React from 'react';
import './index.css';

function SearchBar({handleChange, loading}) {
    return (

        <div className="search-bar-container">
            <label style={{
                background: loading ? 'transparent' : 'white'
            }} className="search-bar-label" htmlFor="search-bar">Filter</label>
            <input disabled={loading} onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    handleChange(e.target.value)
                }
            }} placeholder={'Search...'} id="search-bar" className="search-bar" type="text"/>
        </div>
    )
}

export default SearchBar;
