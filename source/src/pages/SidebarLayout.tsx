import React from "react";

import { Outlet } from "react-router-dom";
import SidebarProfile from "../components/Sidebar/SidebarProfile";
import SidebarMenu from "../components/Sidebar/SidebarMenu";

function getCurrentPath() {
  const currentURL = new URL(window.location.href);

  return currentURL.pathname;
}

const SidebarLayout = () => {
  const currentPath = getCurrentPath();

  return (
    <>
      <SidebarProfile />
      <Outlet />
      <SidebarMenu />
      {currentPath !== "/login" ? <SidebarProfile /> : null}
    </>
  );
};

export default SidebarLayout;
