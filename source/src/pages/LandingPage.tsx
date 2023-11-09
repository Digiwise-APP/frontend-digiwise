import React from "react";

import Background from "../assets/landing_page_bg3.png";
import TiledBackground from "../assets/background-div.webp";
import LogoDigiwise from "../assets/logo_digiwise.png";
import QuizCardBackground from "../assets/quiz_card_landing_page.png";
import FNDCardBackground from "../assets/fnd_card_landing_page.png";
import ProfilePicture from "../assets/team_picture.png";
import LinkedinQR from "../assets/linkedin_qr.png";
import Paper from "../components/LandingPage/HeaderImage/Paper";
import { Fade } from "react-awesome-reveal";
import FeatureCard from "../components/LandingPage/FeatureCard";
import ArticleCarousel from "../components/LandingPage/ArticleCarousel";
import MemberCard from "../components/LandingPage/MemberCard";

import NisaPP from "../assets/members/nisa-pict.jpeg";
import NisaQR from "../assets/members/nisa-qr.png";

import RifqiPP from "../assets/members/rifqi-pict.jpeg";
import RifqiQR from "../assets/members/rifqi-qr.png";

import FarizPP from "../assets/members/fariz-pict.jpeg";
import FarizQR from "../assets/members/fariz-qr.png";

import DhikaPP from "../assets/members/dhika-pict.jpeg";
import DhikaQR from "../assets/members/dhika-qr.png";

import ZiePP from "../assets/members/zie-pict.jpg";
import ZieQR from "../assets/members/zie-qr.png";

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
                  className="pointer-events-none mb-6 mt-16 w-1/4 sm:w-1/4  md:mt-24"
                  style={{
                    WebkitUserSelect: "none",
                  }}
                />
                <div className="font mb-4 font-poppins text-3xl font-bold tracking-widest text-bgSidebarButton md:text-7xl">
                  DIGIWISE
                </div>
                <hr className="w-3/4 border-4 border-black text-sm text-black" />
                <div className="mb-4 mt-4 px-1 text-center font-poppins text-xl font-bold leading-loose tracking-widest text-blue-950 sm:text-2xl md:mt-7 md:text-5xl">
                  Enhanced Literacy for Greater Wisdom in the Digital Era
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </Fade>

      <div id="about" className="-mb-20 mt-10 flex h-screen w-full md:mt-20">
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
              <div className="text-poppins text-md text-center text-gray-950 sm:text-xl md:text-justify md:text-2xl ">
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
        <div className="-mb-20 -mt-28 h-screen md:mt-0">
          <div className="px-10 md:px-32">
            <fieldset className="border-t-4 border-bgSidebarButton">
              <legend className="mx-auto px-4 font-poppins text-2xl font-bold text-bgSidebar md:text-5xl">
                Digiwise Programs
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

      <Fade triggerOnce delay={100} direction="up" damping={0.1}>
        <div className="my-10 px-10 md:px-32">
          <fieldset className="border-t-4 border-bgSidebarButton">
            <legend className="mx-auto px-4 font-poppins text-2xl font-bold text-bgSidebar md:text-5xl">
              Relevant Articles
            </legend>
          </fieldset>
        </div>
        <div className="px-9 md:mx-28 md:px-3">
          <ArticleCarousel />
        </div>
      </Fade>

      <div className="mt-16 px-10 md:px-32">
        <fieldset className="border-t-4 border-bgSidebarButton">
          <legend className="mx-auto px-4 font-poppins text-2xl font-bold text-bgSidebar md:text-5xl">
            Our Members
          </legend>
        </fieldset>
      </div>
      <div className="mx-20 mt-10 flex flex-col items-center justify-center sm:flex-wrap md:flex-row md:justify-evenly">
        <MemberCard
          name="Nisa"
          profilePicture={NisaPP}
          linkedinQR={NisaQR}
          linkedinURL="https://www.linkedin.com/in/khairunnisaciptahapsari/"
        />
        <MemberCard
          name="Zie"
          profilePicture={ZiePP}
          linkedinQR={ZieQR}
          linkedinURL="https://www.linkedin.com/in/fritzie-primananda/"
        />
        <MemberCard
          name="Dhika"
          profilePicture={DhikaPP}
          linkedinQR={DhikaQR}
          linkedinURL="https://www.linkedin.com/in/andhika-prasetya-nugraha-7a5734207/"
        />
        <MemberCard
          name="Rifqi"
          profilePicture={RifqiPP}
          linkedinQR={RifqiQR}
          linkedinURL="https://www.linkedin.com/in/rifqoi"
        />
        <MemberCard
          name="Fariz"
          profilePicture={FarizPP}
          linkedinQR={FarizQR}
          linkedinURL="https://www.linkedin.com/in/mfarizalpasha/"
        />
      </div>

      <div className="h-36 w-full"></div>
    </div>
  );
};

export default LandingPage;
