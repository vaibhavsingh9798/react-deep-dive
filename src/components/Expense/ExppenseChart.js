import Chart from "../Chart/Chart";

const ExpenseChart = (props) =>{

    const chartdataPoints = [
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'Maar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'Jun',value:0},
        {label:'Jul',value:0},
        {label:'Aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0},
    ]
  for(let expense of props.expenses){
    console.log(expense.date, typeof expense.date)
    let date = new Date(expense.date)
   const month = date.getMonth();
   chartdataPoints[month].value += +expense.price
  }
    return(
        <> 
        <Chart dataPoints={chartdataPoints}/>
        </>
    )
}

export default ExpenseChart;