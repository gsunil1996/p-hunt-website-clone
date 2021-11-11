
import { useEffect, useState } from "react"
import "./Jobs.css"
import axios from "axios"
import { SharePopup } from "./Sharepopup"
import {data} from "./ClubsData"

export function JobsCard(){
const [share,setShare]=useState(false)
const [jobList,setJobList]=useState([])

useEffect(()=>{
  
    setJobList(data.Jobs)
  
},[])
    const handleShare=()=>{
     setShare(!share)
    }
    return <div>
    {jobList.map(el=><div key={el.id} className="carditems">
     <img src={el.image_url} alt=""/>
      <div className="cardtext">
        <p className="teaching">{el.organisation}</p>
        <p className="senior">{el.position}</p>
        <p className="remote">{el.area}</p>
      </div>
      <div className="cardshare">
        <div className="stars">{el.stars}</div>
        <div className="sharebox">
        
          <div key={el.id} className="share" onClick={handleShare}>SHARE</div>
          {share?<SharePopup key={el.id}/>:<></>}
          
          <div className="share">APPLY</div>
        </div>
      </div>
     </div>)
       }
     </div>
}