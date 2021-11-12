import React from "react";
import "./Feed.css";
import {useState} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {Products} from "../../dummyData";
import FeedProduct from "../feedProductPost.jsx/FeedProduct";

// const pro = Products.map((p)=>{
//   return p;
// });
//console.log(product)

export default function Feed() {
    const [click,setClick] = useState("none");

    // const [voted,setvoted] = useState(p.votes);
    // const [isVoted,setisVoted] = useState(false);

    const handleClickMenu=()=>{
      if(click==="none"){
        setClick("block")
      }
      if(click==="block"){
        setClick("none")
      }

     };

    // const voteHandler =()=>{
    //   setvoted(isVoted ? voted-1 : voted+1)
    //   setisVoted(!isVoted)
    // };
  
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
              <p>Featured</p>
              <p>Newest</p>
              </ul>
            </div>
          </span>
        </div>
         {/* here will come map property */}
         {/* {Products.map((p)=>(
                   <div className="feedContainerProductsDiv">
                   <div className="feedContainerProduct-detailDiv">
                       <div className="product-logo">
                         <video className="productLogoVideo" poster={p.img}></video>
                       </div>
                       <div className="product-detailDiv">
                           <div className="productNameDescDiv">
                             <h4 className="productName">{p.name}</h4>
                             <p className="productDesc">{p.Description}</p>
                           </div>
                           <div className="productCommentDiv">
                             <ModeCommentIcon className="ModeCommentIcon"/>
                             <p className="commentNumber">{p.comment}</p>
                             <p className="useableType">{p.monetization}</p>
                             <p className="dot">.</p>
                             <p className="productType">{p.Category}</p>
                           </div>
                       </div>
                   </div>
                   <div className="feedContainerProduct-voteDiv" value={voted} onClick={voteHandler}>
                     <ArrowDropUpIcon className="ArrowDropUpIcon"/>
                     <p className="voteNumber">{p.votes}</p>
                   </div>
             </div>
              
                ))}
         */}
         {Products.map((pro)=>(
                    <FeedProduct key={pro.id} p={pro}/>
                ))}
        {/* map propery --till here */}
      </div>
    </>
  );
}
