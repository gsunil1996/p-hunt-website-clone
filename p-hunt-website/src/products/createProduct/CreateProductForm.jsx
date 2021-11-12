import React from "react";
import "./CreateProductForm.css";
import SearchIcon from "@mui/icons-material/Search";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import {useState} from "react";

export default function CreateProductForm() {
    const [name, setName] = useState("");
    const [monetize, setMonetize] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
   
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!name || !monetize || !category || !description){
            alert("please fill all the details")
        }
      }

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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <br />
                  <input
                    className="createProductform-inputFileld"
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <br />
                  <input
                    className="createProductform-inputFileld"
                    type="text"
                    placeholder="Link(optional)"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
                <div className="createProductform-fieldDiv-2">
                  <input
                    className="createProductform-inputFileld"
                    type="text"
                    placeholder="Monetization"
                    value={monetize}
                    onChange={(e) => setMonetize(e.target.value)}
                  />
                  <br />
                  <input
                    className="createProductform-inputFileld-desc"
                    type="text"
                    placeholder="description......"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <br/>
                  <div className="createProduct-uploadImgDiv">
                    <FileUploadIcon className="FileUploadIcon" />
                  </div>
                  <span className="uploadImg-span">Upload Img</span>
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

/* 
<div className="createProductform-fieldDiv-1">
                <input
                  className="createProductform-inputFileld"
                  type="text"
                  placeholder="Name of the product"
                />
                <br />
                <input
                  className="createProductform-inputFileld"
                  type="text"
                  placeholder="Category"
                />
                <br />
                <input
                  className="createProductform-inputFileld"
                  type="text"
                  placeholder="Link(optional)"
                />
              </div>
              <div className="createProductform-fieldDiv-2">
                <input
                  className="createProductform-inputFileld"
                  type="text"
                  placeholder="Monetization"
                />
                <br />
                <input
                  className="createProductform-inputFileld-desc"
                  type="text"
                  placeholder="description......"
                />
                <br />
                <div className="createProduct-uploadImgDiv">
                  <FileUploadIcon className="FileUploadIcon" />
                </div>
                <span className="uploadImg-span">Upload Img</span>
              </div>
*/
