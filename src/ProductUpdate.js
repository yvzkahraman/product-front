import { useNavigate, useParams } from "react-router-dom";
import { observer } from "mobx-react";
import productService from "./services/ProductService";
import { productStore } from "./stores/ProductStore";

const ProductUpdate = observer(() => {
    let params = useParams()
    let navigate = useNavigate();
    return (<>
        <div className="mx-auto w-75">

            {/* <div>
                Product id :{params.productId}

                Selected Product Id = {productStore.selectedProduct.id}
                Selecte Product Name = {productStore.selectedProduct.name}
            </div> */}
            <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label"> Name :</label>
                <input type="text" onChange={(e) => {
                    productStore.setSelectedProduct({
                        ...productStore.selectedProduct,
                        name: e.target.value
                    })
                }} value={productStore.selectedProduct.name} className="form-control" id="exampleFormControlInput1" />
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label"> Price :</label>
                <input type="text" onChange={(e) => {
                    productStore.setSelectedProduct({
                        ...productStore.selectedProduct,
                        price: e.target.value
                    })
                }} value={productStore.selectedProduct.price} className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
                <button onClick={() => {
                    productService.update(productStore.selectedProduct).then(response => {
                        var product = productStore.products.filter(x => x.id == productStore.selectedProduct.id);
                        
                        product = productStore.selectedProduct;

                        navigate("/product-func-list");
                    })
                }} className="btn btn-block btn-primary">Update</button>
            </div>

            <div className="text-center text-danger">
                name ={productStore.selectedProduct.name} <br></br>
                price = {productStore.selectedProduct.price}<br></br>
                id = {productStore.selectedProduct.id}
            </div>

        </div>


    </>);
});

export default ProductUpdate;