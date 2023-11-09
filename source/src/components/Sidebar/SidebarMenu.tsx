import React, { SyntheticEvent, useState } from "react";
import {
  IoGameControllerSharp,
  IoGlasses,
  IoHomeSharp,
  IoLogOut,
  IoNewspaper,
  IoPersonSharp,
} from "react-icons/io5";
import { PiListMagnifyingGlassDuotone } from "react-icons/pi";
import SidebarIcon from "./SidebarIcon";
import { useNavigate } from "react-router-dom";

const menus = [
  {
    iconComponent: <IoHomeSharp className="text-[25px] md:text-[20px]" />,
    text: "Home",
    position: "right",
    url: "/",
  },
  {
    iconComponent: (
      <IoGameControllerSharp className="text-[25px] md:text-[20px]" />
    ),
    text: "Dashboard",
    position: "right",
    url: "/dashboard",
  },
  {
    iconComponent: <IoNewspaper className="text-[25px] md:text-[20px]" />,
    text: "Articles",
    position: "right",
    url: "/article",
  },
  {
    iconComponent: (
      <PiListMagnifyingGlassDuotone className="text-[25px] md:text-[20px]" />
    ),
    text: "Fake News Detection",
    position: "right",
    url: "/fake-news-detection",
  },
];

const SidebarMenu = () => {
  const [profileClicked, setProfileClicked] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 z-10 my-4 flex h-24 w-full items-center justify-evenly text-white md:bottom-5 md:left-10 md:m-0 md:my-0 md:flex md:h-64 md:w-16  md:rounded-full md:bg-bgSidebar">
      <ul className="flex h-20 w-2/3 items-center justify-evenly rounded-full bg-bgSidebar px-5 md:h-full md:max-h-full md:w-full md:flex-col md:justify-evenly md:bg-transparent">
        {menus.map((menu) => {
          return (
            <li className="px-1">
              <SidebarIcon
                icon={menu.iconComponent}
                text={menu.text}
                position="right"
                url={menu.url}
              />
            </li>
          );
        })}
      </ul>
      {/* Profile di layout mobile */}
      <div className="md:hidden">
        <div
          className="group relative mx-auto mb-2 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-bgSidebarButton py-5 hover:cursor-pointer hover:bg-gray-400 focus:bg-red-600 md:h-16 md:w-16"
          onClick={(e: SyntheticEvent) => {
            e.stopPropagation();
            setProfileClicked(!profileClicked);
          }}
        >
          <IoPersonSharp className="text-[30px] md:text-[20px]" />
          <div
            className={`min-2-max  absolute bottom-20 m-2 flex
                 h-24 w-full origin-left scale-0 justify-around rounded-full bg-bgSidebar
                 p-2 text-xs font-bold text-white shadow-md transition-all duration-100 md:bottom-0 ${
                   profileClicked ? "scale-100" : "scale-0"
                 }`}
            onClick={(e: SyntheticEvent) => {
              e.stopPropagation();
            }}
          >
            <div className="group relative m-auto flex h-14 w-14 items-center justify-center rounded-full bg-bgSidebarButton py-5 hover:cursor-pointer hover:bg-gray-400 focus:bg-red-600 md:h-16 md:w-16">
              <IoLogOut
                className="mx-auto text-[30px]"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/logout");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
