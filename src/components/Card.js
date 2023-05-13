
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import productService from "../services/ProductService";
import { observer } from "mobx-react";
import { productStore } from "../stores/ProductStore";

const Card = observer(({ product, setProduct }) => {

    let navigate = useNavigate();



    return (
        <div className="card my-2" >
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Stock = {product.stock}</h6>
                <p className="card-text">
                    Price =  {product.price}
                </p>

                <Link to={`/product-update/${product.id}`} onClick={
                    () => {
                        productStore.setSelectedProduct(product);
                    }
                } className="card-link">Update</Link>
                <button onClick={() => {
                    productService.remove(product.id).then(response => {
                        setProduct(product.id);
                        navigate("/product-list");
                    });
                }} className="card-link">Remove</button>
            </div>
        </div>



    )
});


export default Card;