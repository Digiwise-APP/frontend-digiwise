import { useState } from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { signIn } from "../../api/user";
import userStore from "../../../store/userStore";

type Inputs = {
  email: string;
  password: string;
};

const SignIn = () => {
  const [errorServer, setErrorServer] = useState<string | null>(null);
  const { storeUser } = userStore();
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await signIn(data);

    if (response.code === 404) {
      setErrorServer("email atau password salah");
      return;
    }

    const userData = {
      email: data.email,
      token: response.token,
      level: response.level,
    };

    storeUser(userData);
  };
  return (
    <div className="z-10 flex justify-center self-center">
      <div className="w-100 mx-auto rounded-2xl bg-white p-12 ">
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
                type=""
                placeholder="mail@gmail.com"
                {...register("email", {
                  required: "field email harus di isi",
                  minLength: {
                    value: 5,
                    message: "email harus lebih dari 5 karakter",
                  },
                  validate: {
                    isEmail: (value) =>
                      validator.isEmail(value) || "Mohon isi email yg valid",
                  },
                })}
                onChange={() => {
                  setErrorServer(null);
                  clearErrors("email");
                }}
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
                  minLength: {
                    value: 5,
                    message: "pass harus lebih dari 5 karakter",
                  },
                })}
                onChange={() => {
                  setErrorServer(null);
                  clearErrors("password");
                }}
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
              type="submit"
              className="mt-9 flex w-full cursor-pointer justify-center  rounded-full bg-[#2CC6F6] p-3  font-semibold tracking-wide text-gray-100  shadow-lg transition duration-500 ease-in hover:bg-green-500"
            >
              Login
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
