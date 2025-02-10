import React from "react";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import AppStore from "../utils/Store";
const Sidebar = () => {

  const ismenuopen = useSelector((state) => state.sidebar.istogglemenu);
  if(!ismenuopen) return null;
  return (
    <div className="flex flex-col gap-4 m-4 font-mono grid grid-cols-1 divide-y-[1px] divide-gray-300 cursor-pointer shadow-lg h-auto">
      <div id="section-1" className="">
        <ul className="flex flex-col gap-1">
          <li className="flex gap-2">
            <Icon icon="ic:round-home" className="text-2xl" />
            Home
          </li>

          <li className="flex items-center gap-1 text-gray-950">
            <Icon
              icon="material-symbols-light:format-underlined-squiggle-rounded"
              className="text-2xl"
            />
            Shorts
          </li>

          <li className="flex items-center gap-1 text-gray-950">
            <Icon
              icon="material-symbols-light:subscriptions-outline"
              className="text-2xl"
            />
            Subscriptions
          </li>
        </ul>
      </div>
      <div id="section-2" className="gap-1 mt-2 flex flex-col">
       
        <h1 className="font-extrabold flex gap-1 items-center">
          You
          <Icon icon="formkit:right" className="text-sm" />
        </h1>
       
        <ul className="flex flex-col gap-2">
          <li className="flex gap-1 items-center">
            <Icon icon="fluent:history-20-regular" className="text-2xl" />
            History
          </li>

          <li className="flex gap-1 items-center">
            <Icon icon="ic:outline-watch-later" className="text-2xl" />
            Watch Later
          </li>

          <li className="flex gap-1 items-center">
            <Icon icon="ph:video-thin" className="text-2xl" />
            Your Vedio
          </li>

          <li className="flex gap-1 items-center">
            <Icon icon="ph:playlist-thin" className="text-2xl" />
            Playlist
          </li>

          <li className="flex gap-1 items-center">
            <Icon icon="solar:like-line-duotone" className="text-2xl" />
            Liked Video
          </li>
        </ul>
      </div>
      <div id="section-3">
        <h1>Subscriptions</h1>
      </div>
    </div>
  );
};

export default Sidebar;
