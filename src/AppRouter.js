import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetail from "./ProductDetail";
import App from "./App";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import ProductListFunc from "./ProductListFunc";
import ProductUpdate from "./ProductUpdate";
import ProductCreate from "./ProductCreate";
import Login from "./Login";
import RequireAuth from "./RequireAuth";

/* import { BrowserRouter, Route, Routes } from "react-router-dom"; */

class AppRouter extends React.Component {
    /* HOC HOF */
    //STATE MANAGEMENT => MobX Redux 
    render() {
        return (
            <>
                <BrowserRouter>
                    <Navbar></Navbar>
                    <Routes>
                        <Route path='/' element={<App></App>}></Route>
                        <Route path="/productDetail" element={<ProductDetail></ProductDetail>}></Route>
                        <Route path='/product-list' element={<ProductList></ProductList>}> </Route>
                        <Route path="/product-func-list" element={<ProductListFunc></ProductListFunc>}></Route>
                        <Route path="/product-update/:productId" element={<ProductUpdate></ProductUpdate>}></Route>
                        <Route path="/product-create" element={
                            <RequireAuth>
                                <ProductCreate></ProductCreate>
                            </RequireAuth>
                        }></Route>
                        <Route path="/login" element={<Login></Login>}></Route>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}

export default AppRouter;

// HOF 