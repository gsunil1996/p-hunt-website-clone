import React from "react";
import "./CreateProductForm.css";
import SearchIcon from "@mui/icons-material/Search";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const init = {
  name: "",
  monetize: "",
  category: "",
  description: "",
  link: "",
  product_file_link:""
};
export default function CreateProductForm() {
  const [formData, setData] = useState(init);
  const uploadRef = useRef(null);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log("ab",value)
    setData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };
//console.log(formData)
  const handleSubmit = (e) => {
    e.preventDefault();

     formData.product_file_link = uploadRef.current.files[0];
     const pro_img = URL.createObjectURL(formData.product_file_link)
     formData.product_file_link= pro_img;

    const {
     name,
     monetize,
     category,
     description,
     link,
     product_file_link,
      } = formData;

    fetch(
      "http://localhost:2345/product",{
        method: "POST",
        headers: {
        "Content-Type":"application/json",
        },
      body:JSON.stringify({
      name,
      monetize,
      category,
      description,
      link,
      product_file_link
     }),
    
      

  })
      .then(function (response) {
          console.log("res",response);
      })
      .catch(function (error) {
          console.log("error",error);
      });
    
    setData(init);
  };

  return (
    <>
      <div className="creatProductFromMainDiv">
        <div className="createProductTopDiv-orange">
          <div className="productTopLogoDiv">
            <img src="https://downloads.intercomcdn.com/i/o/8730/79a974f9c42d362ec2818b1c/ph-help3.png"></img>
            <p>Go to Product Hunt</p>
          </div>
          <div className="inputDiv">
            <div className="searchIconDiv">
              <SearchIcon className="searchIcon" />
            </div>
            <input type="text" placeholder="Search for articles..."></input>
          </div>
        </div>

        <div className="createProductformDiv">
          <form onSubmit={handleSubmit}>
            <div className="createProductform-fieldsDiv">
              <div className="createProduct-fieldsDivParent">
                <div className="createProductform-fieldDiv-1">
                  <input
                    className="createProductform-inputFileld"
                    type="text"
                    placeholder="Name of the product"
                    name="name"
                    onChange={handleChange}
                  />
                  <br />
                  <input
                    className="createProductform-inputFileld"
                    type="text"
                    placeholder="Category"
                    name="category"
                    onChange={handleChange}
                  />
                  <br />
                  <input
                    className="createProductform-inputFileld"
                    type="text"
                    placeholder="Link(optional)"
                    name="link"
                    onChange={handleChange}
                  />
                </div>
                <div className="createProductform-fieldDiv-2">
                  <input
                    className="createProductform-inputFileld"
                    type="text"
                    placeholder="Monetization"
                    name="monetize"
                    onChange={handleChange}
                  />
                  <br />
                  <input
                    className="createProductform-inputFileld-desc"
                    type="text"
                    placeholder="description......"
                    name="description"
                    onChange={handleChange}
                  />
                  <br />

                  <div className="createProduct-uploadImgDiv">
                    <FileUploadIcon className="FileUploadIcon" />
                    <input
                      className="uploadImg-input"
                      onChange={handleChange}
                      ref={uploadRef}
                      type="file"
                      name="product_file_link"
                    />
                  </div>
                  {/* <span className="uploadImg-span">Upload Img</span> */}
                </div>
              </div>
                <input
                  className="reateProduct-submitButton"
                  type="submit"
                  placeholder="Create Product"
                />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

