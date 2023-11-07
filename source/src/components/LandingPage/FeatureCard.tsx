import React, { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

type FeatureCardProps = {
  backgroundImage: string;
  cardText: string;
  urlDest: string;
  className?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  backgroundImage,
  cardText,
  urlDest,
  className = "",
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${className} relative mx-auto h-1/3 max-h-screen w-[80%] cursor-pointer items-center justify-center rounded-3xl bg-cover bg-center bg-no-repeat shadow-2xl hover:bg-black md:mx-0 md:h-2/3 md:w-2/5`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onClick={(e: SyntheticEvent) => {
        e.preventDefault();
        navigate(urlDest);
      }}
    >
      <div className="absolute h-full w-full rounded-3xl hover:inline md:opacity-0 md:hover:opacity-100">
        <div className="absolute h-full w-full items-center justify-center rounded-3xl bg-black opacity-60"></div>
        <div className="flex h-full w-full items-center justify-center">
          <div className="text-center font-rowdies text-4xl text-slate-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-5xl">
            {cardText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
