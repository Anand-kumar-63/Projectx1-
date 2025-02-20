import React , {useRef} from "react";
import Button from "./Button";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Buttonlist = () => {

  const ismenuopen = useSelector((state)=>state.sidebar.istogglemenu) 
  
  const refelement = useRef(null)
  const scrollslider = (amount)=>{
if(refelement.current){
  refelement.current.scrollBy({ left: amount, behavior: "smooth" });
}}
const slidebtn = ["soccer","football","wwe","Webdev","Appdev","Python","Machin learning","die with a smile","bruno mars", "Soccer", "Football", "WWE", "WebDev", "AppDev",
  "Python", "Machine Learning", "Die With a Smile", "Bruno Mars"]
  return (
    <div className={`flex justify-center absolute top-0 bg-black border-1 text-sm transition-all duration-300 ${
      ismenuopen ? "left-[10px] max-w-[1230px] mx-2" : "left-[200px] max-w-[1000px] mx-2"
    }`}>

      <button onClick={() => scrollslider(-200)}  className="flex justify-start items-center rounded-xl hover:cursor-pointer w-[120px] bg-gradient-to-l from-black to-gray-900">
        <Icon icon="icons8:left-round" className="text-gray-300 w-8 h-8  text-2xl ml-2" />
      </button>

      {/* list of buttons */}
      <ul ref={refelement} className="flex select-none gap-2 overflow-x-auto no-scrollbar py-1">
    {slidebtn.map((name,index)=>(
      <Link to={`/SearchPage`+`?q=`+ name}><li key={index}><Button name={name}></Button></li></Link>

    ))}
      </ul>
      <button  onClick={() => scrollslider(200)} className="flex justify-end items-center w-[120px] hover:cursor-pointer rounded-xl bg-gradient-to-r from-black to-gray-900">
        <Icon icon="icons8:right-round" className="text-2xl mr-2 text-gray-300 w-8 h-8 " />
      </button>
    </div>
  );
};

export default Buttonlist;
