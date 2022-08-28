import React from 'react'

function Transaction({text, id, transaction}) {
  
  return (
    <div className={`transaction ${transaction.amount<0?'expense-transaction':'income-transaction'}`}>
      <div className="text">{text}</div>
      <div className="amount">{transaction.amount}</div>


    </div>
  )
}

export default Transaction