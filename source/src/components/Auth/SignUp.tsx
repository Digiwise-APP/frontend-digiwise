import React from "react";
import validator from "validator";

import { Link } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  email: string;
  password: string;
};
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="z-10 flex justify-center self-center">
      <div className="w-100 mx-auto rounded-2xl bg-white p-12 ">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-800">Daftar</h3>
        </div>

        <form className="mb-6 space-y-7" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-1">
            <label className="text-sm font-medium tracking-wide text-gray-700">
              Username
            </label>
            <div className="relative">
              <input
                className=" w-full rounded-lg border border-gray-300 px-4  py-2 text-base focus:border-green-400 focus:outline-none"
                type=""
                placeholder="mail@gmail.com"
                {...register("username", {
                  required: "field username harus di isi",
                  minLength: {
                    value: 5,
                    message: "username harus lebih dari 5 karakter",
                  },
                })}
                onChange={() => clearErrors("username")}
              />
              {errors.username && (
                <span className="absolute -bottom-5 left-0 font-poppins text-xs font-bold text-red-600">
                  {errors.username.message}
                </span>
              )}
            </div>
          </div>
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
                onChange={() => clearErrors("email")}
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
                type=""
                placeholder="Enter your password"
                {...register("password", {
                  required: "field password harus di isi",
                  minLength: {
                    value: 5,
                    message: "pass harus lebih dari 5 karakter",
                  },
                })}
                onChange={() => clearErrors("password")}
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
              Buat akun
            </button>
          </div>
        </form>

        <div className="pt-5 text-center text-xs text-gray-400">
          <span>
            Sudah Punya Akun ?, silahkan
            <Link to="/auth/signIn">
              <span className="text-green text-green-500"> login</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
