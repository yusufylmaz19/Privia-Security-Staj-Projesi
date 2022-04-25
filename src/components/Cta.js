import React from "react";
import "../css/Cta.css";
import ctaLine from "../svg/ctaLine.svg";
import ctaLine2 from "../svg/line.svg";
import ctaTria from "../svg/Path 10.svg";
import ctaOval from "../svg/Oval 2 Copy.svg";

function Cta() {
  return (
    <div className="ctaContainer">
      <img id="ctaLine" src={ctaLine}></img>
      <img id="ctaLine2" src={ctaLine2}></img>
      <img id="ctaTria" src={ctaTria}></img>
      <img id="ctaOval" src={ctaOval}></img>

      <div className="ctaContent">
        <div className="ccBox1">
          <h1
            style={{
              color: "#000",
              fontSize: "38px",
              fontWeight: "bolder",
              marginTop: "40px",
            }}
          >
            Your next successful business starts now
          </h1>
          <h1
            style={{
              color: "#64626A",
              fontSize: "14px",
              fontWeight: "bold",
              marginTop: "40px",
            }}
          >
            Join with more than 1.8 million people across 50,000 companies.
            30-day free trial, cancel any time. No credit card required.{" "}
          </h1>
        </div>
        <div className="ccBox2">
          <button type="button" className="ccBtn" id="btn1">
            Star Free Trail
          </button>
          <button type="button" className="ccBtn" id="btn2">
            View Live Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cta;
