import '../css/Footer.css';
import React from 'react';
import facebook from '../svg/Facebook.svg';
import twitter from '../svg/Twitter.svg';
import linkedin from '../svg/Linkedin.svg';

function Footer() {
  
  return (
    <>
    <footer>
    <div className='footerUpLine'></div>
    {/* burada footerdaki titları stil tarfında display:flex; kullanarak yatayda hizalamk için 5 farklı div yaptıım. */}
      <div className='footerContainer'>
      <div className='foooterPart1'>
      <div className='footerLogos'>
        <img src={twitter}/>
        <img src={facebook}/>
        <img src={linkedin} />
      </div>
      <p>&copy; 2019 Oval</p>
      </div>
      <div className='foooterPart2'>
      <h3 className='boldTitle'>Product</h3>
      <h3> Landingpage</h3>
      <h3> Features</h3>
      <h3> Documentation</h3>
      <h3> Referral Program</h3>
      <h3> Pricing</h3>
      </div>
      <div className='foooterPart3'>
      <h3 className='boldTitle'>Services</h3>
      <h3> Documentation</h3>
      <h3> Design</h3>
      <h3> Themes</h3>
      <h3> Illustraitons</h3>
      <h3> UI Kit</h3>
      </div>
      <div className='foooterPart4'>
      <h3 className='boldTitle'>Company</h3>
      <h3> About</h3>
      <h3> Terms</h3>
      <h3> Privacy Policy</h3>
      <h3> Careers</h3>
      </div>
      <div className='foooterPart5'>
      <h3 className='boldTitle'>More</h3>
      <h3> Documentation</h3>
      <h3> License</h3>
      <h3> Changelog</h3>
      </div>
      </div>
    </footer> 
    </>
    );
}

export default Footer;
