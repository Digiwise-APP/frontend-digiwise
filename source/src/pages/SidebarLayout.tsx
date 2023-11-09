import React from "react";

import { Outlet } from "react-router-dom";
import SidebarProfile from "../components/Sidebar/SidebarProfile";
import SidebarMenu from "../components/Sidebar/SidebarMenu";
import { useLocation } from "react-router-dom";

function getCurrentPath() {
  let location = useLocation();

  return location.pathname;
}

const SidebarLayout = () => {
  const currentPath = getCurrentPath();

  return (
    <>
      <SidebarMenu />
      <Outlet />
      {!currentPath.startsWith("/auth") ? <SidebarProfile /> : null}
    </>
  );
};

export default SidebarLayout;
