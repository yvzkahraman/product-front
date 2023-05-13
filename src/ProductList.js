import React from "react";
import axios from "axios";
import Card from "./components/Card";
import productService from "./services/ProductService";

class ProductList extends React.Component {
    // lifecycle 
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
        this.setProduct = this.setProduct.bind(this);
        console.log("constructor çalıştı")
    }

    setProduct(id) {
        let products = this.state.products.filter(x => x.id != id);
        this.setState({
            products: products
        })
    }


    componentDidMount() {
        productService.getAll()
            .then(response => {
                console.log("gelen response", response)
                console.log("gelen data", response.data)

                this.setState({
                    products: response.data
                });
                // this.products.push(response.data);
                console.log("products", this.state.products);

            }).catch(err => {

            });


        console.log("component didmount çalıştı")
    }

    render() {
        console.log("render çalıştı")

        return (<>
            <div className="container">

                {this.state.products.map(product => {
                    return (
                        <Card product={product} setProduct={this.setProduct}></Card>
                    )
                })}
            </div>

        </>)
    }
}

export default ProductList;