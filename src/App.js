
import ExpenseItem from './components/ExpenseItem.js';
import './App.css';
function App(){
  let  expennse=[
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
  ]
    return ( 
        <div>
          <div className='heading'><h2>Track Your Monthly Expense Item Detial</h2></div>
            <ExpenseItem 
            date={expennse[0].date} 
            title={expennse[0].title} 
            amount={expennse[0].amount}>
            </ExpenseItem>
            <ExpenseItem 
            date={expennse[1].date} 
            title={expennse[1].title} 
            amount={expennse[1].amount}>
            </ExpenseItem>
            <ExpenseItem 
            date={expennse[2].date} 
            title={expennse[2].title} 
            amount={expennse[2].amount}>
            </ExpenseItem>
            <ExpenseItem 
            date={expennse[3].date} 
            title={expennse[3].title} 
            amount={expennse[3].amount}>
            </ExpenseItem>
           
           
        </div>

    )
}
export default App;