import React from "react";

type TextPosition = "left" | "right" | "top";

type SidebarIconProps = {
  icon: React.ReactElement;
  text?: string;
  position: TextPosition;
};

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon, text, position }) => {
  let hoverPosition = {
    right: "left-14",
    left: "right-14",
    top: "bottom-20",
  };

  return (
    <div className="group relative mx-auto mb-2 mt-2 flex h-16 w-16 items-center justify-center rounded-full bg-bgSidebarButton py-5 hover:cursor-pointer hover:bg-gray-400 md:h-12 md:w-12">
      {icon}
      <span
        className={`min-2-max absolute m-2 
                 w-auto origin-left scale-0 rounded-md bg-bgSidebar p-2 
                 text-xs font-bold text-white shadow-md transition-all duration-100 group-hover:scale-100 ${hoverPosition["top"]} md:${hoverPosition[position]}`}
      >
        {text}
      </span>
    </div>
  );
};

export default SidebarIcon;
