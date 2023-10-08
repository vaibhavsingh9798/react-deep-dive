import ChartBar from "./ChartBar";

const Chart = props =>{

       const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value)
       const maxValue = Math.max(...dataPointValue)

    return(
        <>
       { props.dataPoints.map(dataPoint => (
        <ChartBar
         key={dataPoint.label}
         value={dataPoint.value}
         maxValue={maxValue}
         label={dataPoint.label}
         />
        
       )) }
        </>
    )
}

export default Chart;