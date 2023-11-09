import React from "react";

import FakeNewsBG from "../../assets/fake-news-dashboard.png";
import { useNavigate } from "react-router-dom";

const FakeNewsCard = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative mx-3 my-10 h-36 cursor-pointer rounded-3xl bg-blue-300 bg-cover bg-center md:mx-64"
      style={{ backgroundImage: `url(${FakeNewsBG})` }}
      onClick={() => {
        navigate("/fake-news-detection");
      }}
    >
      <div className="h-full w-full rounded-3xl bg-gradient-to-r from-black via-stone-800 opacity-80"></div>
      <div className="absolute left-3 top-3 mx-6 my-4 w-1/2 text-white">
        <p className="md:text-md font-poppins text-xs font-bold leading-tight tracking-wide text-white">
          Tidak yakin dengan berita yang dibaca hari ini?
        </p>
        <p className="mt-2 font-poppins text-xs leading-relaxed tracking-wide md:text-sm">
          Ayo periksa apakah berita itu palsu, hoax, ataupun berita yang bisa
          kamu percaya.
        </p>
      </div>
    </div>
  );
};

export default FakeNewsCard;
