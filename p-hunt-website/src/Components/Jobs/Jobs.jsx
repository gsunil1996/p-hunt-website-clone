import { useState } from "react";
import "./Jobs.css";
import { JobsCard } from "./JobsCard";

export function Jobs() {
  const [sub, setSub] = useState(false);

  return (
    <div className="jobs2">
      <div className="jobTitle">Jobs</div>
      <div className="jobbox">
        <div className="jobcard">
          <JobsCard />
        </div>
        <div className="filter">
          <div className="jobAd">
            <div className="dreamjob">Don't miss your dream job</div>
            <div className="updates">
              Get email updates when new jobs are added ✌
            </div>
            {!sub? <input className="inp" type="email" placeholder="your@email.com" required />:<h4 style={{color:"green"}}>Subscribed Successfully!</h4>}
            <div onClick={()=>setSub(true)} className="subscribe">SUBSCRIBE</div>
          </div>
        </div>
      </div>
    </div>
  );
}
