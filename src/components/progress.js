/**
 * fixed: 每个月固定要扣掉的钱
 * agile: 当月的灵活开销
 * monthPlan: 当月总开支
 */

import React from 'react';

function Progress(props) {
  const FixedDom = () => {
    if (props.fixed) {
      const percentCost = props.fixed / props.monthPlan * 100;
      const fixedCostStyle = {
        width: `${percentCost}%`,
        backgroundColor: '#d9534f'
      }
      const centerNumber = percentCost > 8 ? props.fixed : '..';
      return (
        <div 
          className="cost fixed-cost" 
          style={ fixedCostStyle }>
          { centerNumber }
        </div>
      )
    } else {
      return false;
    }
  }
  const AgileDom = () => {
    const percentCost = props.agile / props.monthPlan * 100;
    if (props.agile) {
      const agileCostStyle = {
        width: `${percentCost}%`
      }
      const centerNumber = percentCost > 8 ? props.agile : '..';
      return (
        <div 
          className="cost agile-cost" 
          style={ agileCostStyle }>
          { centerNumber }
        </div>
      )
    } else {
      return false;
    }
  }
  return (
    <div className="progress">
      <FixedDom />
      <AgileDom />
    </div>
  )
}

export default Progress;