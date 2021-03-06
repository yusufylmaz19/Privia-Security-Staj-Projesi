import "../css/Header.css";
import React  from "react";
import logo from "../svg/Privia_logo.svg";
import logo2 from "../svg/Chevron Up.svg";

function Header() {
  // product tagında açılıp kapanır toolbox için js kodu
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
      <div className="headerContainer">
      <header>
        <img src={logo}></img>
        <ul className="ul1">
          <li>
            <a href="/priva-staj-proje">About</a>
          </li>
          <li id="product" onClick={toggle}>
            <a href>Products</a>
            <img src={logo2}></img>
            <br></br>
            <ul className="ul3 hide">
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
            <a href="/priva-staj-proje/#/Pricing">Pricing</a>
          </li>
          <li>
            <a href="/priva-staj-proje/#/Resources">Resource</a>
          </li>
          <li>
            <a  href="/priva-staj-proje/#/Customers">Costumers</a>
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
      </div>
    </>
  );
}

export default Header;
