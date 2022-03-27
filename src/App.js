import React,{useState}from 'react';
import Expenses from './components/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense.js';
let  DUMMY_EXPENSE=[
  { 
      id:"e1",
    title:'School fee',
    amount:250,
    date: new Date(2022, 3, 14)

  },
  { 
    id:"e2",
  title:'Books',
  amount:230,
  date: new Date(2022, 3, 15)

},
  { 
    id:"e3",
  title:'House Rent',
  amount:700,
  date: new Date(2022, 3, 15)

},
  { 
    id:"e4",
  title:'Food',
  amount:540,
  date: new Date(2022, 3, 16)

}
];

const  App=()=>{

  const[expenses,setExpenses]=useState( DUMMY_EXPENSE)
   const addExpenseHandler=(expense)=>{
     const updatedExpense=[expense,...expenses]
     setExpenses(updatedExpense);
   }

    return ( 
        <div>
          <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses item={expenses}/>
        </div>

    )
}
export default App;