import './Expense.css'
function Expense(){

    let items = [{name:"Food",price:200},{name:"Movie",price:300},{name:"Petrol",price:400}]
   return(
    <>
       <div className="expenses-container">
      <h1>Expenses List</h1>
      <ul className="expenses-list">
        {items.map((expense, index) => (
          <li key={index} className="expense-item">
            <div className="expense-name">{expense.name}</div>
            <div className="expense-amount">{expense.price}</div>
          </li>
        ))}
      </ul>
    </div>
  </>
   )
}

export default Expense ;