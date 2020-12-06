import React from 'react';
import ProductTable from "./components/product-table";
import useFetch from "./use-fetch";
import './index.css'

// 不应视作页面是否重绘的依据
let toggle = undefined;
let input = undefined;

export default function App() {

    const {data, loading, error, refresh} = useFetch();

    return (
        <ProductTable
            loading={loading}
            error={error}
            datasource={data}
            title={"STOCK LIST"}
            handleStockToggle={({checked}) => {
                toggle = checked;
                refresh({input, stocked: toggle});
            }}
            handleSearch={({input: value}) => {
                input = value;
                refresh({input, toggle});
            }}
        />
    )
}
