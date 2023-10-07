import React from "react";
import {
  IoGameControllerSharp,
  IoGlasses,
  IoHomeSharp,
  IoNewspaper,
} from "react-icons/io5";
import SidebarIcon from "./SidebarIcon";
import SidebarContainer from "./SidebarContainer";

const SidebarMenu = () => {
  return (
    <SidebarContainer className="bottom-5 left-10">
      <SidebarIcon
        icon={<IoHomeSharp size={20} />}
        text="Home"
        position="right"
      />
      <SidebarIcon
        icon={<IoGameControllerSharp size={20} />}
        text="Games"
        position="right"
      />
      <SidebarIcon
        icon={<IoGlasses size={20} />}
        text="About"
        position="right"
      />
      <SidebarIcon
        icon={<IoNewspaper size={20} />}
        text="Fake News Detection"
        position="right"
      />
    </SidebarContainer>
  );
};

export default SidebarMenu;
