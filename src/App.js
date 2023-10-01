
import './App.css';
import Expense from './components/Expense';
 
function App() {
  let items = [{name:"Food",price:200},{name:"Movie",price:300},{name:"Petrol",price:400}]
  return (
   <>
   <Expense items={items}/>
   </>
  );
}

export default App;
