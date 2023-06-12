import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      console.log(res);
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <main className="w-full h-screen flex flex-col items-center justify-center sm:px-4">
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
                <span className="relative">Create</span>
              </span>{" "}
              a New User
            </h2>
            <p className="text-base text-gray-700 md:text-lg"></p>
          </div>

          <div className="text-center">
            <div className="mt-5 space-y-2">
              <p className="">
                Already have an account?{" "}
                <a
                  href="../Login"
                  className="font-medium text-orange-700 hover:text-orange-500"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>
          <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-medium">Name</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-700 shadow-sm rounded-lg"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-700 shadow-sm rounded-lg"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="font-medium">Password</label>
                <input
                  type="password"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-700 shadow-sm rounded-lg"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium bg-orange-700 hover:bg-orange-500 active:bg-orange-700 rounded-lg duration-150"
              >
                Create account
              </button>
            </form>
            <div className="mt-5">

              {error && (
                <span style={{ color: "red", marginTop: "10px" }}>
                  Something went wrong!
                </span>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
