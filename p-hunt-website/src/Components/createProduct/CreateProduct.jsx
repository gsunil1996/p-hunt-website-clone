import React from 'react'
import { Link } from 'react-router-dom';
import "./CreateProduct.css";

export default function CreateProduct() {

    return (
      <>
        <div className="createProductMainContainer">
          <div className="createProductTopDiv-green">
            <p>Please check your email to confirm your account.</p>
            <button>RESEND</button>
          </div>
          <div className="createProductMainHeadingDiv">
            <h1>My product hunts</h1>
          </div>
          <div className="createProductOtherContaintDiv">
            <p className="createProductOtherContaint-heading">
              🙁Looks like you dont have any posts yet
            </p>
            <p className="createProductOtherContaint-secondPara">
              To learn more about posting a product, check out our{" "}
              <span className="secondPara-span">
                guides to a successful launch
              </span>
            </p>
            <Link to="/createproductform">
              <button className="createProduct-Button">
                Create a new post
              </button>
            </Link>
          </div>
        </div>
      </>
    );
}
