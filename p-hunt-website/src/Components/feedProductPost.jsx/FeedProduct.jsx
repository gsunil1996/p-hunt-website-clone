import React from 'react'
import "./FeedProduct.css";
import {useState} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function FeedProduct({p}) {

    const [voted,setvoted] = useState(p.votes);
    const [isVoted,setisVoted] = useState(false);
    const [colour,setColour] = useState("#667190");
    const [isColour,setIsColour] = useState("#DA552F");

    const voteHandler =()=>{
      setvoted(isVoted ? voted-1 : voted+1)
      setisVoted(!isVoted)
      setColour(isColour ? "#DA552F" : colour )
      setIsColour(isColour ? "#667190" : "#DA552F" )
    };
  
    return (
        <>
          <div className="feedContainerProductsDiv" >
                   <div className="feedContainerProduct-detailDiv">
                       <div className="product-logo">
                         <img className="productLogoVideo" src={p.img.length>40 ? p.img:`https://drive.google.com/uc?export=view&id=${p.img}`} alt="product"/>
                       </div>
                       <div className="product-detailDiv">
                           <div className="productNameDescDiv">
                             <h4 className="productName" >{p.name}</h4>
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
                   <div className="feedContainerProduct-voteDiv"  value={voted} onClick={voteHandler} >
                     <ArrowDropUpIcon sx={{ color: colour }}className="ArrowDropUpIcon"/>
                     <p className="voteNumber" style={{color:colour}}>{voted}</p>
                   </div>
             </div>  
        </>
    )
}
