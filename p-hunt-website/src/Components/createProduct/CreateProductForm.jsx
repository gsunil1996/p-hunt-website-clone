import React from "react";
import "./CreateProductForm.css";
import SearchIcon from "@mui/icons-material/Search";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useState } from "react";
import axios from "axios";


export default function CreateProductForm() {
  const [name, setName] = useState("");
  const [monetize, setMone] = useState("");
  const [category, setCat] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState("");

//console.log(formData)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name)
    data.append("file", file)
    data.append("monetize", monetize)
    data.append("category", category)
    data.append("desc", desc)
    data.append("link", link)
    
    await axios.post("http://localhost:2345/product", data)
      .then(res => {
      alert("Your Product has been Posted")
    })
    .catch(err => console.log(err));
};

  return (
    <>
      <div className="creatProductFromMainDiv">
        <div className="createProductTopDiv-orange">
          <div className="productTopLogoDiv">
            <img src="https://downloads.intercomcdn.com/i/o/8730/79a974f9c42d362ec2818b1c/ph-help3.png" alt="logo"></img>
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
                    onChange={(e)=>setName(e.target.value)}
                  />
                  <br />
                  <input
                    className="createProductform-inputFileld"
                    type="text"
                    placeholder="Category"
                    name="category"
                    onChange={(e)=>setCat(e.target.value)}
                  />
                  <br />
                  <input
                    className="createProductform-inputFileld"
                    type="text"
                    placeholder="Link(optional)"
                    name="link"
                    onChange={(e)=>setLink(e.target.value)}
                  />
                </div>
                <div className="createProductform-fieldDiv-2">
                  <input
                    className="createProductform-inputFileld"
                    type="text"
                    placeholder="Monetization"
                    name="monetize"
                    onChange={(e)=>setMone(e.target.value)}
                  />
                  <br />
                  <input
                    className="createProductform-inputFileld-desc"
                    type="text"
                    placeholder="description......"
                    name="description"
                    onChange={(e)=>setDesc(e.target.value)}
                  />
                  <br />

                  <div className="createProduct-uploadImgDiv">
                    <FileUploadIcon className="FileUploadIcon" />
                    <input
                      className="uploadImg-input"
                      onChange={event => {
                                const file = event.target.files[0];
                                setFile(file);
                            }}
                      type="file"
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

