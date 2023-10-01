import './Expense.css'
function Expense(props){ 
  const months = ["January","February","March","April","May","June","July", "August",  "September", "October",  "November", "December" ];
   return(
    <>
       <div className="expenses-container">
      <h1>Expense List</h1>
      <ul className="expenses-list">
        {props.items.map((expense, index) => (
          <li key={index} className="expense-item">
            <div className="expense-name">{expense.name}</div>
            <div className="expense-date">{months[expense.date]}</div>
            <div className="expense-amount">{expense.price}</div>
          </li>
        ))}
      </ul>
    </div>
  </>
   )
}

export default Expense ;