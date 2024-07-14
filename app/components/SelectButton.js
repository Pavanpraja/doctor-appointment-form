"use client"

import Image from "next/image";
import { useState } from "react"

const SelectButton = ({first, second}) => {
  const [selectval, setSelectVal] = useState('SELECT')
  const [toggle, setToggle] = useState(false);
  const [toggleicon, setToggleIcon] = useState('https://img.icons8.com/ios/50/circled-chevron-up.png')

  const handleToggle = () =>{
    setToggle(prev=>!prev);
    setToggleIcon(toggle === true ? "https://img.icons8.com/windows/32/circled-chevron-down.png" : "https://img.icons8.com/ios/50/circled-chevron-up.png" )
  }

  return (
    <div>
       <div>
        <div value={selectval} onClick={handleToggle} className="cursor-pointer flex gap-[0.5rem] border-[0.1rem] border-black rounded-lg p-[0.1rem]">{selectval} <Image width={22} height={20} src={toggleicon} alt="" /></div>
        {
          toggle && <div className="cursor-pointer absolute border-[0.1rem] border-black rounded-lg mt-[0.3rem] transition-[3s]">
        <div onClick={()=>setSelectVal(first) || setToggle(false)} className="p-[0.2rem] m-0 box-content rounded-lg hover:bg-[#a56a72]">{first}</div>
        <div onClick={()=>setSelectVal(second) || setToggle(false)} className="p-[0.2rem] m-0 box-content rounded-lg hover:bg-[#54d6bc]">{second}</div>
        </div>
        }
       </div>
    </div>
  )
}

export default SelectButton
