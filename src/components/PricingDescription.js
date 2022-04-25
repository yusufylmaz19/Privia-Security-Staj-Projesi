import React from "react";
import Pricing from "../components/Pricing";
import "../css/PricingDescription.css";
import ovalLogo from "../svg/Oval 2 Copy.svg";
import desRect from "../svg/desRect.svg";
import desLine from "../svg/desLine.svg";
import desTria from "../svg/desTria.svg";

function PricingDescription() {
  return (
    <>
      <Pricing />
      <div className="descriptionContainer">
        <div className="descriptionContent">
          <div className="descriptionHeader">
            <div className="descriptionLine"></div>
            <h3 className="descriptionTitle">Not sure what to choose</h3>
          </div>
          <p className="descriptionBoldTitle">
            Let us help you to decide the right plan for you
          </p>
          <div className="secondContent">
            <div className="scBox">
              <h3 style={{ color: "#3B3A40" }}>Standart is for you if...</h3>
              <div
                style={{ backgroundColor: "#FFEDB6" }}
                className="boxLine"
              ></div>
              <p>
                Quisque aliquam porta bibendum. Donec ornare massa ligula, nec
                venenatis ipsum aliquam non.
              </p>
              <p>
                Ut varius enim nec tellus interdum ultrices. Vivamus sodales
                finibus eros, sed varius mauris varius a. Vestibulum nec ligula
                bibendum lorem ornare tempus vel quis turpis. Cras risus tortor,
                vulputate tristique ipsum non, auctor sollicitudin ipsum.{" "}
              </p>
            </div>
            <div className="scBox">
              <h3 style={{ color: "#3B3A40" }}>Standart is for you if...</h3>
              <div
                style={{ backgroundColor: "#D1E8FF" }}
                className="boxLine"
              ></div>
              <p>
                Curabitur sed leo elementum, elementum turpis ac, venenatis ex.
                Aliquam dictum sagittis interdum. Praesent ac vestibulum felis.
              </p>
              <p>
                Phasellus eu viverra ante. Morbi dui est, dictum non justo
                facilisis, convallis iaculis sapien. Maecenas non enim sit amet
                augue tincidunt ullamcorper. Sed varius pharetra odio at luctus.
              </p>
            </div>
            <div className="scBox">
              <h3 style={{ color: "#3B3A40" }}>Standart is for you if...</h3>
              <div
                style={{ backgroundColor: "#5B45E0" }}
                className="boxLine"
              ></div>
              <p>
                Aliquam ut justo fringilla, porta lectus ac, aliquam elit. Sed
                posuere mi vel porta aliquam. Nullam in felis pretium, faucibus
                nunc quis, semper purus.
              </p>
              <p>
                Aliquam sit amet urna sed nulla fermentum finibus. Nulla ac
                nulla placerat, sodales est nec, pellentesque tortor. Etiam
                vitae lectus non mauris blandit elementum. Nam ut metus euismod,
                consectetur nibh non, mattis erat.
              </p>
            </div>
          </div>
        </div>
        <div className="descriptionContent2">
          <img id="oval" src={ovalLogo}></img>
          <img id="desRect" src={desRect}></img>
          <img id="desLine" src={desLine}></img>
          <img id="desTria" src={desTria}></img>
          <img id="oval1" src={ovalLogo}></img>
          <div className="descBox">
            <h3 style={{ color: "#64626A", textAlign: "center" }}>
              Have any questions? Want some help getting started?
            </h3>
            <h1
              style={{ fontSize: "45px", color: "#000", textAlign: "center" }}
            >
              Don’t be stranger, we always love to hear from you
            </h1>
            <button type="button" id="contactUs">
              Star Free Trail
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingDescription;
