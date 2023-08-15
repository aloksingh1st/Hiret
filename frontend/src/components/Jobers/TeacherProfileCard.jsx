import React from "react";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { CurrencyRupeeIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { useEffect } from "react";

const TeacherProfileCard = (props) => {
  const [showmodal, setShowmodal] = useState(false);



  const [user, setUser] = useState(null);
  const userId = props.id;

    const fetchData = () => {
      fetch(`https://hiret-ltd.onrender.com/api/users/find/${userId}`)
      .then(response => response.json())
      .then(data => {setUser(data)
        console.log(data);
      })
      .catch(error => console.error(error));

    }



  const openModal = () => {
    setShowmodal(true);
    fetchData();
    
    // console.log(props.id);
  };

  const closeModal = () => {
    setShowmodal(false);
  };

  return (
    <>
      <div className="flex">
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-auto "
        >
          <div className="w-full brand max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="inline-block hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <span className="sr-only">Open dropdown</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://cdn-icons-png.flaticon.com/512/206/206897.png"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {props.name}
              </h5>
              <span className="text-sm text-left flex text-white-500 dark:text-gray-400">
                <BookOpenIcon className="h-6 h-6 text-white-500" />
                {props.subject}
              </span>
              <span className="text-sm text-left text-white-500 flex dark:text-gray-400">
                <CurrencyRupeeIcon className="h-6 h-6 text-white-500" />{" "}
                1,50,000
              </span>
              <span className="text-sm flex text-left text-white-500 dark:text-gray-400">
                <CalendarDaysIcon className="h-6 h-6" />
                {props.availDate}
              </span>
              <span className="text-sm text-left flex text-white-500 dark:text-gray-400">
                <HomeModernIcon className="h-6 h-6" />
                {props.city}
              </span>

              <div className="flex mt-4 space-x-3 md:mt-6">

                <Button onClick={openModal}>Hire Now</Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between p-4 leading-normal">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Profile Summary
              </h5>
              {props.profileSummary}
              <br />
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Work Experience
              </h5>
              {props.workExperience}
            </p>
          </div>
        </a>
      </div>

      <React.Fragment>
        <Modal dismissible={true} show={showmodal} onClose={closeModal}>
          <Modal.Header>Terms of Service</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">

              {user ?(
                <>
             <h1 className="text-xl font-bold text-center uppercase">{user.name}</h1>
             <h2 className="text-center text-xl">Contact : {user.number}</h2>
             <h2 className="text-center text-xl">Address : {user.address}</h2>
             <h2 className="text-center text-xl">Email : {user.email}</h2>
</>
              ) : (
              ""
              )
}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal}>Dismiss</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    </>
  );
};

export default TeacherProfileCard;
