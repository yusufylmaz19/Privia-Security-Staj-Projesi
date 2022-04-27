import "../css/Home.css";
import React from 'react';
import curve from "../svg/curverLine1.svg";
import curve2 from "../svg/curverLine2.svg";
import sign from "../svg/sign.svg";
import line from "../svg/line.svg";
import triangle from "../svg/triangle.svg";
import {FaArrowUp, FaCircle} from "react-icons/fa"
import {FiChevronRight} from "react-icons/fi"
import Header from './/Header';
import {
  BarChart,
  Bar,
  YAxis,
  CartesianGrid,
} from "recharts";

function Home() {
  
  // bar chartı için gerekli olan data

  const data = [
    {
      name: "A",
      uv: 300,
      pv: 440,
    },
    {
      name: "B",
      uv: 350,
      pv: 140,
    },
    {
      name: "C",
      uv: 810,
      pv: 990,
    },
    {
      name: "D",
      uv: 600,
      pv: 350,
    },
    {
      name: "E",
      uv: 700,
      pv: 250,
    },
    {
      name: "F",
      uv: 450,
      pv: 380,
    },
    {
      name: "G",
      uv: 800,
      pv: 650,
    },
  ];

  return (
    <>
      {/* ekranın ortasında duran yazı ver butonları oluşturuyoruz */}
      <div className="homeContainer">
      <Header/>
      <h1 className="mid-title">Powerful analytics tools for your business</h1>
      <h1 className="mid-title2">An awesome tools for your business, increase business revenue with enterprise-grade links built to acquire and engage customers</h1>
      <div className="buttons">
        <button type="button" id="btn_start_trail">
          Star Free Trail
        </button>
        <button type="button" id="btn_demo">
          View Live Demo
        </button>
      </div>
      <img id="curve1" src={curve}></img>
      <img id="curve2" src={curve2}></img>
      <img id="line" src={line}></img>
      <img id="sign" src={sign}></img>
      <img id="triangle" src={triangle}></img>
      {/* grafiği ve içindeki verileri göstermek için kullanılır */}
      <div className="graphs">
        {/* 2 farklı  div şeklinde verieleri display ediyorum */}
        <div className="header-title"> 
        <h2> Data Analytics 
        <div className="gray"> 
          See insight on how your business has changed over time
        </div>
        </h2>
        <div className="select">
        <div className="selectBox"> <FaCircle style={{color:'#5843D9',fontSize:'12px',marginRight:'4px'}}/> <span>Impression</span><FiChevronRight style={{}}/></div> 
        </div>
        </div>
        <div className="header-title-2"> 
        <h2> <FaArrowUp style={{color:'green',fontSize:'16px',marginRight:'5px'}}/> 
        86,5%
        <div className="gray"> 
         from prev. month
        </div>
        </h2>
        <h2>
        2.456
        <div className="gray"> 
        Impression
        </div>
        </h2>
        <h2 >
        1,283
        <div className="gray"> 
        Reach
        </div>
        </h2>
        <h2> 
        2.34%
        <div className="gray"> 
        Growths
        </div>
        </h2>
        </div>
        {/* bar grafiğini oluşturuyoruz */}
        <div className="bars">
       <BarChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
         
        <YAxis ticks={[0,250,500,750,1000]}/>
        <Bar dataKey="uv" fill="#FFD246"  barSize={8} radius={[2 ,2, 0, 0]} />
        <Bar dataKey="pv" fill="#5B45E0"  barSize={8} radius={[2 ,2, 0, 0]} />
      </BarChart>
      </div>
       {/* burda grafiğn ortasındaki kutucuğu oluştruacgığz */}
       <div className="box">
          <h4 style={{color:"#64626A", marginBottom:'10px'}}>Aug 22, 2019 </h4>
          <h2 style={{ marginBottom:'20px'}}><FaCircle style={{color:'#5843D9',fontSize:'12px',marginRight:'4px'}}/>2.456 <div className="gray" style={{marginLeft:'20px', marginTop:'10px'}}> Engagement</div></h2>
          <h2 style={{color:'#64626A', fontSize:'18px'}}><span style={{color:'#FFD246',fontSize:'12px'}}><FaCircle/></span> 1,283 <span className="gray"> Reach</span></h2>
       </div>
      </div>
      </div>
    </>
  );
}
 
export default Home;
