const ShowExpense = (props) => {
  console.log("pro", props);
  return (
    <>
      <div>
        {props.items.map((item, ind) => (
          <h3 key={Math.random()}>
            Title: {item.title} Price: {item.price} Date:{item.date}
          </h3>
        ))}
        
      </div>
    </>
  );
};

export default ShowExpense;
