import Balance from "./Balance";
import UserData from "./UserData";
import Transaction from "./Transaction";
import Form from "./Form";
import { useState } from "react";

function App() {

  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const [expenses, setExpenses] = useState([])
  const [incomes, setIncomes] = useState([])
  const [transactions, setTransactions] = useState([])



  /*const checkAmountValue =()=>{

    if(amount.includes('+')){
      let newAmount = amount.replaceAll('+', "")
      setIncome(newAmount)
      setAmount('')
      setTransactions([...transactions, {text, price:newAmount}])


    }else if (amount.includes('-')){
      let newAmount = amount.replaceAll('-', "")
      setExpense(newAmount)
      setAmount('')
      setTransactions([...transactions, {text, price:newAmount, id: new Date().getMilliseconds().toString()}])


    }
  }*/

  const handleSubmitButton=()=>{
    if(text && amount){
      setTransactions([...transactions, {text, amount,id: new Date().getMilliseconds().toString()}])
      if (amount>0){
        setIncomes([...incomes, amount])
      }else if(amount <0){
        setExpenses([...expenses, amount])

      }
    }

  }

  // l'idée pour demain, first fix that income thing and create a array for the history then map through it, then add more functionality to the form


  return (
    <div className="App">

      <h1>Expense Tracker</h1>

      <div className="container">
        <Balance  transactions={transactions} />
        <UserData  
        expenses={expenses}
        incomes={incomes}
        />
        {transactions.length>0?(
          <div className="history">
            <h2 className="history-title">History</h2>
            {transactions.map((transaction)=>{
              const {text,  amount, id} = transaction;
              return <Transaction key={id} text={text} transaction={transaction} />
            })}
          </div>
        ):('')}
        
        <div className="adding-transactions">
          <h2 className="adding-transaction-title">Add a new transaction</h2>
          <Form 
          text={text}
          setText={setText}
          amount={amount}
          setAmount={setAmount}
          handleSubmitButton={handleSubmitButton}
          />

        </div>
      </div>
      
    </div>
  );
}

export default App;
