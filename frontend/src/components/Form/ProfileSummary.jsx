import axios from "axios";
import React from "react";
import { useState } from "react";
import Toast from "../Toast";

const ProfileSummary = (props) => {
  const [profileSummary, setProfileSummary] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState("")



  const handleSave = (e) =>{
    e.preventDefault();
    const obj = {
      details
    }
    props.onChangeVariable(obj);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("handled successfully");
    try {
      const { data } = await axios.put(
        `http://localhost:3000/api/users/updateProfile/${props.id}`,
        {
          profileSummary,
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
      const { data } = await axios.post(
        `http://localhost:3000/api/college/createJob`,
        {
          details,
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
            {props.val ? "Job Description" : "Profile Summary"}
          </h1>
          <input
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            value="Save"
          />
        </div>
        <label
          for="message"
          class="block mb-2 text-sm m-top font-medium text-gray-900 dark:text-white"
        >{
          !props.val ?

         " Profile Summary should mention the highlights of your career and education and what kind of a career you are looking for." : "Job Description should mention the highlights of your jobs and education and what kind of a job you are looking for."
        }
        </label>

        <textarea
          id="message"
          value={profileSummary}
          onChange={(e) =>{
            setProfileSummary(e.target.value)
            setDetails(e.target.value)
          } 
        }
            
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </form>

      {showToast && <Toast text="Response Submitted Successfully" />}
    </>
  );
};

export default ProfileSummary;
