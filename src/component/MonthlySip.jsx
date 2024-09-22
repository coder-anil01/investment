import React, { useEffect, useState } from 'react';
import { Slider } from 'antd';
import '../style/MonthlyReturn.css';

const MonthlySip = () => {

    const [investMoney, setInvestMoney] = useState(100);
    const [time, setTime] = useState(1);
    const [totalReturn, setTotalReturn] = useState(0);
    const [profit, setProfit] = useState(0);

    const calcluteAmount = () => {
      let element = 0;
        for (let i = 0; i < time; i++) {
          element = (element+investMoney)*1.1;
          console.log(element + " " + i + " " + investMoney);
        }
        element = element.toFixed(2);
        setTotalReturn(element);

        let profit = (element-(investMoney*time)).toFixed(2);
        setProfit(profit)
    }
    
    useEffect(()=>{
      calcluteAmount();
    },[investMoney, time])

  return (
    <>
    <div className="feture-monthly-return">
      <div>
        <div className="feture-monthly-return-title">Montly Investment Amount</div>
        <div>
          <div>₹</div>
          <input type="Number" value={investMoney} onChange={(e) => setInvestMoney(e.target.value)}/>
        </div>
      </div>
      <Slider min={100} value={investMoney} max={10000} onChange={(value)=> setInvestMoney(value)} className='amount-slider'/>

{/* year */}
      <div>
        <div className="feture-monthly-return-title">Time Period</div>
        <div>
          <div>Years</div>
          <input type="Number" value={time} onChange={(e) => setTime(e.target.value)}/>
        </div>
      </div>
      <Slider autoFocus={true} min={1} value={time} max={50} onChange={(value)=>  setTime(value)} className='amount-slider'/>


      <div>
        <div className="feture-monthly-return-title">Invested Amount</div>
        <div>
          <div>₹</div> <div>{investMoney*time}</div>
        </div>
      </div>
      
      <div>
        <div className="feture-monthly-return-title">Profit Amount</div>
        <div>
          <div>₹</div> <div>{profit}</div>
        </div>
      </div>

      <div>
        <div className="feture-monthly-return-title">Total Amount</div>
        <div>
          <div>₹</div> <div>{totalReturn}</div>
        </div>
      </div>
          <button className='invest-now-button'>invest Now</button>
    </div>
    </>
  )
}

export default MonthlySip
