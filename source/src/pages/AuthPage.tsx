import React from "react";

const AuthPage = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80)`,
      }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-green-500 to-green-400 opacity-75"></div>
      <div className="mx-0 min-h-screen justify-center sm:flex sm:flex-row">
        <div className="z-10 flex  flex-col self-center p-10 sm:max-w-5xl  xl:max-w-2xl">
          <div className="hidden flex-col self-start text-white  lg:flex">
            <img src="" className="mb-3" />
            <h1 className="mb-3 text-5xl font-bold">Hi ? Welcome Back Aji </h1>
            <p className="pr-3">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>
        <div className="z-10 flex justify-center  self-center">
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
                  className="mt-9 flex w-full cursor-pointer justify-center  rounded-full bg-green-400 p-3  font-semibold tracking-wide text-gray-100  shadow-lg transition duration-500 ease-in hover:bg-green-500"
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
