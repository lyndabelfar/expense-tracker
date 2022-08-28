import React, { useState } from 'react'

function Form({text, setText, amount, setAmount, handleSubmitButton}) {
    const [emptyText, setEmptyText] = useState(false)
    const [emptyAmount, setEmptyAmount] = useState(false)


    const handleFormSubmit =(e)=>{
        e.preventDefault();
        if(text===''){
            setEmptyText(true)
        }else if (text){
            setEmptyText(false)
        }
        if(amount===''){
            setEmptyAmount(true)
        }else if (amount){
            setEmptyAmount(false)
        }

        setText('')
        setAmount(0)
    }
    const handleTextInputChange=(e)=>{
        setText(e.target.value)
    }
    const handleAmountInputChange=(e)=>{
        setAmount(e.target.value)
    }
  return (
    <form onSubmit={handleFormSubmit} >
        <label>Text</label>
        <input 
        type="text" 
        className={`text-input ${emptyText?'error':''}`} 
        placeholder="Enter text..." 
        value={text} 
        onChange={handleTextInputChange} 
        />
        {emptyText?<span>Can't be empty</span>:""}
        <label >Amount<br/>(negative-expense, positive+income)</label>            
        <input 
        type="number"
        className={`amount-input ${emptyAmount?'error':''}`} 
        placeholder="Enter amount..." 
        value={amount} 
        onChange={handleAmountInputChange} 
        />
        {emptyAmount?<span>Can't be empty</span>:""}
        <button type="submit" className="add-transaction-btn" onClick={handleSubmitButton}>Add transaction</button>

    </form>
  )
}

export default Form