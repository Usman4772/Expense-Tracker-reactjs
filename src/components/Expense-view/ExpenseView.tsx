function ExpenseView({type,data}:{type:string,data:Array<Object>}) {
  return (
    <div className="w-[40vw] h-max">
    <h1 className={type=="expense"?"text-red-600  w-full flex items-center justify-center font-semibold" :"text-green-500 w-full flex items-center justify-center font-semibold"}>{type}</h1>
<div className=" w-full flex flex-col gap-4">
{data && data.length>0?data.map((item:any,i:number)=>{
  return <div className="w-full h-[5vh] flex items-center justify-center md:justify-between px-4 rounded-lg py-6 font-semibold text-black flex-col md:flex-row" key={i} style={{background:type=="income"?"#01ff3849":"#ff010149"}}>
    <h2 className="text-[10px] md:text-md">{item.desc}</h2>
    <h2 className="text-[12px] md:text-md">{item.ammount}</h2>
  </div>
}):null}
</div>
    </div>
  )
}

export default ExpenseView