import React from 'react'

function UserData({incomes, expenses}) {
  let income=incomes.reduce(function(accumulator, currentValue) {
    return parseFloat(accumulator) + parseFloat(currentValue);
  }, 0);
  let expense=expenses.reduce(function(accumulator, currentValue) {
    return parseFloat(accumulator) + parseFloat(currentValue);
  }, 0);
  return (
    <div className="user-expenses-data">
        <div className="income-div">
            <div className="income-title">INCOME</div>
            <div className="income">${income}.00</div>
        </div>
        <div className="expenses-div">
            <div className="expenses-title">EXPENSE</div>
            <div className="expenses">${expense}.00</div> 
        </div>
    </div>
  )
}

export default UserData