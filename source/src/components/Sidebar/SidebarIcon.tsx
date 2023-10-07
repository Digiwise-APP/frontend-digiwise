import React from "react";

type TextPosition = "left" | "right";

type SidebarIconProps = {
  icon: React.ReactElement;
  text?: string;
  position: TextPosition;
};

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon, text, position }) => {
  return (
    <div className="bg-bgSidebarButton group relative mx-auto mb-2 mt-2 flex h-12 w-12 items-center justify-center rounded-full py-5 hover:cursor-pointer hover:bg-gray-400">
      {icon}
      <span
        className={`min-2-max bg-bgSidebar absolute 
                 m-2 w-auto origin-left scale-0 rounded-md p-2 
                 text-xs font-bold text-white shadow-md transition-all duration-100 group-hover:scale-100 ${
                   position === "right" ? "left-14" : "right-14"
                 }`}
      >
        {text}
      </span>
    </div>
  );
};

export default SidebarIcon;
