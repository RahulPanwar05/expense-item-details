import React,{useState} from "react";

import './ExpenseForm.css'



const ExpenseForm = (props) => {

  const [enteredTitle,setEnteredTitle]=useState("");
  const [enteredAmount,setEnteredAmount]=useState("");
  const [enteredDate,setEnteredDate]=useState("");

  const titleChangeHandler=(event)=>{
    setEnteredTitle(event.target.value);
  }
  const titleAmountHandler=(event)=>{
    setEnteredAmount(event.target.value);
  }
  const titleDateHandler=(event)=>{ 
    setEnteredDate(event.target.value);
  }
  const submitHandler=(event)=>{
      event.preventDefault();

     const  expenseData={
       title:enteredTitle,
       amount:enteredAmount,
       date:new Date(enteredDate)
      }
      props.onSaveExpenseData(expenseData);
      console.log(expenseData)
      setEnteredTitle()
      setEnteredAmount()
      setEnteredDate()
  };
  return (
    <form onSubmit={submitHandler}>
    <div className="new-expens_controls">
      <div className="new-expens_control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
      </div>
      <div className="new-expens_control">
          <label>Amount</label>
          <input type="text" min="0.01" step="0.01" onChange={titleAmountHandler}/>
      </div>
      <div className="new-expens_control">
          <label>Date</label>
          <input type="Date"onChange={titleDateHandler}/>
      </div>
    </div>
    <div className="new-expense_action">
        <button type="submit">Add Expense</button>
    </div>
    </form>
  )
}

export default ExpenseForm
