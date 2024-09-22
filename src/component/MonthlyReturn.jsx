import React, { useState } from 'react'
import { Slider } from 'antd';
import '../style/MonthlyReturn.css'

const MonthlyReturn = () => {
    const [value, setValue] = useState(100);
    const [investMoney, setInvestMoney] = useState(100);
    const [totalReturn, setTotalReturn] = useState(investMoney);


  return (
    <>
    <div className="feture-monthly-return">
      <div>
        <div className="feture-monthly-return-title">Montly Investment</div>
        <div>
          <div>₹</div>
          <input type="Number" value={investMoney} onChange={(e) => setInvestMoney(e.target.value)}/>
        </div>
      </div>
      <Slider autoFocus={true} min={100} value={investMoney} max={10000} onChange={(value)=> {setValue(value), setInvestMoney(value)}} className='amount-slider'/>

      <div>
        <div className="feture-monthly-return-title">Montly Return</div>
        <div>
          <div>₹</div>
          <div>{investMoney*0.1}</div>
        </div>
      </div>
          <button className='invest-now-button'>invest Now</button>
    </div>
    </>
  )
}

export default MonthlyReturn
