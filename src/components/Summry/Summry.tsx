import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context"

function Summry() {
  const {allTransactions}=useContext(GlobalContext)
  const {totalIncome,setTotalIncome}=useContext(GlobalContext)
  const {totalExpense,setTotalExpense}=useContext(GlobalContext)
  useEffect(()=>{
    let income=0;
    let expense=0;
allTransactions.forEach((transaction:any)=>{
  if(transaction.desc=="" || transaction.ammount==0)return
  let totalBalance=totalIncome-totalExpense
  if(transaction.type=="income" && transaction.ammount!==0){
    income=income+transaction.ammount
  }else{
    if(totalBalance>0 && transaction.ammount!==0){
      expense=expense+transaction.ammount
    }else{
      alert("You don't have enough balance")
    }
  }
})
setTotalIncome(income)
setTotalExpense(expense)
  },[allTransactions])
  return (
    <div className="w-6/12 flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-bold text-black text-center">Balance is <span>${totalIncome-totalExpense}</span></h2>
        <div className="md:w-full h-[5rem] w-[80vw] bg-slate-200 font-semibold   flex items-center justify-center flex-col">
            <h1 className="text-xl font-bold">${totalIncome}</h1>
            <p>Total income</p>
        </div>
        <div  className="md:w-full h-[5rem] bg-slate-200 font-semibold  flex items-center justify-center flex-col w-[80vw]">
            <h1 className="font-bold text-xl">${totalExpense}</h1>
            <p>Total Expense</p>
        </div>

    </div>
  )
}

export default Summry