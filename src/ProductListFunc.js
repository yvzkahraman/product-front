import { useEffect, useState } from "react";
import axios from "axios";
// import { observer } from "mobx-react";
// import { productStore } from "./stores/ProductStore";

import Card from "./components/Card";
import { connect } from "react-redux";
import { setProducts } from "./slicers/ProductSlicer";
import { Link } from "react-router-dom";

//stateles
const ProductListFunc = (props) => {

    console.log("props", props);
    //hook
    // const arr = useState("ONF");

    // state => change action metod 
    // 


    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     console.log("name li use effect çalıştı")
    // }, [name])


    useEffect(() => {
        axios.get("http://localhost:5017/api/Products")
            .then(response => {
                props.setProducts(response.data);
                // productStore.setProducts(response.data);

                //thunkAsync metodları araştırın.
                // props.setProducts(response.data);


                // setProducts(response.data);
                // console.log("products", products);

            }).catch(err => {

            });
    }, [])

    return (
        <>
            <div className="container">
                <div className="text-end mt-2">
                    <Link to="/product-create" className="btn btn-primary">Create New Product</Link>
                </div>
                {/* {productStore.products && productStore.products.map(product => {
                    return (
                        <Card key={product.id} product={product}></Card>
                    )
                })} */}

                {props.products && props.products.map(product => {
                    return (
                        <Card key={product.id} product={product}></Card>
                    )
                })}
            </div>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.productState.products
    }
}

export default connect(mapStateToProps, { setProducts })(ProductListFunc);