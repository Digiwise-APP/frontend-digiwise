import React from "react";
import { IoGameControllerSharp, IoGlasses, IoNewspaper } from "react-icons/io5";
import SidebarIcon from "./SidebarIcon";
import SidebarContainer from "./SidebarContainer";

const menus = [
  {
    iconComponent: (
      <img
        className="h-12 w-12 rounded-full"
        src="https://lh3.googleusercontent.com/a/ACg8ocJltB6v-fBJfCZyDPesBzhFLJ0cJcipzuRc4fok4h3hCZ4=s576-c-no"
      />
    ),
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
          <SidebarIcon
            icon={menu.iconComponent}
            text={menu.text}
            position="left"
          />
        );
      })}
    </SidebarContainer>
  );
};

export default SidebarProfile;
