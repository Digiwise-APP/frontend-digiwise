import React from "react";

import Background from "../assets/landing_page_bg3.png";
import TiledBackground from "../assets/background-div.webp";
import LogoDigiwise from "../assets/logo_digiwise.png";
import Paper from "../components/LandingPage/HeaderImage/Paper";
import { Fade, Flip } from "react-awesome-reveal";

const LandingPage = () => {
  return (
    <div style={{ backgroundImage: `url(${Background})` }}>
      <Flip duration={1000} triggerOnce>
        <div className="h-screen w-full object-cover">
          <div className="relative flex h-full w-full items-center justify-center">
            <Paper className="-skew-y-1 skew-x-3" />
            <Paper className="-skew-x-2 -skew-y-1 md:top-14" />
            <Paper className="-skew-y-1 skew-x-1 md:top-12">
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
                <div className="mb-4 mt-4 px-1 text-center font-poppins text-2xl font-bold leading-loose tracking-widest text-blue-950 md:mt-7 md:text-5xl">
                  Enhanced Literacy for Greater Wisdom in the Digital Era
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </Flip>

      <div className="mt-20 flex h-screen w-full">
        <Fade triggerOnce delay={100} direction="up" damping={0.1}>
          <div
            className="mx-auto my-auto h-2/3 w-5/6 rounded-3xl border-4 border-bgSidebar shadow-2xl"
            style={{ backgroundImage: `url(${TiledBackground})` }}
          >
            <div className="ml-12 mt-20">
              <div className="flex">
                <img
                  src={LogoDigiwise}
                  className="pointer-events-none w-14 md:w-24"
                />
                <hr className="mx-6 h-auto border-2 border-l-2 border-bgSidebar" />
                <div className="flex items-center justify-center font-poppins text-2xl tracking-widest text-bgSidebar md:text-4xl">
                  DIGIWISE
                </div>
              </div>
            </div>
            <div className="mx-10 my-10">
              <div className="text-poppins text-bold text-xl leading-5 text-gray-900 md:text-3xl md:leading-loose">
                Digiwise adalah sebuah platform yang dirancang untuk membantu
                pengguna mengidentifikasi dan menghindari HOAX atau berita palsu
                serta informasi yang menyesatkan. Platform ini menggunakan alat
                dan sumber daya berbasis ..
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="h-96 w-full"></div>
      <div className="h-96 w-full"></div>
      <div className="h-96 w-full"></div>
      <div className="h-96 w-full"></div>
      <div className="h-96 w-full"></div>
      <div className="h-96 w-full"></div>
      <div className="h-96 w-full"></div>
      <div className="h-96 w-full"></div>
      <div className="h-96 w-full bg-black"></div>
      <div className="h-96 w-full bg-black"></div>
    </div>
  );
};

export default LandingPage;
