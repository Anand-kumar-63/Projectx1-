import React from "react";
import Button from "./Button";
import { Icon } from "@iconify/react";
const Buttonlist = () => {
  return (
    <div className="flex w-[1320px] overflow-hidden ">
      <ul className="flex gap-3" >
      <li>
          <Button name="soccer" />
        </li>
        <li>
          {" "}
          <Button name="cricket" />
        </li>
        <li>
          {" "}
          <Button name="wwe" />
        </li>
        <li>
          {" "}
          <Button name="quantum physics" />
        </li>
        <li>
          <Button name="quantum mechanics" />
        </li>
        <li>
          {" "}
          <Button name="soccer2" />
        </li>
        <li>
          <Button name="soccer" />
        </li>
        <li>
          {" "}
          <Button name="cricket" />
        </li>
        <li>
          {" "}
          <Button name="wwe" />
        </li>
        <li>
          {" "}
          <Button name="quantum physics" />
        </li>
        <li>
          <Button name="quantum mechanics" />
        </li>
        <li>
          {" "}
          <Button name="soccer2" />
        </li>
        <li>
          <Button name="cricket2" />
        </li>
        <li>
          {" "}
          <Button name="wwe2" />
        </li>
        <li>
          <Button name="physics2" />
        </li>
        <li>
          {" "}
          <Button name="mechanics2" />
        </li>
      </ul>
    </div>
  );
};

export default Buttonlist;
