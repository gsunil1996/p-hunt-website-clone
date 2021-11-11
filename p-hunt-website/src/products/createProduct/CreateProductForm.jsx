import React from 'react'
import "./CreateProductForm.css";
import SearchIcon from '@mui/icons-material/Search';

export default function CreateProductForm() {
    return (
        <>
        <div className="creatProductFromMainDiv">
            <div className="createProductTopDiv-orange">
                <div className="productTopLogoDiv">
                    <img src="https://downloads.intercomcdn.com/i/o/8730/79a974f9c42d362ec2818b1c/ph-help3.png"></img>
                    <p>Go to Product Hunt</p>
                </div>
                <div className="inputDiv">
                <div className="searchIconDiv"><SearchIcon className="searchIcon"/></div>
                <input type="text" placeholder="Search for articles..."></input>
                </div>
                
            </div>
            <div className="createProductformDiv"></div>
        </div>
        </>
    )
}
