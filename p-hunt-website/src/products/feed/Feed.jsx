import React from "react";
import "./Feed.css";
import {useState,useEffect} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Hidden  } from "@mui/material";

export default function Feed() {
    const [click,setClick] = useState("none");

    const handleClickMenu=()=>{
      if(click==="none"){
        setClick("block")
      }
      if(click==="block"){
        setClick("none")
      }

    }
  
  return (
    <>
      <div className="mainFeedContainer" onClick={()=>handleClickMenu()}>
        <div className="feedContainerMainHeadingDiv">
          <span className="feedContainer_MainHeading">
            Your next favorite thing👇
          </span>
        </div>
        <div className="feedContainerFeaturedDropDownDiv">
          <span className="feedContainerFeature">
            <button className="feedContainerFeatureButton" onClick={()=>handleClickMenu()} >
              Featured
              <KeyboardArrowDownIcon className="feature_dropdown_icon" />
            </button>
            <div className="feedContainerFeatureMenu" style={{display:click}}>
              <ul>
              <p>Featured</p>
              <p>Newest</p>
            </ul>
              </div>
          </span>
        </div>
         {/* here will come map property */}
        <div className="feedContainerProductsDiv">
              <div className="feedContainerProduct-detailDiv">
                  <div className="product-logo">
                    <video className="productLogoVideo" poster="https://ph-files.imgix.net/4ddceb91-d927-44f9-87b5-e288a9a177b8.gif?auto=compress&fm=webp&codec=mozjpeg&cs=strip&w=60&h=60&fit=max&frame=1&dpr=2">
 
                    </video>
                  </div>
                  <div className="product-detailDiv">
                      <div className="productNameDescDiv">
                        <h4 className="productName">Kosy</h4>
                        <p className="productDesc">A virtual space where remote teams work and hang out in</p>
                      </div>
                      <div className="productCommentDiv">
                        <ModeCommentIcon className="ModeCommentIcon"/>
                        <p className="commentNumber">300</p>
                        <p className="useableType">Free Options</p>
                        <p className="dot">.</p>
                        <p className="productType">Productivity</p>
                      </div>
                  </div>
              </div>
              <div className="feedContainerProduct-voteDiv">
                <ArrowDropUpIcon className="ArrowDropUpIcon"/>
                <p className="voteNumber">819</p>
              </div>
        </div>
        
        {/* map propery --till here */}
      </div>
    </>
  );
}
