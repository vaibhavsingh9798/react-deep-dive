
import './App.css';
import Expense from './components/Expense';
 
function App() {
  let items = [{name:"Food",price:200,date: new Date().getMonth()},{name:"Movie",price:300,date:new Date().getMonth()},{name:"Petrol",price:400,date: new Date().getMonth()}]
  return (
   <>
   <Expense items={items}/>
   </>
  );
}

export default App;
