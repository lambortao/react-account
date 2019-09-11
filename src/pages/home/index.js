import React, { useState, useEffect } from 'react';
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

// 单条账单
function SingleBill(props) {
  return (
    <div className='single-bill'>
      <span className="head"></span>
      <div className="classify">{props.classify}</div>
      <div className="how-money">{props.howMoney}</div>
    </div>
  )
}

// 主页面
function Home () {
  const [monthPlan, setMonthPlan] = useState(10000);
  const [monthCost, setMouthCost] = useState(1600);
  const [monthFixed, setMonthFixed] = useState(3000);
  const [billArr, setBill] = useState([
    {
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },
    {
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    },{
      who: 1,
      classify: '测试',
      howMoney: 300.5
    }
  ])

  return (
    <div className='home'>
      <div className="plan-list">
        <Plan
          monthPlan={monthPlan}
          monthCost={monthCost}
          monthFixed={monthFixed}
        ></Plan>
      </div>
      <div className="bill-box">
        <div className="bill-title">
          <div className="date">2019-09-11</div>
          <div className="inall-cost">当日支出: <span>60</span></div>
        </div>
        <div className="bill-list">
          {
            billArr.map((item, index) => 
              <SingleBill
                key={index}
                classify={item.classify}
                howMoney={item.howMoney}
              ></SingleBill>
            )
          }
        </div>
      </div>
      <div className="add"></div>
    </div>
  )
}

export default Home;