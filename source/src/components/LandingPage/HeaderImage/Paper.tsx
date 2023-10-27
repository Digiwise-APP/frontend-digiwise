import React from "react";

type PaperProps = {
  children?: React.ReactNode;
  className?: string
};

const Paper: React.FC<PaperProps> = ({ children, className }) => {
  return (
    <div className={ `${className} absolute h-1/2 w-2/3 rounded-2xl border-2 border-gray-400 bg-white shadow-2xl md:h-5/6` }>
      {children}
    </div>
  );
};

export default Paper;
