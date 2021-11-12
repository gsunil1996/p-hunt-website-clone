import React from "react";
import "./Feed.css";
import {useState} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {Products} from "../../dummyData";
import FeedProduct from "../feedProductPost.jsx/FeedProduct";

const handleFilter=(Products)=>{
 return Products.filter((p)=>{
    return (p.date).sort();
  })
}

export default function Feed() {
    const [click,setClick] = useState("none");

    const handleClickMenu=()=>{
      if(click==="none"){
        setClick("block")
      }
      if(click==="block"){
        setClick("none")
      }

     };

  return (
    <>
      <div className="mainFeedContainer" >
        <div className="feedContainerMainHeadingDiv">
          <span className="feedContainer_MainHeading">
            Your next favorite thing👇
          </span>
        </div>
        <div className="feedContainerFeaturedDropDownDiv"  onClick={()=>handleClickMenu()}> 
          <span className="feedContainerFeature">
            <button className="feedContainerFeatureButton" onClick={()=>handleClickMenu()} >
              Featured
              <KeyboardArrowDownIcon className="feature_dropdown_icon" />
            </button>
            <div className="feedContainerFeatureMenu" style={{display:click}}>
              <ul>
              <p >Featured</p>
              <p onClick={handleFilter}>Newest</p>
              </ul>
            </div>
          </span>
        </div>
         {/* here will come map property */}
         {handleFilter ? Products.map((pro)=>(
                    <FeedProduct key={pro.id} p={pro}/>
                )) : Products.map((pro)=>(
                  <FeedProduct key={pro.id} p={pro}/>
              ))}
          {/* map propery --till here */}
      </div>
    </>
  );
}

// {Products.map((pro)=>(
//   <FeedProduct key={pro.id} p={pro}/>
// ))}
