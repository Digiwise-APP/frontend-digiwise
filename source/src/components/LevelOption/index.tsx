import React from "react";

type props = {
  active: boolean;
  text: string;
  onClick?: () => void;
};

const LevelOption: React.FC<props> = ({ active, text, onClick }) => {
  return (
    <button
      disabled={!active}
      className={`${
        active ? "bg-[#C0EEF2]" : "bg-[#D9D9D9] border-[3px] border-[#9D9D9D]"
      } px-[36px] py-[18px] w-full rounded-[20px]`}
      onClick={onClick}
    >
      <p
        className={`font-poppins text-[20px] text-left font-bold ${
          active ? "text-black" : "text-[#9D9D9D]"
        }`}
      >
        {text}
      </p>
    </button>
  );
};

export default LevelOption;
