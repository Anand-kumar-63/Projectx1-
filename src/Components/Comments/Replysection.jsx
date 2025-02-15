import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Emojisuggestion from "./Emojisuggestion";
const Replysection = () => {
  const[reply , setReply]= useState();
  return (
    <div className="ml-[58px] mt-2 w-[700px]">
      <div>
        <input
           type="text"
           value={reply}
           onChange={(e) => setReply(e.target.value)}
          className="w-[700px] bg-gray-300 text-sm placeholder:text-black border-b-2 border-white p-2 outline-none"
        ></input>
      </div>

      <div className="flex mt-2 justify-between">
        <span>
          <button className="hover:bg-gray-400 rounded-full">
            <Icon icon="iconoir:emoji" width="32" height="32" />
          </button>
        </span> 
        {/* will work on this later */}
        <Emojisuggestion />


        <div className=" flex gap-2 ml-4">
          <span>
            <button  className="hover:bg-gray-400 px-4 p-1 rounded-3xl">
              Cancel
            </button>
          </span>
          <span>
            <button  className="rounded-3xl px-6 p-1 hover:bg-gray-400">
              Reply
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Replysection;
