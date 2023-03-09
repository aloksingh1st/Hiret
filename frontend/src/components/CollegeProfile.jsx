import React from "react";
import BasicDetails from "../components/Form/BasicDetails";
import ProfileSummary from "./Form/ProfileSummary";
import WorkExp from "./Form/WorkExp";
import Education from "./Form/Education";
import KeySkills from "./Form/KeySkills";
import Resume from "./Form/Resume";
import Languages from "./Form/Languages";
import JobStepper from "./JobStepper";

const CollegeProfile = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const id = user._id;

  console.log(id);
  
  return (
    <>
      <hr class="h-px my-8 bg-gray-200 border-2 dark:bg-gray-700 m-bottom"></hr>

      {/* <button class="text-white m-bottom bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Create New Job
      </button> */}


{/* <!-- Modal toggle --> */}
<button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block brand text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Create New Job
</button>

{/* <!-- Main modal --> */}
<div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-6 space-y-6">
               <JobStepper />
            </div>
            {/* <!-- Modal footer --> */}
        </div>
    </div>
</div>


      <hr class="h-px my-8 bg-gray-200 border-2 dark:bg-gray-700 m-bottom"></hr>
    </>
  );
};

export default CollegeProfile;
