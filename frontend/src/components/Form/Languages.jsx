import axios from "axios";
import React, { useState } from "react";
import Toast from "../Toast";

const Languages = () => {
  const [language, setLanguage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("handled successfully");
    try {
      const { data } = await axios.put(
        `https://hiret-ltd.onrender.com/api/users/updateProfile/${props.id}`,
        {
          language,
        }
      );

      setShowToast(true);
      setError(null);
      console.log(token);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        <form onSubmit={handleSubmit}>
      <div
        className="flex mx-6"
        style={{ justifyContent: "space-between", marginLeft: "13rem" }}
      >
        <h1 className="text-4xl m-left main-color text-center text-left font-bold leading-none sm:text-6xl">
          Languages
        </h1>
        <input
          type="submit"
          value="Save"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        />

        </div>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            {/* <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label> */}
            <input
              type="text"
              id="Keyskills"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Languages"
              required
            />
          </div>
          <div>
            {/* <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label> */}
            {/* <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Proficiency</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>

              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select> */}
          </div>
        </div>
      </form>

      {showToast && <Toast text="Response Submitted Successfully" />}
    </>
  );
};

export default Languages;
