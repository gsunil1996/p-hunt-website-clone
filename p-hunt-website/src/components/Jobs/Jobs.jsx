import "./Jobs.css"
import { JobsCard } from "./JobsCard"

export function Jobs(){
  
    return <div className="jobs">
    <div className="jobTitle">Jobs</div>
    <div className="jobbox">
      <div className="jobcard">
        <JobsCard/>
        
      </div>
      <div className="filter">
        <div className="jobAd">
          <div className="dreamjob">Don't miss your dream job</div>
          <div className="updates">Get email updates when new jobs are added ✌</div>
          <input className="inp" type="email" placeholder="your@email.com"/>
          <div className="subscribe">SUBSCRIBE</div>
        </div>
      </div>
    </div>
    </div>
}