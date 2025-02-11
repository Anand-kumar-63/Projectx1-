import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {closemenu} from "../utils/Menuslice";

const Videopage = () => {
  const dispatch = useDispatch();
  //  dispatch the closemenu action inside the use effect
  useEffect(() => {
    dispatch(closemenu());
  });
  return <div>

  </div>;
};

export default Videopage;
