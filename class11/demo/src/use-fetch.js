import {useState, useEffect} from 'react';
import fetch from "./mock";

function useFetch() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(undefined);

    const refresh = (params) => {
        setLoading(true);
        fetch(params)
            .then(
                (result) => {
                    let {data} = result;
                    let categories = [];

                    data.forEach(item => {
                        let index = categories.findIndex(category => category.name === item.category)
                        if (index === -1) {
                            categories.push({name: item.category, children: [item]})
                        } else {
                            categories[index].children.push(item);
                        }
                    })

                    setData(categories);
                }
            )
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
            // 执行请求
            // debugger;
            refresh();
        },
        // 每次进入应用只调用该方法一次
        [])

    return {
        loading,
        error,
        data,
        refresh
    }
}

export default useFetch;
