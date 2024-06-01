import {  createContext, useState } from "react";

export const GlobalContext=createContext<any>(null)

export default function GlobalContextWrapper({children}:any){
    const [allTransactions,setAllTransactions]=useState([{
        type:"income",
        desc:"",
        ammount:0
    }])
     const [totalIncome,setTotalIncome]=useState<number>(0)
     const [totalExpense,setTotalExpense]=useState<number>(0)
return(
    <GlobalContext.Provider value={{allTransactions,setAllTransactions,totalIncome,setTotalIncome,totalExpense,setTotalExpense}}>{children}</GlobalContext.Provider>
)
}