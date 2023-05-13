import { useEffect, useState } from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { productStore } from "./stores/ProductStore";

import Card from "./components/Card";

//stateles
const ProductListFunc = observer(() => {
    //hook
    // const arr = useState("ONF");

    // state => change action metod 
    // 


    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     console.log("name li use effect çalıştı")
    // }, [name])


    useEffect(() => {
        axios.get("http://localhost:5017/api/Products")
            .then(response => {
                productStore.setProducts(response.data);
                setProducts(response.data);
                console.log("products", products);

            }).catch(err => {

            });
    }, [])

    return (
        <>
            <div className="container">

                {products && products.map(product => {
                    return (
                        <Card key={product.id} product={product}></Card>
                    )
                })}
            </div>

        </>
    )
})
export default ProductListFunc;