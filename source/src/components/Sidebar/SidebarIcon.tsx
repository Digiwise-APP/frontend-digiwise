import React, { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

type TextPosition = "left" | "right" | "top";

type SidebarIconProps = {
  icon: React.ReactElement;
  text?: string;
  position: TextPosition;
  url: string;
};

const SidebarIcon: React.FC<SidebarIconProps> = ({
  icon,
  text,
  position,
  url = "",
}) => {
  let hoverPosition = {
    right: "md:left-14",
    left: "md:right-14",
    top: "md:bottom-20",
    none: "",
  };

  const navigate = useNavigate();
  function navigateMenu(e: SyntheticEvent) {
    e.preventDefault();

    navigate(url);
  }

  return (
    <div
      className="group relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-bgSidebarButton py-5 hover:cursor-pointer hover:bg-gray-400"
      onClick={navigateMenu}
    >
      {icon}
      <span
        className={`min-2-max absolute 
                 m-2 hidden w-auto origin-left scale-0 rounded-md 
                 bg-bgSidebar p-2 text-xs font-bold text-white shadow-md transition-all duration-100 group-hover:scale-100 md:inline ${hoverPosition[position]}`}
      >
        {text}
      </span>
    </div>
  );
};

export default SidebarIcon;
