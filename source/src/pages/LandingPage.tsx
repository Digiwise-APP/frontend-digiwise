import React from "react";

import Carousel from "nuka-carousel";

import Background from "../assets/landing_page_bg3.png";
import TiledBackground from "../assets/background-div.webp";
import LogoDigiwise from "../assets/logo_digiwise.png";
import QuizCardBackground from "../assets/quiz_card_landing_page.png";
import FNDCardBackground from "../assets/fnd_card_landing_page.png";
import Paper from "../components/LandingPage/HeaderImage/Paper";
import { Fade } from "react-awesome-reveal";
import FeatureCard from "../components/LandingPage/FeatureCard";
import ArticleCard from "../components/LandingPage/ArticleCard";
import ArticleCarousel from "../components/LandingPage/ArticleCarousel";

const LandingPage = () => {
  return (
    <div style={{ backgroundImage: `url(${Background})` }}>
      <Fade duration={1000} triggerOnce>
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
      </Fade>

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

      <Fade triggerOnce delay={100} direction="up" damping={0.1}>
        <div className="-mt-28 h-screen md:mt-0">
          <div className="px-10 md:px-32">
            <fieldset className="border-t-4 border-bgSidebarButton">
              <legend className="mx-auto px-4 font-poppins text-2xl font-bold text-bgSidebar md:text-5xl">
                Program Digiwise
              </legend>
            </fieldset>
          </div>

          <div className="mt-10 flex h-screen flex-col md:mx-10 md:flex-row md:justify-evenly">
            <FeatureCard
              backgroundImage={QuizCardBackground}
              cardText="Hoax Quizzes"
              urlDest="/quiz"
              className="mb-10"
            />
            <FeatureCard
              backgroundImage={FNDCardBackground}
              cardText="Fake News Detection"
              urlDest="/fake-news-detection"
            />
          </div>
        </div>
      </Fade>

      <div className="px-4 md:mx-32">
        <ArticleCarousel />
      </div>

      {/* <div className="flex h-screen items-center justify-center">
        <div className="relative h-[90%] max-h-screen w-5/6 rounded-3xl bg-black bg-cover bg-center bg-no-repeat">
          <img
            src={Article1}
            className="absolute h-full w-full rounded-3xl object-cover brightness-50"
          />
          <div className="absolute h-full w-full rounded-3xl ">
            <div className="flex h-full w-full flex-col items-center justify-center px-32">
              <p className="text-center font-rowdies text-5xl font-bold leading-normal text-gray-300">
                Triwulan Pertama 2023, Kominfo Identifikasi 425 Isu Hoaks
              </p>
              <button className="my-10 flex h-14 w-1/3 items-center justify-center rounded-full bg-blue-300 text-xl text-black hover:bg-blue-400">
                Baca Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="flex h-screen items-center justify-center">
        <div
          className="relative h-[90%] max-h-screen w-5/6 rounded-3xl bg-black bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Article1})` }}
        >
          <div className="absolute h-full w-full rounded-3xl bg-black opacity-40"></div>
          <div className="absolute z-50 h-full w-full text-center ">
            <div className="my-auto flex h-full w-full flex-col items-center justify-center px-32">
              <p className="font-rowdies text-5xl font-bold leading-normal text-gray-300 ">
                Triwulan Pertama 2023, Kominfo Identifikasi 425 Isu Hoaks
              </p>
              <button className="my-10 flex h-14 w-1/3 items-center justify-center rounded-full bg-blue-300 text-xl text-black hover:bg-blue-400">
                Baca Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="h-96 w-full"></div>
      <div className="h-96 w-full"></div>
      <div className="h-96 w-full"></div>
      <div className="h-96 w-full"></div>
      <div className="h-96 w-full"></div>
      <div className="h-96 w-full"></div>
      <div className="h-96 w-full"></div>
      <div className="h-96 w-full"></div>
      <div className="h-96 w-full bg-black"></div>
      <div className="h-95 w-full bg-black"></div>
    </div>
  );
};

export default LandingPage;
