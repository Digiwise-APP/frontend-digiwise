import { useState } from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { signIn } from "../../api/user";
import userStore from "../../../store/userStore";

import { useNavigate, useLocation } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

type LocationState = {
  isSignUp: boolean | null | undefined;
};

const SignIn = () => {
  const [errorServer, setErrorServer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { storeUser } = userStore();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const state = location.state as LocationState;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    const response = await signIn(data);

    if (response.code === 404 || response.code === 400) {
      setErrorServer("email atau password salah");
      setIsLoading(false);
      return;
    } else if (response.code === 500) {
      setErrorServer("terdapat kesalahan pada server");
      setIsLoading(false);
      return;
    }
    state?.isSignUp;
    const userData = {
      email: data.email,
      token: response.token,
      level: response.level,
      username: response.username,
    };
    setIsLoading(false);
    storeUser(userData);
    return navigate("/dashboard", {
      replace: true,
    });
  };

  // clear useLocation state on refresh
  window.history.replaceState({ state: null }, document.title);

  return (
    <div className="relative z-10 flex justify-center self-center">
      {state?.isSignUp && (
        <div className="absolute top-2 flex w-full flex-col items-center justify-center gap-[1px]">
          <p className="font-poppins text-xs font-bold text-green-500">
            Akun Berhasil dibuat
          </p>
          <p className="font-poppins text-xs font-bold text-green-500">
            Silahkan Login
          </p>
        </div>
      )}
      <div className="w-100 mx-auto rounded-2xl bg-white p-12">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-800">Masuk</h3>
        </div>

        <form className="mb-10 space-y-7" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-1">
            <label className="text-sm font-medium tracking-wide text-gray-700">
              Email
            </label>
            <div className="relative">
              <input
                className=" w-full rounded-lg border border-gray-300 px-4  py-2 text-base focus:border-green-400 focus:outline-none"
                type="text"
                placeholder="mail@gmail.com"
                {...register("email", {
                  required: "field email harus di isi",
                  validate: {
                    isEmail: (value) =>
                      validator.isEmail(value) || "Mohon isi email yg valid",
                  },
                  onChange: () => {
                    setErrorServer(null);
                    clearErrors("email");
                  },
                })}
              />
              {errors.email && (
                <span className="absolute -bottom-5 left-0 font-poppins text-xs font-bold text-red-600">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          <div className="space-y-1">
            <label className="mb-5 text-sm font-medium tracking-wide text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                className="w-full content-center rounded-lg border border-gray-300 px-4  py-2 text-base focus:border-green-400 focus:outline-none"
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "field password harus di isi",
                  onChange: () => {
                    setErrorServer(null);
                    clearErrors("password");
                  },
                })}
              />
              {errors.password && (
                <span className="absolute -bottom-5 left-0 font-poppins text-xs font-bold text-red-600">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>
          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="mt-9 flex min-h-[50px] w-full cursor-pointer  justify-center rounded-full bg-[#2CC6F6] p-3 font-semibold tracking-wide text-gray-100  shadow-lg transition duration-200 ease-in hover:bg-green-500 disabled:cursor-default disabled:bg-slate-400"
            >
              {isLoading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
        <div className="relative flex justify-center pt-5 text-center text-xs text-gray-400">
          {errorServer && (
            <span className="absolute -top-3 text-center font-poppins text-xs font-bold text-red-600">
              {errorServer}
            </span>
          )}
          <span>
            Belum punya akun ?, silahkan
            <Link to="/auth/signUp">
              <span className="text-green text-green-500"> Daftar</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
