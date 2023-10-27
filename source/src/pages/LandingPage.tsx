import React from "react";

import Background from "../assets/landing_page_bg2.png";
import LogoDigiwise from "../assets/logo_digiwise.png";

const LandingPage = () => {
  return (
    <div>
      <div
        className="h-screen w-full bg-cover bg-fixed bg-top bg-no-repeat object-cover"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="absolute h-1/2 w-2/3 -skew-y-1 skew-x-3 rounded-2xl border-2 border-gray-400 bg-white shadow-2xl md:h-5/6"></div>
          <div className="absolute h-1/2 w-2/3 -skew-y-1 skew-x-2 rounded-2xl border-2 border-gray-400 bg-white shadow-2xl md:top-14 md:h-5/6"></div>
          <div className="absolute h-1/2 w-2/3 -skew-y-1 skew-x-1 rounded-2xl border-2 border-gray-400 bg-white shadow-2xl md:top-12 md:h-5/6">
            <div className="flex flex-col items-center justify-center">
              <img
                src={LogoDigiwise}
                className="pointer-events-none mb-6 mt-16 w-1/4  md:mt-24"
                style={{
                  WebkitUserSelect: "none",
                }}
              />
              <div className="font mb-4 font-poppins text-3xl font-bold tracking-widest md:text-7xl">
                DIGIWISE
              </div>
              <hr className="w-3/4 border-4 border-black text-sm text-black" />
              <div className="font mb-4 mt-7 text-center font-poppins text-2xl font-bold tracking-widest text-blue-950 md:text-5xl">
                Enhanced Literacy for Greater Wisdom in the Digital Era
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-96 w-full bg-black"></div>
      <div className="h-96 w-full bg-black"></div>
      <div className="h-96 w-full bg-black"></div>
      <div className="h-96 w-full bg-black"></div>
    </div>
  );
};

export default LandingPage;
