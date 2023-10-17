import React, { useState } from "react";
import {
  IoGameControllerSharp,
  IoGlasses,
  IoHomeSharp,
  IoNewspaper,
} from "react-icons/io5";
import SidebarIcon from "./SidebarIcon";
import SidebarContainer from "./SidebarContainer";

type menuOptions = "home" | "games" | "about" | "fake-news";

const menus = [
  {
    iconComponent: <IoHomeSharp className="text-[25px] md:text-[20px]" />,
    text: "Home",
    position: "right",
  },
  {
    iconComponent: (
      <IoGameControllerSharp className="text-[25px] md:text-[20px]" />
    ),
    text: "Games",
    position: "right",
  },
  {
    iconComponent: <IoGlasses className="text-[25px] md:text-[20px]" />,
    text: "About",
    position: "right",
  },
  {
    iconComponent: <IoNewspaper className="text-[25px] md:text-[20px]" />,
    text: "Fake News Detection",
    position: "right",
  },
];

const SidebarMenu = () => {
  return (
    <SidebarContainer className="bottom-0 left-1/2 -translate-x-1/2  md:bottom-5 md:left-10 md:translate-x-0">
      <ul className="flex justify-evenly md:inline ">
        {menus.map((menu) => {
          return (
            <li className="">
              <SidebarIcon
                icon={menu.iconComponent}
                text={menu.text}
                position="right"
              />
            </li>
          );
        })}
      </ul>
    </SidebarContainer>
  );
};

export default SidebarMenu;
