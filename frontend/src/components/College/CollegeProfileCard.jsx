import React from "react";

import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { HomeModernIcon } from "@heroicons/react/24/solid";

const CollegeProfileCard = (props) => {
  return (
    <>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a> */}

        <div class="w-full max-w-sm brand border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-end px-4 pt-4">
          </div>
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://www.seekpng.com/png/detail/37-373521_view-schools-school-illustration-png.png"
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-white-900 dark:text-white">
              {props.name}
            </h5>
            <span class="text-sm flex text-left text-white-500 dark:text-gray-400">
              <CalendarDaysIcon class="h-6 h-6" />
              {props.number}
            </span>
            <span class="text-sm text-left flex text-white-500 dark:text-gray-400">
              <HomeModernIcon class="h-6 h-6" />
              {props.address}
            </span>

            <span class="text-sm text-left flex text-white-500 dark:text-gray-400">
              <HomeModernIcon class="h-6 h-6" />
              {props.reqSkills}
            </span>
          </div>
        </div>

        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Job Details
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.details}
          </p>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Role Required
            </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.role}
          </p>
          {/* <a
            href="#"
            class="inline-flex brand items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Apply Now
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a> */}
        </div>
      </div>
    </>
  );
};

export default CollegeProfileCard;
