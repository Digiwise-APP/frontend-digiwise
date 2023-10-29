import React, { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

type FeatureCardProps = {
  backgroundImage: string;
  cardText: string;
  urlDest: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  backgroundImage,
  cardText,
  urlDest,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="relative h-2/3 max-h-screen w-2/5 cursor-pointer items-center justify-center rounded-3xl bg-cover bg-center bg-no-repeat shadow-2xl hover:bg-black"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onClick={(e: SyntheticEvent) => {
        e.preventDefault();
        navigate(urlDest);
      }}
    >
      <div className="absolute h-full w-full rounded-3xl opacity-0 hover:inline hover:opacity-100">
        <div className="absolute h-full w-full items-center justify-center rounded-3xl bg-black opacity-60"></div>
        <div className="flex h-full w-full items-center justify-center">
          <div className="text-center font-rowdies text-5xl text-slate-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {cardText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
