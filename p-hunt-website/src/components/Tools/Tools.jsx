
import axios from "axios"
import { useEffect, useState } from "react"
import "./Tools.css"
import { ToolsCard } from "./ToolsCard"

export function Tools(){
   const [option,setOption]=useState("Recommended")
   const [search,setSearch]=useState("")
   const [val,setVal]=useState(0)


 useEffect(()=>{
    var a=5
 },[val])
const handleKeyPress=(e)=>{
   if(e.key==="Enter"){
      axios.get("http://localhost:3005/ClubsRecommended")
      .then((res)=>{
         res.data.map(el=>{
            if(el.name===search)setVal(el.id)
            return val
         })
         console.log("jsx",val)
      })
   }
}
    return <div className="toolsBody">
        <div className="star">✨</div>
        <h1 className="founder">Founder Club</h1>
        <h2 className="founderText">Your access to big savings on tools that help kick start your business</h2>
        <h2 className="founderText">Join now for access to $100,000 in savings for only</h2>
        <div className="join">JOIN FOUNDER CLUB</div>
        <div className="invite">Got an invite code?</div>
        <div className="sort">
          <div className="sortText"><span>Sort by:</span></div>
          <div className="recommended">
            <select className="select" name="clubs" onChange={(e)=>setOption(e.target.value)} >
            <option value="Recommended">Recommended</option>
            <option value="Popular">most popular</option>
            <option value="Newest">newest</option>
            </select>
          </div>
          <input onKeyPress={(e)=>handleKeyPress(e)} onChange={(e)=>setSearch(e.target.value)} className="search" type="text" placeholder="search deals"></input>
        </div>
        <div className="line"></div>
        <div>
        <ToolsCard option={option} id={val}/>
        </div>
        <div className="line"></div>
        <div className="pricing">

        <div className="simple">Our Simple Pricing</div>
        <div className="simpleText">Join Founder Club today and you’ll get access
         to all our current and future deals for a whole year.</div>

        <div className="perMonth">
           <div >
              <div className="dollarbox"><span className="dollars">$60</span><span className="month">/MONTH</span></div>
              <div className="anually">(charged anually at $720)</div>
           </div>
           <div>
              <div className="join">JOIN FOUNDER CLUB</div>
              <div className="invite">Got an invite code?</div>
           </div>
        </div>
        <div className="line"></div>
        <div className="interested">Interested in becoming a Founder Club partner? We want
         to hear from you! <button className="apply">APPLY NOW</button></div>
        </div>
    </div>
}