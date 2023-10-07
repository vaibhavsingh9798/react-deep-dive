import { useState } from "react";
import AddExpense from "./components/Expense/AddExpense";
import "./components/Expense/Expense.css"


export default function App() {
  const [show,setShow] = useState(false)
  return (
    <div className="expenses-container">
      <h1>Expenses</h1>
    { !show && <button onClick={() => setShow(true)}>Add Expense</button> }
      <AddExpense show={show}/>
    </div>
  );
}
