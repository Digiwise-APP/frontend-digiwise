import React from "react";
import {
  IoGameControllerSharp,
  IoGlasses,
  IoHomeSharp,
  IoNewspaper,
} from "react-icons/io5";
import SidebarIcon from "./SidebarIcon";
import SidebarContainer from "./SidebarContainer";

const SidebarProfile = () => {
  return (
    <SidebarContainer className="right-10 top-5">
      <SidebarIcon
        icon={<IoHomeSharp size={20} />}
        text="Home"
        position="left"
      />
      <SidebarIcon
        icon={<IoGameControllerSharp size={20} />}
        text="Games"
        position="left"
      />
      <SidebarIcon
        icon={<IoGlasses size={20} />}
        text="About"
        position="left"
      />
      <SidebarIcon
        icon={<IoNewspaper size={20} />}
        text="Fake News Detection"
        position="left"
      />
    </SidebarContainer>
  );
};

export default SidebarProfile;
