import React from "react";
import { IoGameControllerSharp, IoGlasses, IoNewspaper } from "react-icons/io5";
import SidebarIcon from "./SidebarIcon";
import SidebarContainer from "./SidebarContainer";
import userIcon from "../../assets/user_icon.jpg";

const menus = [
  {
    iconComponent: <img className="h-12 w-12 rounded-full" src={userIcon} />,
    text: "Home",
    position: "left",
  },
  {
    iconComponent: <IoGameControllerSharp size={20} />,
    text: "Games",
    position: "left",
  },
  {
    iconComponent: <IoGlasses size={20} />,
    text: "About",
    position: "left",
  },
  {
    iconComponent: <IoNewspaper size={20} />,
    text: "Fake News Detection",
    position: "left",
  },
];

const SidebarProfile = () => {
  return (
    <SidebarContainer className="right-10 top-5 hidden md:inline">
      {menus.map((menu) => {
        return (
          <div className="my-2">
            <SidebarIcon
              icon={menu.iconComponent}
              text={menu.text}
              position="left"
            />
          </div>
        );
      })}
    </SidebarContainer>
  );
};

export default SidebarProfile;
