import axios from "axios";
import React, { useState } from "react";
import BasicDetails from "./Form/BasicDetails";
import KeySkills from "./Form/KeySkills";
import ProfileSummary from "./Form/ProfileSummary";
import WorkExp from "./Form/WorkExp";
import Toast from "./Toast";


function JobStepper() {

  // 
  const [jobData, setJobData] = useState({});
  const [showToast, setShowToast] = useState(false);

  const [error, setError] = useState();

    const user = JSON.parse(localStorage.getItem('user'));
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChildVar =(data) =>{
  //  Object.assign(Jobdata, data);
  var temp = {...data, ...jobData}
  setJobData(temp);
   console.log(jobData)
  }


  const handleSubmit2 = async (e) => {
    e.preventDefault();

    console.log(jobData);
    try {
      console.log("trying ");
      const { data } = await axios.post(
        `https://hiret-ltd.onrender.com/api/college/createJob`,
        {...jobData}
        );

        setShowToast(true)


      setError(null);
      // console.log(token);
    } catch (error) {
      alert("something went wrong");
      setError(error);
      console.log(error.message);
    }
  };

  const renderStep = (step) => {
    switch (step) {
      case 1:
        return (
          <div className="flex-1 mr-4">
            {/* <h2 className="text-lg font-medium mb-2">Step 1: Personal Information</h2> */}
            <BasicDetails val={true} id={user._id}  onChangeVariable={handleChildVar}/>
          </div>
        );
      case 2:
        return (
          <div className="flex-1 mr-4">
            {/* <h2 className="text-lg font-medium mb-2">Step 2: Shipping Information</h2> */}
            <ProfileSummary val={true} id={user._id} onChangeVariable={handleChildVar}/>
          </div>
        );
      case 3:
        return (
          <div className="flex-1">
            {/* <h2 className="text-lg font-medium mb-2">Step 3: Payment Information</h2> */}
            <WorkExp val={true} id={user._id} onChangeVariable={handleChildVar}/>
          </div>
        );

        case 4:
            return (
              <div className="flex-1">
                {/* <h2 className="text-lg font-medium mb-2">Step 3: Payment Information</h2> */}
                <KeySkills val={true} id={user._id} onChangeVariable={handleChildVar}/>
              </div>
            );
      default:
        return null;
    }
  };

  return (
    <div className="justify-between">
      {renderStep(currentStep)}
      <div className="justify-between mt-8">
        <button
          className={`px-4 py-2 rounded-full text-gray-600 font-medium ${
            currentStep === 1 ? "bg-gray-200" : "bg-blue-500"
          }`}
          onClick={handlePrevStep}
          disabled={currentStep === 1}
        >
          Back
        </button>
        {currentStep < 4 ? (
          <button
            className="px-4 py-2 bg-blue-500 rounded-full text-white font-medium"
            onClick={handleNextStep}
          >
            Next
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-green-500 rounded-full text-white font-medium"
            type="submit"
            onClick={handleSubmit2}
          >
            Submit
          </button>
        )}
      </div>

    {showToast ? <Toast text="Job Created Successfully" /> :  null }
    </div>
  );
}

export default JobStepper;
