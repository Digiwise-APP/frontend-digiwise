import React from "react";
import icon from "../../../assets/checklist_vector.png";
import quizStore from "../../../../store/quizStore";

type OptionProps = {
  optionText: string;
};

const Option: React.FC<OptionProps> = ({ optionText }) => {
  const { answers, setAnswerMultiple, index } = quizStore();

  const onChooseAnswer = () => {
    setAnswerMultiple(optionText);
  };
  return (
    <button
      className="flex items-center justify-center gap-[9px] rounded-[20px] border-[1px] border-dashed border-[#232686] px-[8px] py-[9px] md:gap-[14px] md:px-[15px] md:py-[13px]"
      onClick={onChooseAnswer}
    >
      <div
        className={`flex h-[20px] w-[40px] items-center justify-center rounded-[2px] border-[1px] border-solid border-[#232686] p-[1px] md:h-[40px] md:w-[40px]
        ${answers[index]?.includes(optionText) ? "bg-[#8D8EBA]" : ""}`}
      >
        {answers[index]?.includes(optionText) && (
          <img src={icon} className=" h-[19px] w-[27px]" />
        )}
      </div>
      <p className="font-poppins text-[9px] text-black md:text-[12px]">
        {optionText}
      </p>
    </button>
  );
};

export default Option;
