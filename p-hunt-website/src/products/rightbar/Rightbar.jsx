import React from 'react'
import "./Rightbar.css";

export default function Rightbar() {
    return (
        <>
        <div className="rightbarMainContainer">
           <div className="rightbarImg">
               <img className="rightbarImg" src="https://ph-static.imgix.net/event_2021_10_26_letsgetthispartystartup2.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=280&h=300&fit=max&dpr=1"></img>
            </div> 
            <hr className="rightbarHr"/>
            {/* latest stories section */}
            <div className="rightbar-latestStoriesMainDiv">
                <h4 className="latestStories">LATEST STORIES →</h4>
                <div className="rightbar-latestStories-childdiv-1">
                    <div className="latestStories-descdiv">
                        <p className="latestStories-desc">There's no better time to start a new search engine by Richard Socher</p>
                        <p className="latestStories-time">5 min Read</p>
                    </div>
                    <div className="latestStories-photoDiv">
                        <img className="latestStories-photo" src="https://ph-files.imgix.net/60056ade-4b0e-483b-a877-df780bd88adf.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=72&h=48&fit=crop&dpr=1"></img>
                    </div>
                </div>

                <div className="rightbar-latestStories-childdiv-1">
                    <div className="latestStories-descdiv">
                        <p className="latestStories-desc">There's no better time to start a new search engine by Richard Socher</p>
                        <p className="latestStories-time">5 min Read</p>
                    </div>
                    <div className="latestStories-photoDiv">
                        <img className="latestStories-photo" src="https://ph-files.imgix.net/c772f8b0-d966-4da7-b88d-590e47e0efe8.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=72&h=48&fit=crop&dpr=1"></img>
                    </div>
                </div>

                <div className="rightbar-latestStories-childdiv-1">
                    <div className="latestStories-descdiv">
                        <p className="latestStories-desc">There's no better time to start a new search engine by Richard Socher</p>
                        <p className="latestStories-time">5 min Read</p>
                    </div>
                    <div className="latestStories-photoDiv">
                        <img className="latestStories-photo" src="https://ph-files.imgix.net/45024826-d850-468b-9f9c-b7adf1c9783c.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=72&h=48&fit=crop&dpr=1"></img>
                    </div>
                </div>
            </div>
            <hr className="rightbarHr"/>
              {/* jobs section */}
            <div className="rightbar-latestStoriesMainDiv">
                <h4 className="latestStories">JOBS →</h4>
                <div className="rightbar-latestStories-childdiv-2">
                    <div className="latestStories-descdiv">
                        <p className="latestStories-desc">full-stack software engineer →</p>
                        <p className="latestStories-time">unspun • san francisco ca</p>
                    </div>
                    <div className="latestStories-photoDiv">
                        <img className="latestStories-photo" src="https://ph-files.imgix.net/ca1c3b1d-a5e1-468a-ae64-492920d5b66b.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=32&h=32&fit=max&dpr=1"></img>
                    </div>
                </div>

                <div className="rightbar-latestStories-childdiv-2">
                    <div className="latestStories-descdiv">
                        <p className="latestStories-desc">Brand / Marketing Designer →</p>
                        <p className="latestStories-time">Feather • Berlin</p>
                    </div>
                    <div className="latestStories-photoDiv">
                        <img className="latestStories-photo" src="https://ph-files.imgix.net/ca1c3b1d-a5e1-468a-ae64-492920d5b66b.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=32&h=32&fit=max&dpr=1"></img>
                    </div>
                </div>

                <div className="rightbar-latestStories-childdiv-2">
                    <div className="latestStories-descdiv">
                        <p className="latestStories-desc">Senior Software Engineer →</p>
                        <p className="latestStories-time">5 min Read</p>
                    </div>
                    <div className="latestStories-photoDiv">
                        <img className="latestStories-photo" src=""></img>
                    </div>
                </div><hr className="rightbarHr"/>
            </div>
        </div>
        </>
    )
}
