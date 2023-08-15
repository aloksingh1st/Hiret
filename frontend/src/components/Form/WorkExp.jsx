import axios from "axios";
import React from "react";
import { useState } from "react";
import Toast from "../Toast";

const WorkExp = (props) => {
  const [workExperience, setWorkExperience] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [role, setRole] = useState("");


  const handleSave = (e) =>{
    e.preventDefault();
    const obj = {
      role
    }
    props.onChangeVariable(obj);
  }



  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("handled successfully");
    try {
      const { data } = await axios.put(
        `https://hiret-ltd.onrender.com/api/users/updateProfile/${id}`,
        {
          workExperience,
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
          role,
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
      <form onSubmit={props.val ? handleSave : handleSubmit}>
        <div
          className="flex mx-6"
          style={{ justifyContent: "space-between", marginLeft: "13rem" }}
        >
          <h1 className="text-4xl m-left main-color text-center text-left font-bold leading-none sm:text-6xl">
            {props.val ? "Role" : "Work Experience"}
          </h1>
          <input
            type="submit"
            value="Save"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          />
        </div>
        <label
          for="message"
          class="text-center block mb-2 text-sm m-top font-medium text-gray-900 dark:text-white"
        >
        {props.val ? "Write the Role for the Job Required":"Write a meaningful summary of more than 50 characters." }
        </label>
        <textarea
          id="message"
          rows="4"
          value={workExperience}
          onChange={(e) => {
            setWorkExperience(e.target.value);
            setRole(e.target.value);
          }}
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </form>

      {showToast && <Toast text="Response Submitted Successfully" />}
    </>
  );
};

export default WorkExp;
