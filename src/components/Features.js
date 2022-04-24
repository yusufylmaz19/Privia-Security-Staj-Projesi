import "../css/Features.css";
import React from "react";
import { GoChevronRight } from "react-icons/go";
import pieLogo from "../images/ic_Pie Chart.svg";
import shiledLogo from "../images/Ic_Shield.svg";
import handLogo from "../images/ic_Hand - Checklist.svg";
import lineLogo from "../images/ic_Line Chart.svg";
import ovalLogo from "../images/Oval 2 Copy.svg";
import path1Logo from "../images/Path 11.svg";
import path2Logo from "../images/Path 10.svg";
import syncLogo from "../images/Sync.svg";
import layerLogo from "../images/ic_Layer.svg";
import magicLogo from "../images/Magic Wand.svg";
import shapeLogo from "../images/Shape.svg";
import shape1Logo from "../images/Shape1.svg";
import shape2Logo from "../images/Shape2.svg";
import shape3Logo from "../images/Shape3.svg";
import shape4Logo from "../images/Shape4.svg";
import resim1 from "../images/resim1.svg";
import resim2 from "../images/resim2.svg";
import resim3 from "../images/resim3.svg";
import curvedLine from "../images/curvedLine.svg";
import line from "../images/line.svg";
import slackLogo from "../images/slack.svg";
import hubSpotLogo from "../images/hubspot.svg";
import squareLogo from "../images/square.svg";
import titanLogo from "../images/titan.svg";
import cogniLogo from "../images/cogni.svg";
import grubhubLogo from "../images/grubhub.svg";
import user1 from "../images/User.svg";
import user2 from "../images/User1.svg";
import shopify from "../images/shopify.svg";
import airbnb from "../images/airbnb.svg";

import { FaArrowUp,FaCheck } from "react-icons/fa";
import { PieChart, Pie, Cell } from "recharts";

function Features() {
  const data = [
    { name: "Videos", value: 60 },
    { name: "İmages", value: 300 },
  ];
  const COLORS = ["#5B45E0", "#FFE080"];
  return (
    <>
     {/* feature kısmınn birnci partı */}
     {/* containerımımz header ve içeriklerin olduğu content şeklinde 2 dive ayrıcağız */}
      <div className="features">
        <div className="features-container">
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
            <div className="feature3">
              <div className="featuresCircle fc1">
                <img src={pieLogo}></img>{" "}
              </div>
              <div>
                <h2 className="featureTitle">Analayze your data</h2>
                <p className="featurePar">
                  Create reports with an easy to use drag-and-drop designer.
                </p>
                <div className="a">
                  <a className="learn-more">Learn more</a>
                  <span className="learn-more-icon">
                    {" "}
                    <GoChevronRight />
                  </span>
                </div>
              </div>
            </div>
            <div className="feature4">
              <div className="featuresCircle fc2">
                {" "}
                <img src={shiledLogo}></img>{" "}
              </div>
              <div>
                <h2 className="featureTitle">Collaborate securely</h2>
                <p className="featurePar">
                  Share/publish your reports with your colleagues.
                </p>
                <div className="a">
                  <a className="learn-more">Learn more</a>
                  <span className="learn-more-icon">
                    {" "}
                    <GoChevronRight />
                  </span>
                </div>
              </div>
            </div>
            <div className="feature5">
              <div className="featuresCircle fc3">
                {" "}
                <img src={lineLogo}></img>{" "}
              </div>
              <div>
                <h2 className="featureTitle">Embedded analytics</h2>
                <p className="featurePar">
                  Get a powerful analytics tool in your own brand name.
                </p>
                <div className="a">
                  <a className="learn-more">Learn more</a>
                  <span className="learn-more-icon">
                    {" "}
                    <GoChevronRight />
                  </span>
                </div>
              </div>
            </div>
            <div className="feature6">
              <div className="featuresCircle fc4">
                {" "}
                <img src={handLogo}></img>{" "}
              </div>
              <div>
                <h2 className="featureTitle">Easy and Intutuive</h2>
                <p className="featurePar">
                  Easily converse with your data using everyday language.
                </p>
                <div className="a">
                  <a className="learn-more">Learn more</a>
                  <span className="learn-more-icon">
                    {" "}
                    <GoChevronRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feature kısmınn ikinic partı */}
      <div className="features2">
        <div className="f2PartOne">
          <img id="oval" src={ovalLogo}></img>
          <img id="path1" src={path1Logo}></img>
          <img id="path2" src={path2Logo}></img>
          <div className="box1">
            <h1>Data Analytics</h1>
            <p>Mar 21-Apr 01</p>
            <div className="pieChart">
              <PieChart width={300} height={200} onMouseEnter>
                <Pie
                  data={data}
                  cx={120}
                  cy={85}
                  innerRadius={60}
                  outerRadius={90}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
              <div className="pieCircleOne">
                <h4 style={{color:'#3B3A40'}}> 23.45%</h4>
                <p style={{color:'#8E8C95'}}>Videos</p>
              </div>
              <div className="pieCircleTwo">
              <h4 style={{color:'#3B3A40'}}> 76.55%</h4>
                <p style={{color:'#8E8C95'}}>Images</p>
              </div>
            </div>
          </div>
          <div className="box2">
            <h1>86.5%</h1>
            <p>Engagement</p>
            <h3>
              <FaArrowUp
                style={{
                  color: "#0BAD4B",
                  fontSize: "16px",
                  marginRight: "5px",
                }}
              />
              26,83%
            </h3>
          </div>
        </div>
        <div className="f2PartTwo">
          <div className="featuresHeader">
            <div className="featuresLine"></div>
            <h3 className="featuresTitle">Analytics</h3>
          </div>
          <h1 className="f2Title">Analyze your data with our analyze tools</h1>
          <p style={{ color: "#3B3A40" }}>
            Self-service data analytics software that lets you create visually
            appealing data visualizations and insightful dashboards in minutes.
          </p>
          <div className="afterTitle">
            <div className="f2Box1">
              {" "}
              <img src={layerLogo}></img>
              <h4>Powerful dashboard</h4>
            </div>
            <p style={{ color: "#64626A", marginLeft: "40px" }}>
              Combine multiple reports into a single beautiful dashboard.
            </p>
            </div>
            <div className="afterTitle2">
            <div className="f2Box1">
              {" "}
              <img src={syncLogo}></img>
              <h4>Always in Sync</h4>
            </div>
            <p style={{ color: "#64626A", marginLeft: "40px" }}>
              Don’t worry about the data, always be synchronized
            </p>
          </div>
          </div>
      </div>
      {/* feature kısmınn ucuncu partı */}
      <div className="features3">
        <div className="features-container">
        <div className="featuresHeader">
            <div className="featuresLine"></div>
            <h3 className="featuresTitle">More Feature</h3>
        </div>
        <div className="f3Header">
        <h1>We're more than an analytic tool. Explore our features, and satisfy your customers
        </h1>
        </div>
        <div className="f3Features">
            <div className="f3"> <div className="f3Circle1"><img src={magicLogo}></img></div><h3>Easy customization</h3><p>No matter what kind of home you have to share, you can increase your earnings.</p></div>
            <div className="f3"> <div className="f3Circle1"><img src={shapeLogo}></img></div><h3>Secure and fast</h3><p>No matter what kind of home you have to share, you can increase your earnings.</p></div>
            <div className="f3"> <div className="f3Circle1"><img src={shape1Logo}></img></div><h3>Powerful dashboard</h3><p>No matter what kind of home you have to share, you can increase your earnings.</p></div>
            <div className="f3"> <div className="f3Circle2"><img src={shape2Logo}></img></div><h3>Cloud upload</h3><p>No matter what kind of home you have to share, you can increase your earnings.</p></div>
            <div className="f3"> <div className="f3Circle2"><img src={shape3Logo}></img></div><h3>Proven Technology</h3><p>No matter what kind of home you have to share, you can increase your earnings.</p></div>
            <div className="f3"> <div className="f3Circle2"><img src={shape4Logo}></img></div><h3>98.99% satisfaction</h3><p>No matter what kind of home you have to share, you can increase your earnings.</p></div>
        </div>
        </div>
      </div>
      {/* feature kısmınn ikinic partı */}
      <div className="features4">
        <div className="f4PartOne">
          <img id="oval" src={ovalLogo}></img>
          <img id="resim1" src={resim1}></img>
          <img id="resim2" src={resim2}></img>
          <img id="resim3" src={resim3}></img>
          <img id="curvedLine" src={curvedLine}></img>
          <img id="line" src={line}></img>
        </div>
        <div className="f4PartTwo">  
        <div className="featuresHeader">
            <div className="featuresLine"></div>
            <h3 className="featuresTitle">Collaborate</h3>
          </div>
          <h1 className="f2Title" style={{fontWeight:'bold'}}>Collaborate with your team anytime, anywhere</h1>
          <p style={{marginTop:'20px',color:'#3B3A40'}}>Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.</p>
          <div className="list"> 
              <div className="f4ListOne">
                  <div className="f4Box">
                  <FaCheck style={{color:'#38AC79'}}/>
                  <h3>Work with any team</h3>
                  </div>  
                  <div className="f4Box">
                  <FaCheck style={{color:'#38AC79'}}/>
                  <h3>Organize your data</h3>
                  </div>
                  <div className="f4Box">
                  <FaCheck style={{color:'#38AC79'}}/>
                  <h3>Business analytics</h3>
                  </div> 
              </div>
                  <div className="f4ListTwo">
                  <div className="f4Box">
                  <FaCheck style={{color:'#38AC79'}}/>
                  <h3>Always in sync</h3>
                  </div>  
                  <div className="f4Box">
                  <FaCheck style={{color:'#38AC79'}}/>
                  <h3>Embedded analytics</h3>
                  </div>
                  </div>
          </div>
        </div>
        <p className="baslık" > More than 1.8 million people across 50,000 companies choose Oval</p>
        <div className="f4-content">
        <div className="f4-content-header">
                <img src={slackLogo}></img>
                <img src={hubSpotLogo}></img>
                <img src={squareLogo}></img>
                <img src={titanLogo}></img>
                <img src={cogniLogo}></img>
                <img src={grubhubLogo}></img>
        </div>
        <div className="boxes">
            <div className="boxes1"><img style={{padding:'30px'}}src={shopify}></img><h2 style={{padding:'30px',paddingTop:'0',color:'#000'}}>I received great customer service from the specialists who helped me. I would recommend to anyone who wants great dashboard that has great quality.</h2> <img style={{padding:'30px',paddingTop:'0'}} src={user1}></img> </div>
            <div className="boxes2"><img style={{padding:'30px'}}src={airbnb}></img><h2 style={{padding:'30px',paddingTop:'0',color:'#000'}}>My experience with this platform so far has been great. Everything is easy, from creating visualization, scheduling, collaboration and many more.</h2> <img style={{padding:'30px',paddingTop:'0'}} src={user2}></img> </div>
        </div>
        </div>
        <p className="ayaklık">  
        <div className="a">
         <a className="learn-more">See All  Testimonial</a>
            <span className="learn-more-icon">
                  <GoChevronRight />
            </span>
          </div>
        </p>
      </div>
    </>
  );
}

export default Features;
