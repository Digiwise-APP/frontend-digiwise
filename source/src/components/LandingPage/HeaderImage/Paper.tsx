import React from "react";

import TiledBackground from "../../../assets/background-div.webp";

type PaperProps = {
  children?: React.ReactNode;
  className?: string;
};

const Paper: React.FC<PaperProps> = ({ children, className }) => {
  return (
    <div
      className={`${className} absolute h-1/2 w-2/3 rounded-2xl border-2 border-gray-400 bg-blue-200 shadow-2xl md:h-5/6`}
      style={{ backgroundImage: `url(${TiledBackground})` }}
    >
      {children}
    </div>
  );
};

export default Paper;
