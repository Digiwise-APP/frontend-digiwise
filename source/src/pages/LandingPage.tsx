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
                <div className="font mb-4 font-poppins text-3xl font-bold tracking-widest text-bgSidebarButton md:text-7xl">
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

      <div className="mt-10 flex h-screen w-full md:mt-20">
        <Fade triggerOnce delay={100} direction="up" damping={0.1}>
          <div
            className="mx-auto my-auto h-3/4 w-5/6 rounded-3xl border-4 border-bgSidebar bg-sky-50 shadow-2xl"
            style={{ backgroundImage: `url(${TiledBackground})` }}
          >
            <div className="ml-12 mt-20">
              <div className="flex">
                <img
                  src={LogoDigiwise}
                  className="pointer-events-none w-14 md:w-24"
                />
                <hr className="mx-6 h-auto border-2 border-l-2 border-bgSidebar" />
                <h2 className="flex items-center justify-center font-poppins text-2xl font-bold tracking-widest text-bgSidebar md:text-5xl">
                  DIGIWISE
                </h2>
              </div>
            </div>
            <div className="my-10 px-10">
              <div className="text-poppins text-center text-xl text-gray-950 md:text-justify md:text-2xl ">
                <span className="font-bold">Introducing Digiwise</span> -
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
