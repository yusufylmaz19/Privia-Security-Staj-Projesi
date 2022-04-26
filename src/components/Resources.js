import React from 'react'
import '../css/Resources.css'
import Header from './Header'
import resSearch from'../svg/resSearch.svg'
import resFile from'../svg/resFile.svg'
import resFolder from'../svg/resFolder.svg'
import resWranch from'../svg/resWranch.svg'
import resImg from'../svg/resImg.svg'
import resImg1 from'../svg/resImg1.svg'
import resImg2 from'../svg/resImg2.svg'
import resImg3 from'../svg/resImg3.svg'
import resImg4 from'../svg/resImg4.svg'
import { GoChevronRight } from 'react-icons/go'


function Resources() {
  return (
    <>
    <div className='resourcesContainer'>    
    <Header/>
    <div className='resourcesContent'>
       <div className='resourcesTitle'>
        <h1>Resources to help you grow as a creative entrepreneur.</h1>
       </div>
        <div className='resourcesSearch'>
        <img src={resSearch} />
        <p>Search Articles...</p>
        </div>
    </div>
    <div className='resourcesContent1'>
      <div className='resourcesContentBox1'>
        <div className='box1Box'>
          <div className='boxTitle'>
            <img src={resFile}></img>
            <h2>Articles</h2>
          </div>
          <p>Our best tips for launching and growing your creative business online.</p>
          <div className="a resourceA">
                  <a className="learn-more">Learn more</a>
                  <span className="learn-more-icon">
                    {" "}
                    <GoChevronRight />
                  </span>
          </div>
        </div>
        <div className='box1Box'>
        <div className='boxTitle'>
            <img src={resFolder}></img>
            <h2>Guides</h2>
          </div>
          <p>Everything you need to know to create your online course or membership.</p>
          <div className="a resourceA">
                  <a className="learn-more">Learn more</a>
                  <span className="learn-more-icon">
                    {" "}
                    <GoChevronRight />
                  </span>
          </div>
        </div>
        <div className='box1Box'>
        <div className='boxTitle'>
            <img src={resWranch}></img>
            <h2>Tools</h2>
          </div>
          <p>Take the hassle out of creating & selling with our free content generators.</p>
          <div className="a resourceA">
                  <a className="learn-more">Learn more</a>
                  <span className="learn-more-icon">
                    {" "}
                    <GoChevronRight />
                  </span>
          </div>
        </div>
      </div>
      <div className='resourcesContentBox2'>
        <div className='box2Title'> <h1>Most insighful articles 
              for start off</h1></div>
            <div>
              <div className='box2Box'>
                <div className='articleBox'>
                <img src={resImg}></img>
                <div className='articleText'>
                  <h2 style={{marginBottom:'10px'}}>Brand Secrets for Standing Out in a Crowded World</h2>
                  <p style={{lineHeight:'1.8' ,color:'#64626A',fontWeight:'400'}}>Aliquam ut justo fringilla, porta lectus ac, aliquam elit. Sed posuere mi vel porta aliquam. Nullam in felis pretium, faucibus nunc quis, semper purus.  Aliquam sit…</p>
                  <p style={{marginTop:'25px',color:'#8E8C95',fontWeight:'700'}}>24 May 2020  -  Entrepreneurship</p>
                </div>
                </div>
                <div className='articleBox'>
                <img src={resImg1}></img>
                <div className='articleText'>
                  <h2 style={{marginBottom:'10px'}}>Why social commerce will rule social media in 2020</h2>
                  <p style={{lineHeight:'1.8' ,color:'#64626A',fontWeight:'400'}}>Aliquam ut justo fringilla, porta lectus ac, aliquam elit. Sed posuere mi vel porta aliquam. Nullam in felis pretium, faucibus nunc quis, semper purus.  Aliquam sit…</p>
                  <p style={{marginTop:'25px',color:'#8E8C95',fontWeight:'700'}}>24 May 2020  -  Entrepreneurship</p>
                </div>
                </div>
                <div className='articleBox'>
                <img src={resImg2}></img>
                <div className='articleText'>
                  <h2 style={{marginBottom:'10px'}}>13 Newsletters You’ll Want in Your Inbox in 2020</h2>
                  <p style={{lineHeight:'1.8' ,color:'#64626A',fontWeight:'400'}}>Aliquam ut justo fringilla, porta lectus ac, aliquam elit. Sed posuere mi vel porta aliquam. Nullam in felis pretium, faucibus nunc quis, semper purus.  Aliquam sit…</p>
                  <p style={{marginTop:'25px',color:'#8E8C95',fontWeight:'700'}}>24 May 2020  -  Entrepreneurship</p>
                </div>
                </div>
                <div className='articleBox'>
                <img src={resImg3}></img>
                <div className='articleText'>
                  <h2 style={{marginBottom:'10px'}}>Brand Secrets for Standing Out in a Crowded World</h2>
                  <p style={{lineHeight:'1.8' ,color:'#64626A',fontWeight:'400'}}>Aliquam ut justo fringilla, porta lectus ac, aliquam elit. Sed posuere mi vel porta aliquam. Nullam in felis pretium, faucibus nunc quis, semper purus.  Aliquam sit…</p>
                  <p style={{marginTop:'25px',color:'#8E8C95',fontWeight:'700'}}>24 May 2020  -  Entrepreneurship</p>
                </div>
                </div>
                <div className='articleBox'>
                <img src={resImg4}></img>
                <div className='articleText'>
                  <h2 style={{marginBottom:'10px'}}>The new economy belongs to creators</h2>
                  <p style={{lineHeight:'1.8' ,color:'#64626A',fontWeight:'400'}}>Aliquam ut justo fringilla, porta lectus ac, aliquam elit. Sed posuere mi vel porta aliquam. Nullam in felis pretium, faucibus nunc quis, semper purus.  Aliquam sit…</p>
                  <p style={{marginTop:'25px',color:'#8E8C95',fontWeight:'700'}}>24 May 2020  -  Entrepreneurship</p>
                </div>
                </div>
              </div>
            </div>
       
      </div>
      <div className="a seeMore">
                  <a className="learn-more">see more aricles</a>
                  <span className="learn-more-icon">
                    {" "}
                    <GoChevronRight />
                  </span>
            </div>
    </div>
    </div>
    </>
  )
}

export default Resources