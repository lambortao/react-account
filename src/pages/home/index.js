import React, { useState } from 'react';
import Progress from '../../components/progress'
import './index.scss';

// 顶部的进度条
function Plan(props) {
  const inAllCost = props.monthCost + props.monthFixed;

  return(
    <div className='plan'>
      <p className='plan-title'>月额度：{ props.monthPlan - inAllCost } / { props.monthPlan }</p>
      <Progress 
      fixed={ props.monthFixed }
      agile={ props.monthCost }
      monthPlan={ props.monthPlan }></Progress>
    </div>
  )
}

// 主页面
function Home () {
  const [monthPlan, setMonthPlan] = useState(10000);
  const [monthCost, setMouthCost] = useState(1600);
  const [monthFixed, setMonthFixed] = useState(3000);

  return (
    <div className='home'>
      <div className="plan-list">
        <Plan
          monthPlan={monthPlan}
          monthCost={monthCost}
          monthFixed={monthFixed}
        ></Plan>
      </div>
    </div>
  )
}

export default Home;