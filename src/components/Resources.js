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
        <div className='box1Box'></div>
        <div className='box1Box'></div>
        <div className='box1Box'></div>
      </div>
      <div className='resourcesContentBox2'></div>
    </div>
    </div>
    </>
  )
}

export default Resources