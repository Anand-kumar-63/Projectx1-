import React from "react";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const ismenuopen = useSelector((state) => state.sidebar.istogglemenu);
  // Menu Items
  const menuItems = [
    { icon: "ic:round-home", name: "Home", path: "/" },
    { icon: "material-symbols-light:format-underlined-squiggle-rounded", name: "Shorts", path: "/Shorts" },
    { icon: "material-symbols-light:subscriptions-outline", name: "Subscriptions", path: "/Subs" },
  ];

  const userItems = [
    { icon: "fluent:history-20-regular", name: "History" },
    { icon: "ic:outline-watch-later", name: "Watch Later" },
    { icon: "ph:video-thin", name: "Your Video" },
    { icon: "ph:playlist-thin", name: "Playlist" },
    { icon: "solar:like-line-duotone", name: "Liked Video" },
  ];

  return (
    <div
      className={`fixed top-[40px] left-0 h-[700px] w-[275px] z-10 bg-black text-white shadow-lg transition-transform duration-300 ease-in-out overflow-auto no-scrollbar 
      ${ismenuopen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Section 1 - Main Menu */}
      <div className="flex flex-col gap-4 px-4 py-2 font-mono divide-y divide-gray-300">
        <ul className="flex flex-col gap-3">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className="flex gap-2 items-center cursor-pointer">
              <Icon icon={item.icon} className="text-2xl" />
              {item.name}
            </Link>
          ))}
        </ul>

        {/* Section 2 - User */}
        <div className="mt-2">
          <h1 className="font-extrabold flex gap-1 mt-3 mb-3 items-center">
            You <Icon icon="formkit:right" className="text-sm" />
          </h1>
          <ul className="flex flex-col gap-3">
            {userItems.map((item, index) => (
              <li key={index} className="flex gap-2 items-center cursor-pointer">
                <Icon icon={item.icon} className="text-2xl" />
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3 - Subscriptions */}
        <div className="mt-2">
          <h1 className="font-extrabold flex gap-1 mt-3 mb-3 items-center">
            Subscriptions <Icon icon="formkit:right" className="text-sm" />
          </h1>
          <ul className="flex flex-col gap-3">
            {userItems.map((item, index) => (
              <li key={index} className="flex gap-2 items-center cursor-pointer">
                <Icon icon={item.icon} className="text-2xl" />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
