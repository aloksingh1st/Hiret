import axios from "axios";
import React, { useState } from "react";
import Toast from "../Toast";


const Education = (props) => {



    const [qualifications, setQualifications] = useState("");
  const [specializations, setSpecializations] = useState("");
  const [institution, setInstitution] = useState("")
  const [grades, setGrades] = useState("");
  const [boardName, setBoardName] = useState("");
  const [yearOfPassing, setyearOfPassing] = useState();
  const [showToast, setShowToast] = useState(false);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);




  const handleSubmit = async (e) => {
    e.preventDefault();

   


    console.log("handled successfully");
    try {
      const { data } = await axios.put(
        `http://localhost:3000/api/users/updateProfile/${props.id}`,
        {
            qualifications,
            specializations,
            institution,
            grades,
            boardName,
            yearOfPassing,
        }
        );

        setShowToast(true)
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
          Education
        </h1>
        {/* <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Save
        </button> */}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Save" class="text-white m-top bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" />
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            {/* <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label> */}
            <input
              type="text"
              id="qualifications"
              value={qualifications}
              onChange={(e) => setQualifications(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Qualification"
              required
            />
          </div>
          <div>
            {/* <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label> */}
            <input
              type="text"
              id="Specialization"
              value={specializations}
              onChange={(e) => setSpecializations(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Specialization"
              required
            />
          </div>
          <div>
            {/* <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label> */}
            <input
              type="text"
              id="Institution"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Institution"
              required
            />
          </div>
          <div>
            {/* <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label> */}
            <input
              type="text"
              id="grades"
              value={grades}
              onChange={(e) => setGrades(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Pass Percentage / Grades"
              required
            />
          </div>

          <div>
            {/* <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label> */}
            <input
              type="text"
              id="board"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Board Name"
              required
            />
          </div>
          <div>
            {/* <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label> */}
            <input
              type="number"
              id="passing_year"
              value={yearOfPassing}
              onChange={(e) => setYearOfPassing(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Year of Passing"
              required
            />
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

export default Education;
