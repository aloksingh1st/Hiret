import React from "react";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Toast from "./Toast";

const Navbar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [isToggled, setIsToggled] = useState(false);
  const [islogged, setIslogged] = useState(false);
  const [Teacher, setTeacher] = useState(true);

  const userData = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  const handleToggle = () => {
    console.log(Teacher);
    setIsToggled(!isToggled);
    setTeacher(!setTeacher);
    console.log(Teacher);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("handled successfully");
    try {
      const { data } = await axios.post(
        "https://hiret-ltd.onrender.com/api/users/signin",
        {
          email,
          password,
        }
      );
      setToken(data.token);
      <Navigate to="/profile" />;
      setIslogged(true);
      setError(null);
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleLogin2 = async (e) => {
    e.preventDefault();

    console.log("handled successfully");
    try {
      const { data } = await axios.post(
        "https://hiret-ltd.onrender.com/api/college/signin",
        {
          email,
          password,
        }
      );
      setToken(data.token);
      <Navigate to="/profile" />;
      setIslogged(true);
      setError(null);
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <nav className="brand border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <img
              src="/vite.svg"
              className="h-6 mr-3 sm:h-9 bgimage"
              alt="Hiret Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Hiret
            </span>
          </a>
          <div className="flex md:order-2">
            {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button> */}

            {/* <!-- Modal toggle --> */}

            {userData ? (
              <button
                onClick={logout}
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Logout
              </button>
            ) : (
              <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Login
              </button>
            )}

            {/* <!-- Main modal --> */}
            <div
              id="authentication-modal"
              tabindex="-1"
              aria-hidden="true"
              className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
            >
              <div className="relative w-full h-full max-w-md md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <span className="ml-3 text-sm m-bottom m-right font-medium text-gray-900 dark:text-gray-300">
                    Teacher
                  </span>
                  <label className="relative m-top inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value="Checked"
                      onChange={handleToggle}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      College ?
                    </span>
                  </label>
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="authentication-modal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="px-6 py-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                      Sign in {isToggled ? "as College" : "as Teacher"}
                    </h3>
                    <form
                      className="space-y-6"
                      onSubmit={Teacher ? handleLogin : handleLogin2}
                    >
                      <div>
                        <label
                          for="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="name@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                        />
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-start">
                          {/* <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label> */}
                        </div>
                        <a
                          href="#"
                          className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                        >
                          Lost Password?
                        </a>
                      </div>
                      <button
                        type="submit"
                        data-modal-hide="authentication-modal"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Login to your account
                      </button>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered?{" "}
                        <button
                          data-modal-target="create-modal"
                          data-modal-toggle="create-modal"
                          data-modal-hide="authentication-modal"
                          className="text-blue-700 hover:underline dark:text-blue-500"
                        >
                          Create account
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="create-modal"
              tabindex="-1"
              aria-hidden="true"
              className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
            >
              <div className="relative w-full h-full max-w-md md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="create-modal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="px-6 py-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                      Sign up {isToggled ? "as College" : "as Teacher"}
                    </h3>
                    <form className="space-y-6" action="#">
                      <div>
                        <label
                          for="Fullname"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your Fullname
                        </label>
                        <input
                          type="Fullname"
                          name="Fullname"
                          id="Fullname"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="name@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="name@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                        />
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-start">
                          {/* <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label> */}
                        </div>
                        <a
                          href="#"
                          className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                        >
                          Lost Password?
                        </a>
                      </div>
                      <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Login to your account
                      </button>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already registered?{" "}
                        <button
                          data-modal-target="authentication-modal"
                          data-modal-hide="create-modal"
                          data-modal-toggle="authentication-modal"
                          className="text-blue-700 hover:underline dark:text-blue-500"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 brand rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/college"
                  className="block py-2 pl-3 pr-4 text-white-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Job Search
                </a>
              </li>
              <li>
                <a
                  href="/jobseeker"
                  className="block py-2 pl-3 pr-4 text-white-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Job Seekers
                </a>
              </li>
              <li>
                <a
                  href="/profile"
                  className="block py-2 pl-3 pr-4 text-white-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {islogged ? <Toast text="Logged In Succesfully" /> : null}
    </>
  );
};

export default Navbar;
