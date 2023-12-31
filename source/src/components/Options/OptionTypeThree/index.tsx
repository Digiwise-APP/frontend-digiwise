import React from "react";
import icon from "../../../assets/checklist_vector.png";
import quizStore from "../../../../store/quizStore";

type OptionProps = {
  options: string[];
};

const OptionTypeThree: React.FC<OptionProps> = ({ options }) => {
  const { answers, setAnswerMultiple, index } = quizStore();

  const indexNumber = index;
  return (
    <div className="flex w-full flex-col  justify-center gap-[18px]">
      {options.map((option, index) => (
        <button
          key={index}
          className="flex w-full items-center justify-start gap-[9px] rounded-[20px] border-[1px] border-dashed border-[#232686] px-[8px] py-[9px] md:gap-[14px] md:px-[15px] md:py-[13px]"
          onClick={() => setAnswerMultiple(option)}
        >
          <div
            className={`relative flex min-h-[20px] min-w-[20px] items-center justify-center  rounded-[2px] border-[1px] border-solid border-[#232686] p-[1px] md:h-[40px] md:w-[40px] ${
              answers[indexNumber]?.includes(option) ? "bg-[#8D8EBA]" : ""
            }`}
          >
            {answers[indexNumber]?.includes(option) && (
              <img
                src={icon}
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[19px] w-[27px]"
              />
            )}
          </div>
          <p className="text-left font-poppins text-[9px] text-black md:text-[12px]">
            {option}
          </p>
        </button>
      ))}
    </div>
  );
};

export default OptionTypeThree;
