
  import {  Modal } from 'antd';
  import React, { useContext, useRef, useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { GlobalContext } from '../../context';

interface ModelProps {
  openModel: boolean;
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
}
  const Model: React.FC<ModelProps> = ({openModel,setOpenModel}:any) => {
    const [value, setValue] = useState("");
    const descriptionRef=useRef<HTMLInputElement>(null)
    const ammountRef=useRef<HTMLInputElement>(null)
    const {allTransactions,setAllTransactions}=useContext(GlobalContext)
    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
      };
      function handleSubmit(e:any){
        e.preventDefault()
        setOpenModel(false)
let desc=descriptionRef.current?.value || ""
let ammount=Number(ammountRef.current?.value )
if(desc !=="" && ammount!==0 && value!==""){
    setAllTransactions([...allTransactions,{desc,ammount,type:value}])

}else{
    alert("Please fill all the fields")
    return
}

      }
    return (
      <>
        <Modal
          centered
          open={openModel}
          onOk={(e) => handleSubmit(e)}
          onCancel={() => setOpenModel(false)}
        >
    <form className='flex items-start px-8 justify-center flex-col gap-8' onSubmit={handleSubmit}>
        <label className='font-semibold text-xl text-blue-950'>Enter Description</label>
       <input type='text' placeholder='Enter Description' className='w-full rounded-sm focus:border-none focus:outline-none' ref={descriptionRef}/>
       <label className='font-semibold text-xl text-blue-950'>Enter Ammount</label>
       <input type='number' placeholder='Enter Ammount' className='w-full rounded-sm focus:border-none focus:outline-none' ref={ammountRef}/>
       <Radio.Group onChange={onChange} value={value}>
      <Radio value={"income"} checked={true}>income</Radio>
      <Radio value={"expense"}>expense</Radio>
    </Radio.Group>
       </form>
        </Modal>
      </>
    );
  };
  
  export default Model;