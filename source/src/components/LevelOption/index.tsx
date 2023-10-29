import React from "react";

type props = {
  level: number;
  active: boolean;
  text: string;
  isPassed: boolean;
  onClick?: () => void;
};

const LevelOption: React.FC<props> = ({
  level,
  active,
  text,
  onClick,
  isPassed,
}) => {
  return (
    <button
      disabled={!active}
      className={`${
        active ? "bg-[#C0EEF2]" : "border-[3px] border-[#9D9D9D] bg-[#D9D9D9]"
      } w-full rounded-[20px] px-[20px] py-[15px] md:px-[36px] md:py-[18px]`}
      onClick={onClick}
    >
      <p
        className={`text-left font-poppins text-[15px] font-bold md:text-[20px] ${
          active ? "text-black" : "text-[#9D9D9D]"
        }`}
      >
        {isPassed ? text : `Level ${level}`}
      </p>
    </button>
  );
};

export default LevelOption;
