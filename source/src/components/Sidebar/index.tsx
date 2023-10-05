import React from "react";
import {
  IoGameControllerSharp,
  IoGlasses,
  IoHomeSharp,
  IoNewspaper,
} from "react-icons/io5";
import SidebarIcon from "./SidebarIcon";

const Sidebar = () => {
  return (
    <div className="fixed bottom-5 left-10 z-10 m-0 flex h-64 w-16 flex-col justify-evenly rounded-full bg-gray-500 text-white shadow-lg">
      <div>
        {/* <SidebarIcon
          icon={
            <img
              className="h-12 w-12 rounded-full"
              src="https://lh3.googleusercontent.com/a/ACg8ocJltB6v-fBJfCZyDPesBzhFLJ0cJcipzuRc4fok4h3hCZ4=s576-c-no"
            />
          }
          text="Home"
          position="left"
        /> */}
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
      </div>
    </div>
  );
};

export default Sidebar;
