import React from "react";

import authImage from "../assets/auth_image_2.jpg";

const AuthPage = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${authImage})`,
      }}
    >
      <div className="absolute inset-0 z-0 bg-[#232b2b] opacity-[80%]"></div>
      <div className="mx-0 flex min-h-screen items-center justify-center p-5 sm:flex-row">
        <div className="z-10 hidden flex-col self-center p-10 sm:flex  md:max-w-5xl xl:max-w-2xl">
          <div className="hidden flex-col self-start text-white  lg:flex">
            <img src="" className="mb-3" />
            <h1 className="mb-3 text-xl font-bold md:text-5xl">
              Hi Welcome back
            </h1>
            <p className="pr-3 md:text-2xl">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>
        <div className="z-10 flex justify-center self-center">
          <div className="w-100 mx-auto rounded-2xl bg-white p-12 ">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">Sign In </h3>
            </div>
            <div className="mb-10 space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wide text-gray-700">
                  Email
                </label>
                <input
                  className=" w-full rounded-lg border border-gray-300 px-4  py-2 text-base focus:border-green-400 focus:outline-none"
                  type=""
                  placeholder="mail@gmail.com"
                />
              </div>
              <div className="space-y-2">
                <label className="mb-5 text-sm font-medium tracking-wide text-gray-700">
                  Password
                </label>
                <input
                  className="w-full content-center rounded-lg border border-gray-300 px-4  py-2 text-base focus:border-green-400 focus:outline-none"
                  type=""
                  placeholder="Enter your password"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="mt-9 flex w-full cursor-pointer justify-center  rounded-full bg-[#2CC6F6] p-3  font-semibold tracking-wide text-gray-100  shadow-lg transition duration-500 ease-in hover:bg-green-500"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
