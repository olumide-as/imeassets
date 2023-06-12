import React from "react";
import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../Context/Context";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div>
      
      <main className="w-full h-screen flex flex-col items-center justify-center  sm:px-4">
        <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-orange-700 uppercase rounded-full bg-teal-accent-400">
                User Settings
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-950 sm:text-4xl md:mx-auto text-focus-in">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="679d5905-e08c-4b91-a66c-84aefbb9d2f5"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Login</span>
              </span>{" "}
              to your account
            </h2>
            <p className="text-base text-gray-700 md:text-lg"></p>
          </div>

          <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-medium">Username</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-700 shadow-sm rounded-lg"
                  ref={userRef}
                />
              </div>
              <div>
                <label className="font-medium">Password</label>
                <input
                  type="password"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-700 shadow-sm rounded-lg"
                  ref={passwordRef}
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-x-3">
                  <input
                    type="checkbox"
                    id="remember-me-checkbox"
                    className="checkbox-item peer hidden"
                  />
                  <label
                    htmlFor="remember-me-checkbox"
                    className="relative flex w-5 h-5 bg-white peer-checked:bg-orange-700 rounded-md border ring-offset-2 ring-orange-700 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                  ></label>
                  <span>Remember me</span>
                </div>
                <a
                  href="../recover"
                  className="text-center text-orange-700 hover:text-orange-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                className="w-full px-4 py-2 text-white font-medium bg-orange-700 hover:bg-orange-500 active:bg-orange-700 rounded-lg duration-150"
                type="submit"
                disabled={isFetching}
              >
                Sign in
              </button>
            </form>
            <div className="mt-5">

              <p className="text-center">
                Don't have an account?{" "}
                <a
                  href="../signup"
                  className="font-medium text-orange-700 hover:text-ornage-500"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    
    </div>
  );
};

export default Login;
