import React from "react";
import { useState } from "react";
const Button = ({name})=>{
  const [color , setcolor] = useState(false);

  return(
    <div>
    <button  onClick={()=>setcolor(!color)}  className={`m-1 p-1 px-3 rounded-xl flex items-center whitespace-nowrap ${
        color ? "bg-white text-black" : "bg-gray-300"
      }`}>{name}</button>
    </div>
  )
}
export default Button;