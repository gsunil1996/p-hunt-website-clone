import React from "react";
import "./Feed.css";
import {useState} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Hidden } from "@mui/material";

export default function Feed() {
    const [click,setClick] = useState("none");

    const handleClickMenu=()=>{
        setClick(click ? "none" : "block")
    }
  return (
    <>
      <div className="mainFeedContainer">
        <div className="feedContainerMainHeadingDiv">
          <span className="feedContainer_MainHeading">
            Your next favorite thing👇
          </span>
        </div>
        <div className="feedContainerFeaturedDropDownDiv">
          <span className="feedContainerFeature">
            <button className="feedContainerFeatureButton" onClick={handleClickMenu}>
              Featured
              <KeyboardArrowDownIcon className="feature_dropdown_icon" />
            </button>
            <div className="feedContainerFeatureMenu">
              <ul>
              <li>Option 1</li>
              <li>Option 2</li>
            </ul>
              </div>
          </span>
        </div>
         {/* here will come map property */}
        <div className="feedContainerProductsDiv">
              <div className="feedContainerProduct-detailDiv">
                  <a className="product-logo"></a>
                  <div className="product-detailDiv">
                      
                  </div>
              </div>
              <div className="feedContainerProduct-voteDiv"></div>
        </div>
        {/* map propery --till here */}
      </div>
    </>
  );
}
