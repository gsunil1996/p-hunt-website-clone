import React from "react";
import "./Feed.css";
import {useState,useEffect} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FeedProduct from "../feedProductPost.jsx/FeedProduct";
import axios from "axios";

const handleFilter=(Products)=>{
 return Products.filter((p)=>{
    return (p.date).sort();
  })
}

export default function Feed() {
const [Products , setProducts] = useState([])
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:2345/product`,
  })
      .then(function (response) {
          setProducts(response.data)
          console.log(response.data)
      })
      .catch(function (error) {
          console.log(error);
      });
  }, [])


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
