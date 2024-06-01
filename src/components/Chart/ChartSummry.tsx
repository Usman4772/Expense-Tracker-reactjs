import Chart from "react-apexcharts"
const options={
  labels:["Expense","Income"],
  colors:["red","blue"],
  chart:{
    width:"80px"
  },
fill:{
  colors:["red","blue"]
}

}
function ChartSummry({expense=0,income=100}) {
  return (
      <Chart options={options} series={[expense,income]} type="pie" width={'100%'} className=" w-screen md:w-[300px] flex items-center justify-center"/>
  )
}

export default ChartSummry