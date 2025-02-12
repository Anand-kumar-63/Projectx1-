import React , {useRef} from "react";
import Button from "./Button";
import { Icon } from "@iconify/react";
const Buttonlist = () => {
  const refelement = useRef(null)
  const scrollslider = (amount)=>{
if(refelement.current){
  refelement.current.scrollBy({ left: amount, behavior: "smooth" });
}}
const slidebtn = ["soccer","football","wwe","Webdev","Appdev","Python","Machin learning","die with a smile","bruno mars", "Soccer", "Football", "WWE", "WebDev", "AppDev",
  "Python", "Machine Learning", "Die With a Smile", "Bruno Mars"]
  return (
    <div className="flex justify-center w-[1300px] bg-gray-200 border-1 text-sm rounded-xl ">
      <button onClick={() => scrollslider(-200)}  className="flex justify-start items-center rounded-xl hover:cursor-pointer w-[100px] bg-gradient-to-l from-gray-200 to-gray-400">
        <Icon icon="icons8:left-round" className="text-black w-8 h-8  text-2xl ml-2" />
      </button>

      {/* list of buttons */}
      <ul ref={refelement} className="flex select-none gap-2 overflow-x-auto no-scrollbar py-1">
    {slidebtn.map((name,index)=>(
      <li key={index}><Button name={name}></Button></li>
    ))}
      </ul>
      <button  onClick={() => scrollslider(200)} className="flex justify-end items-center w-[100px] hover:cursor-pointer rounded-xl bg-gradient-to-r from-gray-200 to-gray-400">
        <Icon icon="icons8:right-round" className="text-2xl mr-2 text-black w-8 h-8 " />
      </button>
    </div>
  );
};

export default Buttonlist;
