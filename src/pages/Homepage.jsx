import React, { useState } from 'react'
import '../style/Homepage.css'
import MonthlyReturn from '../component/MonthlyReturn';
import MonthlySip from '../component/MonthlySip';
import OneTimeInvest from '../component/OneTimeInvest';
const Homepage = () => {

  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    };

  return (
    <>
     <div className="homepage">
      {/* top */}
      <div className="homepage-top">
        <div className="homepage-top-left">
          <h1>Guaranteed <span>10%</span> Monthly return</h1>
          <div>Starting investment from 99 Rupees</div>
          <button className='invest-now-button'>invest Now</button>
        </div>
        <img src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1726413114/investment/1_spuyo1.png" alt="" className="homepage-bull-image" />
      </div>

      {/* Fetures */}
      <div className="homepage-fetures">
        <div className="fetures-img">
          <img src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1726413006/investment/4_rrgftq.svg" alt="" />
        </div>
        <h1>Key Trading Features for Success</h1>

        
        <div className="button-group">
          <div className="button-group-card">

            <button
              className={`button ${selectedButton === 1 ? 'selected' : ''}`}
              onClick={() => handleClick(1)}>
              monthly Return
            </button>

            <button
              className={`button ${selectedButton === 2 ? 'selected' : ''}`}
              onClick={() => handleClick(2)}>
              monthly Sip
            </button>

            <button
              className={`button ${selectedButton === 3 ? 'selected' : ''}`}
              onClick={() => handleClick(3)}>
              One Time Invest
            </button>
          </div>
        </div>
        <div className="homepage-fetures-card">
          {/* <MonthlyReturn/> */}
          <MonthlySip/>
          {/* <OneTimeInvest/> */}
        </div>
      </div>
      </div> 
    </>
  )
}

export default Homepage
