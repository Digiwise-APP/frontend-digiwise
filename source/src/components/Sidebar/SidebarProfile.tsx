import React from "react";
import { IoLogOut } from "react-icons/io5";
import SidebarIcon from "./SidebarIcon";
import userIcon from "../../assets/user_icon_2.png";

const menus = [
  {
    iconComponent: <img className="h-12 w-12 rounded-full" src={userIcon} />,
    text: "Home",
    position: "left",
    url: "",
  },
  {
    iconComponent: <IoLogOut size={20} />,
    text: "Logout",
    position: "left",
    url: "/logout",
  },
];

const SidebarProfile = () => {
  return (
    <div
      className={`fixed right-10 top-5 z-10 my-4 hidden h-20 w-[90%] max-w-lg rounded-full bg-bgSidebar text-white shadow-lg md:m-0 md:flex md:h-36 md:w-16 md:flex-col md:justify-evenly`}
    >
      <div>
        {menus.map((menu) => {
          return (
            <div className="my-2">
              <SidebarIcon
                icon={menu.iconComponent}
                text={menu.text}
                position="left"
                url={menu.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarProfile;
