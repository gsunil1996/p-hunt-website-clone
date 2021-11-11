import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { data } from "../Jobs/ClubsData"


export function ToolsCard({option,id}){
const [clubs,setClubs]=useState([])
console.log(option)
useEffect(()=>{
  
 if(option==="Recommended")setClubs(data.ClubsRecommended)
  else if(option==="Popular")setClubs(data.ClubsPopular)
 else if(option==="Newest")setClubs(data.ClubsNewest)
 
},[option])


    return<div className="toolsCard"> 
    {clubs.map(el=><div key={el.id} className="cardcss">
    <img className="cardimage" src={el.image_url} alt=""></img>
    <div className="credits"><p>{el.credits}</p></div>
    <div className="credits"><span>{el.value} </span></div>
    <div className="cardinfo">
    <p >{el.info}</p>
    </div>

    <div className="cardend">
      <div className="dealdetails">DEAL DETAILS</div>
      <div>{el.stars} </div>
    </div>
    </div>)
    
    }
    </div>
}