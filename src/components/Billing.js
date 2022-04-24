import '../css/Billing.css';
import React from 'react';
import pathLogo from '../images/Path 9.svg';
import { FaCheck } from 'react-icons/fa';

function Billing() {
 
  function toggleBtn(e) {
        e.preventDefault();
        const buttonEl = document.querySelector(".buttonBack");
        buttonEl.addEventListener("click", function () {
            const ball = document.querySelector(".buttonBall");
            ball.classList.toggle("moveBall");
        });
      }

  return (
      <div className="billingContainer">
          <h1 className='billingTitle'>Choose the plan that’s right for your business</h1>
          <p>30-day free trial, cancel any time. No credit card required.</p>
          <div className='buttonAndInfo'><p style={{color:'#64626A', fontWeight:'700'}}>Billy Month</p>
          <div className='buttonBack' onClick={toggleBtn} ><div className='buttonBall'></div></div> 
          <p style={{color:'#64626A', fontWeight:'700',marginLeft:'20px'}}>Billy Month</p>
          <p style={{color:'#5B45E0', fontWeight:'700' ,marginLeft:'10px'}}>Save 15%</p>
          <img className='billLine' src={pathLogo}></img>
          </div>
          <div className='billingBox'>
            <div className='billingBox1'>
                <div className='boxTitle'>
                <div className="price" style={{color:'#EDB300' }}>$23</div>
                <div className='perMonth' style={{color:'#64626A'}}>/month</div> 
                </div>
                <h2 style={{marginLeft:'25px',color:'#64626A'}}>Standart</h2>
                <p style={{color:'#64626A', textAlign:'left',marginTop:'10px',marginLeft:'25px' ,lineHeight:'1.4'}}>All the basics for businesses that are just getting started.</p>
                <div className='simpleLine'></div>
                <div className='billyChecks'>
                <div className="billyCheck">
                <FaCheck style={{color:'#38AC79'}}/>
                <h3>Unlimited project use</h3>
                </div>  
                <div className="billyCheck">
                <FaCheck style={{color:'#38AC79'}}/>
                <h3>Advanced dashboard</h3>
                </div>
                <div className="billyCheck">
                <FaCheck style={{color:'#38AC79'}}/>
                <h3>All components included</h3>
                </div> 
                </div>
                <button className='billyButton'>
                 Star Free Trail
                </button>
            </div>
            <div className='billingBox2'>
            <div className='boxTitle'>
                <div className="price" style={{color:'#49A4FF'}}>$99</div>
                <div className='perMonth' style={{color:'#64626A'}}>/month</div> 
                </div>
                <h2 style={{marginLeft:'25px' ,color:'#64626A'}}>Essentials</h2>
                <p style={{color:'#64626A', textAlign:'left',marginTop:'10px',marginLeft:'25px' ,lineHeight:'1.4'}}>All the basics for businesses that are just getting started.</p>
                <div className='simpleLine'></div>
                <div className='billyChecks'>
                <div className="billyCheck">
                <FaCheck style={{color:'#38AC79'}}/>
                <h3>Unlimited project use</h3>
                </div>  
                <div className="billyCheck">
                <FaCheck style={{color:'#38AC79'}}/>
                <h3>Advanced dashboard</h3>
                </div>
                <div className="billyCheck">
                <FaCheck style={{color:'#38AC79'}}/>
                <h3>All components included</h3>
                </div> 
                <div className="billyCheck">
                <FaCheck style={{color:'#38AC79'}}/>
                <h3>Advanced insight</h3>
                </div> 
                </div> 
                <button className='billyButton'>
                 Star Free Trail
                </button>
            </div>
            <div className='billingBox3'>
            <div className='boxTitle'>
                <div className="price" style={{color:'#fff'}}>$139</div>
                <div className='perMonth'style={{color:'#fff'}} >/month</div> 
                </div>
                <h2 style={{marginLeft:'25px' ,color:'#fff'}}>Premium</h2>
                <p style={{color:'#fff', textAlign:'left',marginTop:'10px',marginLeft:'25px' ,lineHeight:'1.4'}}>All the basics for businesses that are just getting started.</p>
                <div style={{backgroundColor: '#E8E7E8'}} className='simpleLine'></div>
                <div style={{color: '#fff'}} className='billyChecks'>
                <div className="billyCheck">
                <FaCheck style={{color:'#38AC79'}}/>
                <h3>Unlimited project use</h3>
                </div>  
                <div className="billyCheck">
                <FaCheck style={{color:'#38AC79'}}/>
                <h3>Advanced dashboard</h3>
                </div>
                <div className="billyCheck">
                <FaCheck style={{color:'#38AC79'}}/>
                <h3>All components included</h3>
                </div> 
                <div className="billyCheck">
                <FaCheck style={{color:'#38AC79'}}/>
                <h3>Advanced insight</h3>
                </div> 
                </div> 
                <button className='billyButton'>
                 Star Free Trail
                </button>
            </div>
          </div>

      </div>
    );
}

export default Billing;
