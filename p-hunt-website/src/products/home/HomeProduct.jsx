import React from 'react';
import "./HomeProduct.css";
import Feed from "../feed/Feed";
import Rightbar from '../rightbar/Rightbar';
export default function HomeProduct() {
    return (
        <>
        <div className="productPageMainContainer">
            <Feed/>
            <Rightbar/>
        </div>
        </>
    )
}
