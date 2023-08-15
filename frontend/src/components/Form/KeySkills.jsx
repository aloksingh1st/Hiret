import axios from "axios";
import React from "react";
import { useState } from "react";
import Toast from "../Toast";

const KeySkills = (props) => {
  const [keySkills, setkeySkills] = useState("");
  const [reqSkills, setreqSkills] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);


  const handleSave = (e) =>{
    e.preventDefault();
    const obj = {
      reqSkills
    }
    props.onChangeVariable(obj);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("handled successfully");
    try {
      const { data } = await axios.put(
        `https://hiret-ltd.onrender.com/api/users/updateProfile/${props.id}`,
        {
          keySkills,
        }
      );

      setShowToast(true);
      setError(null);
      console.log(token);
    } catch (error) {
      setError(error.response.data.message);
    }
  };



  const handleSubmit2 = async (e) => {
    e.preventDefault();

    console.log("handled2 successfully");
    try {
      const { data } = await axios.put(
        `https://hiret-ltd.onrender.com/api/college/updateProfile/${props.id}`,
        {
          reqSkills
        }
      );

      setShowToast(true);

      const timer = setTimeout(() => {
        console.log("tick ticj");
      }, 5000);

      // setShowToast(false);
      // setShowToast(true);
      //   setToken(data.token);
      //   return <Toast text="Profile Updated Successfully"/>
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
      <div
        className="flex mx-6"
        style={{ justifyContent: "space-between", marginLeft: "13rem" }}
      >
        <h1 className="text-4xl m-left main-color text-center text-left font-bold leading-none sm:text-6xl">
          {props.val ? "Required Key Skills" : "Key Skills"}
        </h1>
        
      </div>
      <form onSubmit={props.val ? handleSave : handleSubmit}>
        <input
          type="submit"
          value="Save"

          class="text-white m-top bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        />
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            {/* <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label> */}
            <input
              type="text"
              id="Keyskills"
              value={keySkills}
              onChange={(e) => {setkeySkills(e.target.value)
                setreqSkills(e.target.value) ;
              }}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Key Skills"
              required
            />
          </div>
          <div>
            {/* <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label> */}
            {/* <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Proficiency</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select> */}
          </div>
        </div>
      </form>


      {showToast &&(

<Toast text="Response Submitted Successfully"/>
)
}


    </>
  );
};

export default KeySkills;
