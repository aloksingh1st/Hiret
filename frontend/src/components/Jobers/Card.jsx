import React from 'react'

const Card = (props) => {
  return (
    <>

<div className="w-full max-w-sm m-5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        {/* <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5> */}
        <div className="flex items-baseline text-gray-900 dark:text-white">
            {/* <span className="text-3xl font-semibold">$</span> */}
            <span className="text-3xl font-extrabold tracking-tight">{props.sno}</span>
            {/* <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span> */}
        </div>
        {/* <!-- List --> */}
        <ul role="list" className="space-y-5 my-7">
            <li className="flex space-x-3">
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{props.first}</span>
            </li>
            <li className="flex space-x-3">
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{props.second}</span>
            </li>
            <li className="flex space-x-3">
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{props.third}</span>
            </li>
        </ul>
    </div>

    </>
  )
}

export default Card