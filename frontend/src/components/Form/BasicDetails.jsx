import axios from "axios";
import React from "react";
import { useState } from "react";
import Toast from "../Toast";


const BasicDetails = (props) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [number, setNumber] = useState("")
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState();
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);



  const handleSave = (e) =>{
    e.preventDefault();
    const obj = {
      name,
      number,
      address,
      pincode,
      email,
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
            name,
            dob,
          number,
          address,
          pincode,
          email,
        }
        );

        setShowToast(true)

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


  const handleSubmit2 = async (e) => {
    e.preventDefault();

   


    console.log("handled2 successfully");
    try {
      const { data } = await axios.post(
        `https://hiret-ltd.onrender.com/api/college/createJob`,
        {
            name,
          number,
          address,
          pincode,
          email,
        }
        );

        setShowToast(true)

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

      <div>
        <div
          classNameName="flex mx-6"
          style={{ justifyContent: "space-between", marginLeft: "13rem" }}
        >
          <h1 classNameName="text-4xl m-left main-color text-center text-left font-bold leading-none sm:text-6xl">
            Basic Details
          </h1>
          </div>
        <form onSubmit={props.val ? handleSave : handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              {/* <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label> */}
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                required

              />
            </div>

            <div>
              {/* <label for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label> */}
              <input
               type="date"
               id="dob"
               placeholder="DOB"
               value={dob}
               onChange={(e) => setDob(e.target.value)}
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               required

              />
            </div>

            <div>
              {/* <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label> */}
              <input

               type="tel"
               id="number"
               value={number}
               onChange={(e) => setNumber(e.target.value)}
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Phone No"
               required

              />
            </div>
          </div>
          <div className="mb-6">
            {/* <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website URL</label> */}
            <input
             type="text"
             id="address"
             value={address}
             onChange={(e) => setAddress(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Address"
              required
            />
          </div>
          <div className="mb-6">
            {/* <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label> */}
            <input
             type="number"
             id="pincode"
             value={pincode}
             onChange={(e) => setPincode(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="pincode"
              required
            />
          </div>
          <div className="mb-6">
            {/* <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label> */}
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            {/* <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        </div> */}
            {/* <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label> */}
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>

     {showToast &&(

         <Toast text="Response Submitted Successfully"/>
         )
     }
    </>
  );
};

export default BasicDetails;
