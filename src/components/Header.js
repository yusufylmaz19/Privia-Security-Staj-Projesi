import "../css/Header.css";
import React  from "react";
import logo from "../images/Privia_logo.svg";
import logo2 from "../images/Chevron Up.svg";

function Header() {
  function toggle(e) {
    e.preventDefault();
    const productEl = document.getElementById("product");
    const ulEl = document.querySelector(".ul3");
    productEl.addEventListener("click", function (e) {
      ulEl.classList.toggle("hide");
    });
  }
  return (
    <>
      {/* unordereList kullanarak başlık kımsınını oluşturuyoruz burada  */}
      <header>
        <img src={logo}></img>
        <ul className="ul1">
          <li>
            <a href="/blank">About</a>
          </li>
          <li id="product" onClick={toggle}>
            <a href>Products</a>
            <img src={logo2}></img>
            <br></br>
            <ul className="ul3">
              <li>
                <a>Analyze</a>
              </li>
              <hr></hr>
              <li>
                <a>Defense</a>
              </li>
              <hr></hr>
              <li>
                <a>Protect</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Resource</a>
          </li>
          <li>
            <a>Costumers</a>
          </li>
        </ul>

        <ul className="ul2">
          <li>
            <a>Login</a>
          </li>
          <li id="btn_trail">
            <a>Start Free Trail</a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
