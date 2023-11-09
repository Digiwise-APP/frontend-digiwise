import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";

type DashboardHeaderType = {
  description?: string;
  medal?: string;
  level: number;
};

const DashboardHeader: React.FC<DashboardHeaderType> = ({
  description,
  medal,
  level,
}) => {
  const navigate = useNavigate();
  return (
    <div className="md:mx-64">
      <h1 className="flex flex-col items-center font-rowdies text-6xl font-bold text-black md:inline">
        Halo!
      </h1>
      <div className="mt-10 flex flex-col items-center md:mt-0 md:flex-row">
        <div className="w-2/3">
          <p className="text-md pr-5 text-justify font-poppins leading-relaxed">
            {description}
          </p>
          <div
            className="mt-10 h-11 cursor-pointer rounded-3xl bg-[#C0EEF2] shadow-xl hover:brightness-95 md:w-3/5"
            onClick={() => {
              navigate("/quiz");
            }}
          >
            <p className="flex h-full items-center justify-center font-medium">
              Kerjakan Quiz
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:mx-16 ">
          <p className="my-5 font-rowdies text-2xl ">Your Progress!</p>
          <CircularProgressbarWithChildren
            value={level}
            className="md:w-[200px]"
          >
            <img style={{ width: 50, marginTop: -5 }} src={medal} />
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
