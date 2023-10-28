import React from "react";

import { useLocation } from "react-router-dom";

type LeftContentProps = {
  process: string;
};

const LeftContent = ({ process }) => {
  let heading;
  let text;

  if (process === "signIn") {
    heading = "Digiwise telah menunggumu!";
    text =
      "Sebutan Si Bijak Digital tak sabar menyambutmu. Mulai atau lanjutkan upayamu untuk dapat tetap menjadi bijak digital seutuhnya.";
  } else {
    heading = "Selamat datang di Digiwise!";
    text =
      "Kamu telah tiba di ambang pintu kebijaksanaan digital. Jangan ragu, saatnya untuk bergabung bersama yang bijak. Jadi, apakah kamu adalah Si Bijak Digital yang kami nantikan?";
  }

  return (
    <div className="z-10 hidden flex-none flex-col self-center p-10  sm:flex sm:max-w-xl md:max-w-3xl 2xl:max-w-5xl">
      <div className="hidden flex-col self-start text-white  lg:flex">
        <img src="" className="mb-3" />
        <h1 className="mb-3 text-xl font-bold md:text-5xl">{heading}</h1>
        <p className="pr-3 md:text-justify md:text-2xl lg:text-3xl">{text}</p>
      </div>
    </div>
  );
};

export default LeftContent;
