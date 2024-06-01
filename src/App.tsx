import { Button } from "antd"
import Summry from "./components/Summry/Summry"
import ChartSummry from "./components/Chart/ChartSummry"
import ExpenseView from "./components/Expense-view/ExpenseView"
import Model from "./components/Model/Model"
import { useContext, useState } from "react"
import { GlobalContext } from "./context"
function App() {
  const [openModel, setOpenModel] = useState<any>(false);
  const {totalExpense,totalIncome,allTransactions}=useContext(GlobalContext)
  return (
    <div className="w-screen min-h-screen flex flex-col gap-8">
<div className="w-screen flex items-center justify-between p-4">
<h1 className="text-3xl font-bold text-blue-600 font-sans">Expense Tracker</h1>
  <Button className="px-4 py-1 bg-blue-500 text-white font-semibold" onClick={()=>setOpenModel(true)}>Add new transaction</Button>
  <Model openModel={openModel} setOpenModel={setOpenModel}/>
</div>
<div className="w-screen flex justify-between items-center px-24 flex-col md:flex-row h-max  py-24 md:py-0">
  <Summry/>
  <ChartSummry income={totalIncome} expense={totalExpense}/>
</div>
<div className="w-screen flex items-center justify-between px-8">
<ExpenseView type="expense" data={allTransactions.filter((item:any)=>item.type=="expense" && item.desc!=="")}/>
<ExpenseView type="income" data={allTransactions.filter((item:any)=>item.type=="income" && item.desc!=="")}/>
</div>
    </div>
  )
}

export default App