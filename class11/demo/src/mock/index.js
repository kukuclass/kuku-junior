export default function fetch(params) {
    return new Promise((resolve, reject) => {

        let data = [
            {
                category: "Sporting Goods",
                price: "$49.99",
                stocked: true,
                name: "Football",
                image: "https://img.adidas.com.hk/resources/2019/10/29/1572322153603922_500X500.jpg"
            },
            {
                category: "Sporting Goods",
                price: "$9.99",
                stocked: true,
                name: "Baseball",
                image: "https://img.adidas.com.hk/resources/2019/10/29/1572322153603922_500X500.jpg"
            },
            {
                category: "Sporting Goods",
                price: "$29.99",
                stocked: false,
                name: "Basketball",
                image: "https://img.adidas.com.hk/resources/2019/10/29/1572322153603922_500X500.jpg"
            },
            {
                category: "Electronics",
                price: "$99.99",
                stocked: true,
                name: "iPod Touch",
                image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567022175704"
            },
            {
                category: "Electronics",
                price: "$399.99",
                stocked: false,
                name: "iPhone 5",
                image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567022175704"
            },
            {
                category: "Electronics",
                price: "$199.99",
                stocked: true,
                name: "Nexus 7",
                image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567022175704"
            }
        ];

        if (
            params
            &&
            params.stocked
        ) {
            data = data.filter(item => item.stocked === true);
        }

        if (
            params
            &&
            params.input
        ) {
            data = data.filter(item =>
                item.name.indexOf(params.input) !== -1
                ||
                item.price.indexOf(params.input) !== -1
            );
        }

        setTimeout(() => {
            resolve({
                data,
                code: 200,
                message: "success",
            })
        }, 2000)

    })
}
