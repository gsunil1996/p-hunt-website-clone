export function SharePopup({ key }) {
  return (
    <div key={key} className="popupbox">
      <div className="shareJob">Share this job</div>
      <div className="can">
        You can{" "}
        <span style={{ marginLeft: "5px" }} className="copy">
          copy the link
        </span>
      </div>
      <div className="linkbox">
        <div className="tweet">
          <img
            className="bird"
            src="https://img.icons8.com/color/48/000000/twitter--v1.png"
            alt=""
          />
          TWEET
        </div>
        <div className="tweet2">
          <img
            className="bird"
            src="https://img.icons8.com/color/48/000000/facebook.png"
          />
          SHARE
        </div>
      </div>
    </div>
  );
}
