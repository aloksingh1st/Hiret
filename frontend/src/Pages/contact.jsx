import React from "react";
import CollegeProfile from "../components/CollegeProfile";
import Profile from "../components/Profile";

const Contact = () => {
    let newObject = window.localStorage.getItem("user");
    console.log(JSON.parse(newObject));
    const userData = JSON.parse(newObject);

  return (
    <>
      <form className="my-6">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="my-6" style={{ "margin-top": "11rem" }}>
        <div
          className="flex mx-6"
          style={{ justifyContent: "space-between", marginLeft: "13rem" }}
        >
          <h1 className="text-4xl m-left main-color text-center text-left font-bold leading-none sm:text-6xl">
            {userData.name}
          </h1>
          <button
            type="button"
            class="text-white brand bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Default
          </button>
        </div>

        <div className="p-6 my-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100 subbrand m-bottom">
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <img
              src="https://source.unsplash.com/75x75/?portrait"
              alt=""
              className="self-center flex-shrink-0 w-48 h-48 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700 "
              style={{ "margin-top": "-8rem", border: "8px solid #657A97" }}
            />
            {/* <div className="flex flex-col">
			<h4 className="text-lg font-semibold text-center md:text-left">Leroy Jenkins</h4>
			<p className="dark:text-gray-400">Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
		</div> */}
          </div>

          <div class="relative subbrand overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead
                class="text-xs text-black uppercase subbrand dark:bg-gray-700 dark:text-gray-400"
                style={{ color: "black" }}
              >
                <tr>
                  <th scope="col" class="px-6 py-3 rounded-l-lg">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" class="px-6 py-3 rounded-r-lg">
                    Language
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="subbrand dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                   {userData.email}
                  </th>
                  <td class="subbrand px-6 py-4">{userData.number}</td>
                  <td class=" subbrand px-6 py-4">{userData.language}</td>
                </tr>
              </tbody>
            </table>

            {/* <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
                  </div> */}
          </div>
        </div>



{userData.reqSkills ? <CollegeProfile /> : <Profile />}
      </div>
    </>
  );
};

export default Contact;
