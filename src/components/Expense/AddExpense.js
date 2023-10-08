import { useState } from "react";
import ShowExpense from "./ShowExpense";
import ExpenseChart from "./ExppenseChart";


const AddExpense = (props) => {
  const [data, setData] = useState({ title: "", price: 0, date: 0 });
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [selectd, setSelectd] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setItems([...items, data]);
    setFilterItems([...filterItems, data]);
    console.log(items);
    setData({ title: "", price: 0 });
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log({ [name]: value });
  };
  const handleFilter = (e) => {
    let filDate = e.target.value;
    let newItems = items.filter((item) => item.date >= filDate);
    setFilterItems(newItems);
    setSelectd(filDate);
    console.log("fil", filDate, filterItems);
  };

  return (
    <>
      <div>
   { props.show   &&   <form onSubmit={handleSubmit}>
          <label>Title: </label>
          <input
            type="text"
            value={data.title}
            name="title"
            onChange={(e) => handleChange(e)}
          />{" "}
          <br /> <br />
          <label>Price: </label>
          <input
            type="number"
            value={data.price}
            name="price"
            onChange={(e) => handleChange(e)}
          />{" "}
          <br /> <br />
          <label>Date: </label>
          <input
            type="date"
            name="date"
            value={data.date}
            onChange={(e) => handleChange(e)}
          />
          <br /> <br />
          <button type="submit">Submit</button>
        </form> }
        <div>
          <br />
          <p>Filter By Price</p>
          <select value={selectd} onChange={handleFilter}>
            <option value={"2023-10-06"}>2023-10-06</option>
            <option value={"2023-11-06"}>2023-11-06</option>
            <option value={"2023-12-06"}>2023-12-06</option>
            <option value={"2024-01-06"}>2024-1-06</option>
          </select>
        </div>
        {items.length == 0 && <h3>Expense not found!</h3>}
        <ExpenseChart expenses={filterItems} />
        {items.length > 0 && <ShowExpense items={filterItems} />}
      </div>
    </>
  );
};

export default AddExpense;
