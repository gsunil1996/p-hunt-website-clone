import React from 'react';
import "./HomeProduct.css";
import Feed from "../feed/Feed";
import Rightbar from '../rightbar/Rightbar';
import CreateProduct from '../createProduct/CreateProduct';
import CreateProductForm from "../createProduct/CreateProductForm";

export default function HomeProduct() {
    return (
        <>
        <div className="productPageMainContainer">
            <Feed/>
            <hr className="hr"/>
            <Rightbar/>
        </div>
        {/* <CreateProduct/>
        <CreateProductForm/> */}
        </>
    )
}
