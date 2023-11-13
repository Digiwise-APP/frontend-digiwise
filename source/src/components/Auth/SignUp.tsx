import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import { signUp } from "../../api/user";

type Inputs = {
  username: string;
  email: string;
  password: string;
};
const SignUp = () => {
  const [errorServer, setErrorServer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    const response = await signUp(data);
    if (response.code === 400) {
      setErrorServer("email sudah terdaftar");
      setIsLoading(false);
      return;
    } else if (response.code === 500) {
      setErrorServer("terdapat kesalahan pada server");
      setIsLoading(false);
      return;
    }

    return navigate("/auth/signIn", {
      state: { isSignUp: true },
    });
  };

  return (
    <div className="z-10 flex justify-center self-center">
      <div className="w-100 mx-auto rounded-2xl bg-white p-12 ">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-800">Daftar</h3>
        </div>

        <form className="mb-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-1">
            <label className="text-sm font-medium tracking-wide text-gray-700">
              Username
            </label>
            <div className="relative">
              <input
                className=" w-full rounded-lg border border-gray-300 px-4  py-2 text-base focus:border-green-400 focus:outline-none"
                type=""
                placeholder="exampleusername"
                {...register("username", {
                  required: "field username harus di isi",
                  minLength: {
                    value: 5,
                    message: "harus lebih dari 5 karakter",
                  },
                  onChange: () => {
                    setErrorServer(null);
                    clearErrors("username");
                  },
                })}
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
                  minLength: {
                    value: 5,
                    message: "pass harus lebih dari 5 karakter",
                  },
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
                "Daftar"
              )}
            </button>
          </div>
        </form>

        <div className="relative flex justify-center pt-5 text-center text-xs text-gray-400">
          {errorServer && (
            <span className="absolute -top-2 text-center font-poppins text-xs font-bold text-red-600">
              {errorServer}
            </span>
          )}
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
