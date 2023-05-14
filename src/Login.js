import { useNavigate, useParams } from "react-router-dom";
import authService from "./services/AuthService";
import { Formik, Form, Field } from 'formik';
import UserLoginSchema from "./UserLoginSchema";
import { useState } from "react";

const Login = () => {

    let loginCommand = {
        username: '',
        password: ''
    }

    const [errorMessage, setErrorMessage] = useState("");

    let navigate = useNavigate();


    return (<>
        <div className="mx-auto w-75 mt-3">


            <Formik
                initialValues={{
                    ...loginCommand
                }}
                validationSchema={UserLoginSchema}
                onSubmit={values => {
                    authService.login(values).then(response => {
                        console.log("gelen response :", response);
                    }).catch(err => {
                        console.log("gelen error :", err)
                        console.log("gelen hata : ", err.response.data);
                        setErrorMessage(err.response.data);
                    })

                }}
            >
                {({ errors, touched }) => (
                    <Form>

                        <div className="mb-3">
                            <label for="username"> Kullanıcı Adı : </label>

                            {errors.username && touched.username ? (
                                <span className="text-danger ps-2">{errors.username}</span>
                            ) : null}


                            <Field name="username" className="form-control" />

                        </div>


                        <div className="mb-3">

                            <label for="password">Şifre :</label>   {errors.password && touched.password ? (
                                <span className="text-danger ps-2">{errors.password}</span>
                            ) : null}
                            <Field name="password" className="form-control" />

                        </div>


                        <div className="mb-3">
                            <button type="submit" className="btn  btn-primary">Giriş Yap</button>
                        </div>

                        {errorMessage != "" && <div className="mb-3 text-center text-danger">
                            {errorMessage}
                        </div>}

                    </Form>
                )}
            </Formik>

        </div>


    </>);
};

export default Login;