import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closemenu } from "../utils/Menuslice";
import { useSearchParams } from "react-router-dom";
import Button from "./Button";
const Videopage = () => {
  // to get the params from the url of the page we use searchParams
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("id"));
  const dispatch = useDispatch();
  //  dispatch the closemenu action inside the use effect
  useEffect(() => {
    dispatch(closemenu());
  });
  return (
    <div className="flex flex-row">
      <div>
        <div className="h-[480px] w-[800px] bg-black m-4 ml-[120px] rounded-xl"></div>
      </div>
      <div className="mt-2 h-[70px] w-auto">
        <ul className="flex mt-4 px-4">
          <li>
            <Button name="All" />
          </li>
          <li>
            <Button name="React" />
          </li>
          <li>
            <Button name="Web" />
          </li>
          <li>
            <Button name="All" />
          </li>
          <li>
            <Button name="React" />
          </li>
          <li>
            <Button name="Web" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Videopage;
