import React from "react";

import authImage from "../assets/auth_image_2.jpg";
import { useParams } from "react-router-dom";

// components
import LeftContent from "../components/Auth/LeftContent";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";

const AuthPage = () => {
  const { process } = useParams();

  let authProcess = process;

  if (authProcess !== "signIn" && authProcess !== "signUp") {
    authProcess = "signIn";
  }

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${authImage})`,
      }}
    >
      <div className="absolute inset-0 z-0 bg-[#232b2b] opacity-[80%]"></div>
      <div className="mx-0 flex min-h-screen items-center justify-center p-5 sm:flex-row">
        <LeftContent />
        {authProcess === "signIn" ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default AuthPage;
