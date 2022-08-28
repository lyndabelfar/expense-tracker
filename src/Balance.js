import React from 'react'

function Balance({income, expense, transactions}) {
  let amounts = transactions.map(transaction=>transaction.amount)
  let total = amounts.reduce(function(accumulator, currentValue) {
    return parseFloat(accumulator) + parseFloat(currentValue);
  }, 0);


  return (
    <div className="balance-div">
        <div className="balance-title">YOUR BALANCE</div>
        <div className="balance">${total}</div>
    </div>
)
}

export default Balance