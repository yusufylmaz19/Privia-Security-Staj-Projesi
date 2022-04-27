import React from "react";
import "../css/Customers.css";
import Header from "./Header";
import user1 from "../svg/User.svg";
import shopify from "../svg/shopify.svg";
import shopifyGray from "../svg/shopifyGray.svg";
import slackLogo from "../svg/slack.svg";
import hubSpotLogo from "../svg/hubspot.svg";
import titanLogo from "../svg/titan.svg";
import lucasProfile from "../svg/lucas.svg";
import allenProfile from "../svg/allen.svg";
import agustaProfile from "../svg/agusta.svg";
import amirProfile from "../svg/amir.svg";
import erikProfile from "../svg/erik.svg";
import claudiaProfile from "../svg/claudia.svg";
import francisProfile from "../svg/francis.svg";
import twitter from "../svg/Twitter2.svg";

import { GoChevronRight, GoChevronLeft } from "react-icons/go";

function Customers() {
  return (
    <>
    {/* ana container  ve onun içinde 2 content */}
      <div className="customersContainer">
        <Header />
        {/* ekranın ortasında duran ana titlın gerçekleştirilmesi */}
        <div className="customersContent">
          <div className="customersTitle">
            <h1>
              Hear what 95,000+ brands and businesses love about using Oval
            </h1>
          </div>
        </div>
         {/* burada tweet ve diğer revievler ve markaa logoları için oluşan contnetn bölümmü */}
        <div className="customersContent1">
          <div className="customerBox1">
            <div className="customerBox1-1">
              <GoChevronLeft
                style={{
                  color: "#B3B1B7",
                  fontSize: "40px",
                  alignSelf: "center",
                }}
              />
              <div className="customerShopify">
                <img style={{ padding: "30px" }} src={shopify}></img>
                <h2
                  style={{
                    padding: "30px",
                    paddingTop: "0",
                    color: "#000",
                    fontSize: "39px",
                  }}
                >
                  I received great customer service from the specialists who
                  helped me. I would recommend to anyone who wants great
                  dashboard that has great quality.
                </h2>{" "}
                <img
                  style={{ padding: "30px", paddingTop: "0" }}
                  src={user1}
                ></img>{" "}
              </div>
              <GoChevronRight
                style={{
                  color: "#B3B1B7",
                  fontSize: "40px",
                  alignSelf: "center",
                }}
              />
            </div>
            <div className="customerBox1-2">
              <img src={slackLogo}></img>
              <img src={hubSpotLogo}></img>
              <img src={shopifyGray}></img>
              <img src={titanLogo}></img>
            </div>
          </div>
          {/* burada tweet boxları için gerçekşetirdiğim divler */}
          {/* her bir tweet için ayrı bir div ve onun içindeki bililer için p ve img tagları kullandım */}
          <div className="customerBox2">
            <p>#ovalover</p>
            <h1>Hear more from people like you</h1>
            <div className="tweets">
              <div className="tweet tweet1">
                <div className="twitterProfile">
                  <img src={lucasProfile}></img>
                  <div className="names">
                    <h2 className="name">Lucas Bowen</h2>
                    <h3 className="nickName">@lc_bowen</h3>
                  </div>
                </div>
                <img className="twitterLogo" src={twitter}></img>
                <p className="tweetText">
                  <span className="tag">@Oval</span> I love using Buffer because
                  of your TEAM! Oval is the gold standard for all in one
                  annalytic software. Cheers guys!{" "}
                  <span className="tag">#ovalove </span>
                </p>
                <p className="tweetDate">5:54 PM - Oct 10, 2018</p>
              </div>
              <div className="tweet tweet2">
                <div className="twitterProfile">
                  <img src={allenProfile}></img>
                  <div className="names">
                    <h2 className="name">Allen Soto</h2>
                    <h3 className="nickName">@st_allen</h3>
                  </div>
                </div>
                <img className="twitterLogo" src={twitter}></img>
                <p className="tweetText">
                  New <span className="tag">@Oval</span> for web is 🔥{" "}
                <p className="secondTweetText"> 
                  <span className="tag">#ovalove </span>
                </p>
                </p>
                <p className="tweetDate">5:54 PM - Oct 10, 2018</p>
              </div>
              <div className="tweet tweet3">
                <div className="twitterProfile">
                  <img src={agustaProfile}></img>
                  <div className="names">
                    <h2 className="name">Augusta Schultz</h2>
                    <h3 className="nickName">@guschultz</h3>
                  </div>
                </div>
                <img className="twitterLogo" src={twitter}></img>
                <p className="tweetText">
                  Have never seen as open and as transparent a company as{" "}
                  <span className="tag">@Oval</span>, loved browsing your
                  website and reading your blogs. Definitely a torch bearer in
                  employee satisfaction, loved your company dashboard. learnt a
                  lot today ! ⭐️⭐️⭐️⭐️⭐️
                </p>
                <p className="tweetDate">5:54 PM - Oct 10, 2018</p>
              </div>
              <div className="tweet tweet4">
                <div className="twitterProfile">
                  <img src={amirProfile}></img>
                  <div className="names">
                    <h2 className="name">Amir</h2>
                    <h3 className="nickName">@amr_12</h3>
                  </div>
                </div>
                <img className="twitterLogo" src={twitter}></img>
                <p className="tweetText">
                  <span className="tag">@Oval</span> I love using Buffer because
                  of your TEAM! Oval is the gold standard for all in one
                  annalytic software. Cheers guys!{" "}
                  <span className="tag">#ovalove </span>
                </p>
                <p className="tweetDate">5:54 PM - Oct 10, 2018</p>
              </div>
              <div className="tweet tweet5">
                <div className="twitterProfile">
                  <img src={erikProfile}></img>
                  <div className="names">
                    <h2 className="name">Erik Thronton</h2>
                    <h3 className="nickName">@erkt</h3>
                  </div>
                </div>
                <img className="twitterLogo" src={twitter}></img>
                <p className="tweetText">
                  I've had <span className="tag">@Oval</span> pro for about 24
                  hours now and I honestly don't know how I functioned without
                  it before. ❤️
                </p>
                <p className="tweetDate">5:54 PM - Oct 10, 2018</p>
              </div>
              <div className="tweet tweet6">
                <div className="twitterProfile">
                  <img src={claudiaProfile}></img>
                  <div className="names">
                    <h2 className="name">Claudia Gordon</h2>
                    <h3 className="nickName">@ccgordon</h3>
                  </div>
                </div>
                <img className="twitterLogo" src={twitter}></img>
                <p className="tweetText">
                  You've heard me sing your praises before but I'll gladly do it
                  again. <span className="tag">@Oval</span> is my most
                  indispensable marketing service. Thanks for all that you do!
                </p>
                <p className="tweetDate">5:54 PM - Oct 10, 2018</p>
              </div>
              <div className="tweet tweet7">
                <div className="twitterProfile">
                  <img src={amirProfile}></img>
                  <div className="names">
                    <h2 className="name">Amir</h2>
                    <h3 className="nickName">@amr_12</h3>
                  </div>
                </div>
                <img className="twitterLogo" src={twitter}></img>
                <p className="tweetText">
                  <span className="tag">@Oval</span> @Oval hands down is the
                  best application I have used that has made my life 1000x
                  easier. 
                  
                  <p className="secondText">It helps me keep things in order, it allows me to have
                  everything prepped, and allows for seamless posting between
                  all social medias. It keeps me so organized and saves so much
                  </p>
                  time...
                </p>
                <p className="tweetDate">5:54 PM - Oct 10, 2018</p>
              </div>
              <div className="tweet tweet8">
                <div className="twitterProfile">
                  <img src={francisProfile}></img>
                  <div className="names">
                    <h2 className="name">Francis Goodman</h2>
                    <h3 className="nickName">@fgman</h3>
                  </div>
                </div>
                <img className="twitterLogo" src={twitter}></img>
                <p className="tweetText">
                  <span className="tag">@Oval</span> is beautiful.
                  <p className="secondText">
                  Just sayin’ <span className="tag">#toptools</span> 
                  </p>
                </p>
                <p className="tweetDate">5:54 PM - Oct 10, 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customers;
