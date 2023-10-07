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
      className={`${className} bg-bgSidebar fixed m-0 flex h-64 w-16 flex-col justify-evenly rounded-full text-white shadow-lg`}
    >
      <div>{children}</div>
    </div>
  );
};

export default SidebarContainer;
