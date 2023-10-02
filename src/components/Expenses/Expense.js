import {useState} from 'react';
import './Expense.css'
import Card from '../UI/Card';
const Expense = (props) => { 
  const [items,setItems] =  useState(props.items)
  const months = ["January","February","March","April","May","June","July", "August",  "September", "October",  "November", "December" ];
  const handleDelete = (e) =>{
    console.log('click',e.target)
    let itemIndex = +(e.target.id);
    console.log(items.length,itemIndex)
   let  newItems  = items.filter((item,index) => index !== itemIndex)
   setItems(newItems)
  }
   return(
    <>
      <div className="expenses-container">
       <Card>
      <h1>Expense List</h1>
      </Card>
      <ul className="expenses-list">
        {items.map((expense, index) => (
          <li key={index} className="expense-item">
            <div className="expense-name">{expense.name}</div>
            <div className="expense-date">{months[expense.date]}</div>
            <div className="expense-amount">{expense.price}</div>
            <button id={index} onClick={handleDelete}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
   
  </>
   )
}

export default Expense ;