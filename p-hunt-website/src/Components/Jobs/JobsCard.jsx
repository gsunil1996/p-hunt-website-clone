import { useEffect, useState } from "react";
import "./Jobs.css";
import axios from "axios";
import { SharePopup } from "./Sharepopup";
import { data } from "./ClubsData";
import Modal from "react-modal";

export function JobsCard() {
  const [share, setShare] = useState(false);
  const [jobList, setJobList] = useState([]);
  const [p1, setP1] = useState(false);
  useEffect(() => {
    setJobList(data.Jobs);
  }, []);
  const handleShare = () => {
    setShare(!share);
  };

  return (
    <div>
      {jobList.map((el) => (
        <div key={el.id} className="carditems">
          <img src={el.image_url} alt="" />
          <div className="cardtext">
            <p className="teaching">{el.organisation}</p>
            <p className="senior">{el.position}</p>
            <p className="remote">{el.area}</p>
          </div>
          <div className="cardshare">
            <div className="stars">{el.stars}</div>
            <div className="sharebox">
              <div
                key={el.id}
                className="share"
                onClick={() => {
                  setP1(true);
                }}
              >
                SHARE
              </div>
              {/* {share?<SharePopup key={el.id}/>:<></>} */}
              <Modal
                isOpen={p1}
                style={{
                  content: {
                    height: "20vh",
                    width: "25vw",
                    margin: "auto",
                    background: "#f3f3f3",
                  },
                }}
              >
                <button
                  onClick={() => {
                    setP1(false);
                  }}
                  style={{
                    position: "relative",
                    right: "25px",
                    bottom: "25px",
                    border: "none",
                    fontWeight :"600"
                  }}
                >
                  X
                </button>
                <SharePopup />
              </Modal>
             <a href="https://breezy-land-f50.notion.site/Senior-Software-Engineer-9667ab285d1f43998ff896eb167c8955" target="_blank"> <div className="share">APPLY</div> </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
