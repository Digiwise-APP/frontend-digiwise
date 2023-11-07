import React from "react";
import { IoLogOut, IoLogIn } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import SidebarIcon from "./SidebarIcon";
import getToken from "../../utils/getToken";

const menus = [
  {
    iconComponent: <BsFillPersonFill size={20} />,
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
  const token = getToken();

  const LogIcon =
    token === "" || !token || token === null ? (
      <SidebarIcon
        icon={<IoLogIn size={20} />}
        text="Login"
        position="left"
        url="/auth/signIn"
      />
    ) : (
      <SidebarIcon
        icon={<IoLogOut size={20} />}
        text="Logout"
        position="left"
        url="/auth/signOut"
      />
    );

  return (
    <div
      className={`fixed right-10 top-5 z-10 my-4 hidden h-20 w-[90%] max-w-lg rounded-full bg-bgSidebar text-white shadow-lg md:m-0 md:flex md:h-36 md:w-16 md:flex-col md:justify-evenly`}
    >
      <div>
        <div className="my-2">
          <SidebarIcon
            icon={<BsFillPersonFill size={20} />}
            text="Home"
            position="left"
            url=""
          />
        </div>

        <div className="my-2">{LogIcon}</div>
      </div>
    </div>
  );
};

export default SidebarProfile;
