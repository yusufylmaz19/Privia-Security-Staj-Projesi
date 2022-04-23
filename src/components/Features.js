import "../css/Features.css";
import React from "react";
import {GoChevronRight} from "react-icons/go"
import pieLogo from "../images/ic_Pie Chart.svg";
import shiledLogo from "../images/Ic_Shield.svg";
import handLogo from "../images/ic_Hand - Checklist.svg";
import lineLogo from "../images/ic_Line Chart.svg";

function Features() {
  return (
    <div className="features">
      <div className="features-container">
        {/* containerımımz header ve içeriklerin olduğu content şeklinde 2 dive ayrıcağız */}
        <div className="featuresHeader">
          <div className="featuresLine"></div>
          <h3 className="featuresTitle">Features</h3>
        </div>
        {/* content tarınfda grid systemkullamak için nested div yapısını kullancağız */}
        <div className="features-content">
          <div className="feature1">
            <h1>Our Solution for your buisness </h1>
          </div>
          <div className="feature2">
            <p>
              We are self-service data analytics software that lets you create
              visually appealing data visualizations and insightful dashboards
              in minutes.
            </p>
          </div>
          <div className="feature3"><div className="featuresCircle fc1"><img src={pieLogo}></img> </div> 
          <div><h2>Analayze your data</h2>
          <p>Create reports with an easy to use drag-and-drop designer.</p>
          <div className="a">
          <a className="learn-more">Learn more</a>
          <span className="learn-more-icon"> <GoChevronRight /></span>
          </div>
          </div>
          </div>
          <div className="feature4"><div className="featuresCircle fc2"> <img src={shiledLogo}></img> </div> 
          <div><h2>Analayze your data</h2>
          <p>Create reports with an easy to use drag-and-drop designer.</p>
          <div className="a">
          <a className="learn-more">Learn more</a>
          <span className="learn-more-icon"> <GoChevronRight /></span>
          </div>
          </div>
          </div>
          <div className="feature5"><div className="featuresCircle fc3"> <img src={lineLogo}></img> </div> 
          <div><h2>Analayze your data</h2>
          <p>Create reports with an easy to use drag-and-drop designer.</p>
          <div className="a">
          <a className="learn-more">Learn more</a>
          <span className="learn-more-icon"> <GoChevronRight /></span>
          </div>
          </div>
          </div>
          <div className="feature6"><div className="featuresCircle fc4"> <img src={handLogo}></img> </div> 
          <div><h2>Analayze your data</h2>
          <p>Create reports with an easy to use drag-and-drop designer.</p>
          <div className="a">
          <a className="learn-more">Learn more</a>
          <span className="learn-more-icon"> <GoChevronRight /></span>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
