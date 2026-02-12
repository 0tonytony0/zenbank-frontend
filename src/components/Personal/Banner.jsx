
import React from "react";
import './banner.css'
import BannerImg from '../../assets/mobile-1-image.png'

const Banner = (HeadingBanner) => {

  return (
    <>
      <div className="personalbox">
        <div className="titlBox">
<h1 style={{ marginLeft: '8%' }}>{HeadingBanner.Name}</h1>
        </div>
        <div className="mainImgBox">
          <img src={BannerImg} alt="" className="mainMobileimg" />
        </div>
      </div>


    </>
  );
}

export default Banner; 