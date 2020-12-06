import React, {useState} from 'react';
import './index.css';

import TitleBar from "../title-bar";
import SearchBar from "../search-bar";
import ToggleBar from "../toggle-bar";
import CategoryRow from "./category-row";
import ProductRow from "./product-row";
import Loading from "../loading";


function ProductTable({
                          title, datasource, loading, error,
                          handleSearch, handleStockToggle,
                      }) {

    return (
        <div className="product-table">
            <TitleBar title={title}/>
            <SearchBar
            loading={loading}
                handleChange={(value) => {
                handleSearch({input: value})
            }}/>
            <ToggleBar
                loading={loading}
                handleToggle={(checked) => {
                    handleStockToggle({checked})
                }}
            />
            {
                !loading && !error ? datasource.map(
                    ({name, children}) => (
                        [
                            <CategoryRow categoryName={name}/>,
                            ...children
                                .map(({price, name, image}) => <ProductRow image={image} price={price} name={name}/>)
                        ]
                    )
                    )
                    : (
                        loading ? (
                                <div className="app-container">
                                    <Loading/>
                                </div>
                            ) :
                            (
                                <div className="app-container">
                                    Ops... Error
                                </div>
                            )
                    )
            }
        </div>
    )
}

export default ProductTable;
