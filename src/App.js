
import Expenses from './components/Expenses.js';
function App(){
  let  expenses=[
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
          <div><h1>Let's get started</h1></div>
            <Expenses item={expenses}/>
        </div>

    )
}
export default App;