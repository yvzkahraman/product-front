import { useNavigate, useParams } from "react-router-dom";
// import { observer } from "mobx-react";
import productService from "./services/ProductService";
// import { productStore } from "./stores/ProductStore";
import { connect } from "react-redux";
import { Formik, Form, Field } from 'formik';
import ProductUpdateSchema from "./ProductUpdateSchema";

const ProductUpdate = ({ selectedProduct }) => {
    let params = useParams()
    let navigate = useNavigate();
    return (<>
        <div className="mx-auto w-75 mt-3">


            <Formik
                initialValues={{
                    ...selectedProduct
                }}
                validationSchema={ProductUpdateSchema}
                onSubmit={values => {

                    productService.update(values).then(response => {
                        navigate("/product-func-list")
                    })
                    console.log("submit edildi")
                    // same shape as initial values
                    // console.log(values.name);
                }}
            >
                {({ errors, touched }) => (
                    <Form>

                        <div className="mb-3">
                            <label for="name"> Ürün adı : </label>

                            {errors.name && touched.name ? (
                                <span className="text-danger ps-2">{errors.name}</span>
                            ) : null}


                            <Field name="name" className="form-control" />

                        </div>


                        <div className="mb-3">

                            <label for="price">Ürünün Fiyatı :</label>   {errors.price && touched.price ? (
                                <span className="text-danger ps-2">{errors.price}</span>
                            ) : null}
                            <Field name="price" className="form-control" />

                        </div>

                        <div className="mb-3">
                            <label for="stock">Ürünün Stoğu :</label>   {errors.stock && touched.stock ? <span className="text-danger ps-2">{errors.stock}</span> : null}
                            <Field name="stock" className="form-control" />

                        </div>

                        <div className="mb-3">
                            <button type="submit" className="btn  btn-primary">Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>








        </div>


    </>);
};

const mapStateToProps = (state) => {
    return {
        selectedProduct: state.productState.selectedProduct
    }
}

export default connect(mapStateToProps, {})(ProductUpdate);