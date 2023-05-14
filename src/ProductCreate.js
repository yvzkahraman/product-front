import { useNavigate, useParams } from "react-router-dom";
import { observer } from "mobx-react";
import productService from "./services/ProductService";
import { productStore } from "./stores/ProductStore";
import { Formik, Form, Field } from 'formik';
import ProductUpdateSchema from "./ProductUpdateSchema";

const ProductCreate = observer(() => {
    let params = useParams()
    let navigate = useNavigate();
    let product = {
        name: '',
        price: 0,
        stock: 0
    }

    return (<>
        <div className="mx-auto w-75 mt-3">


            <Formik
                initialValues={{
                    ...product
                }}
                validationSchema={ProductUpdateSchema}
                onSubmit={values => {

                    productService.create(values).then(response => {
                        navigate("/product-func-list")
                    })
                    console.log("submit edildi")

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
});

export default ProductCreate;