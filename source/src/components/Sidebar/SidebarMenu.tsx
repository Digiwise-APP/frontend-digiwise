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
    iconComponent: <IoHomeSharp size={20} />,
    text: "Home",
    position: "right",
  },
  {
    iconComponent: <IoGameControllerSharp size={20} />,
    text: "Games",
    position: "right",
  },
  {
    iconComponent: <IoGlasses size={20} />,
    text: "About",
    position: "right",
  },
  {
    iconComponent: <IoNewspaper size={20} />,
    text: "Fake News Detection",
    position: "right",
  },
];

const SidebarMenu = () => {
  return (
    <SidebarContainer className="bottom-5 left-10">
      {menus.map((menu) => {
        return (
          <SidebarIcon
            icon={menu.iconComponent}
            text={menu.text}
            position="right"
          />
        );
      })}
    </SidebarContainer>
  );
};

export default SidebarMenu;
