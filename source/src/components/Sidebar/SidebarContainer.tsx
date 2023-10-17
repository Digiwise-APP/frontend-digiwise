import React from "react";

type SidebarContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const SidebarContainer: React.FC<SidebarContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`${className} fixed z-10 my-4 h-20 w-[90%] max-w-lg rounded-full bg-bgSidebar text-white shadow-lg md:m-0 md:flex md:h-64 md:w-16 md:flex-col md:justify-evenly`}
    >
      <div>{children}</div>
    </div>
  );
};

export default SidebarContainer;
