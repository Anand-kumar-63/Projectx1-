import React from "react";

const Button = ({name})=>{
  return(
    <div>
    <button className="bg-gray-300 m-1 px-4 rounded-md whitespace-nowrap">{name}</button>
    </div>
  )
}
export default Button;