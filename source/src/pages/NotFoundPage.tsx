import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold tracking-widest text-white">
        404
      </h1>
      <div className="absolute rotate-12 rounded bg-[#FF6A3D] px-2 text-sm font-bold">
        Halaman tidak ditemukan
      </div>
      <Link to="/">
        <button className="mt-5">
          <div className="group relative inline-block text-sm font-medium text-[#FF6A3D] focus:outline-none focus:ring active:text-orange-500">
            <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

            <span className="relative block border border-current bg-[#1A2238] px-8 py-3">
              Ke Dashboard
            </span>
          </div>
        </button>
      </Link>
    </main>
  );
};

export default NotFoundPage;
