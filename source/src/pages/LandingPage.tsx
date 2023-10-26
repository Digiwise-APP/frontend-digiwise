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
          <div className="absolute h-5/6 w-2/3 -skew-y-1 rounded-2xl border-2 border-gray-400 bg-white shadow-2xl"></div>
          <div className="absolute top-14 h-5/6 w-2/3 -skew-y-1 rounded-2xl border-2 border-gray-400 bg-white shadow-2xl"></div>
          <div className="absolute top-12 h-5/6 w-2/3 -skew-y-1 rounded-2xl border-2 border-gray-400 bg-white shadow-2xl">
            <div className="flex flex-col items-center justify-center">
              <img
                src={LogoDigiwise}
                className="pointer-events-none mb-6 mt-24  w-1/4"
                style={{
                  WebkitUserSelect: "none",
                }}
              />
              <div className="font mb-4 font-poppins text-7xl font-bold tracking-widest">
                DIGIWISE
              </div>
              <hr className="w-3/4 border-4 border-black text-sm text-black" />
              <div className="font mb-4 mt-7 text-center font-poppins text-5xl font-bold tracking-widest text-blue-950">
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
