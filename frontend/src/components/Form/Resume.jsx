import React from 'react'

const Resume = () => {
  return (
    <>
    <div className="flex mx-6" style={{"justifyContent" : "space-between", "marginLeft":"13rem"}}>
    <h1 className='text-4xl m-left main-color text-center text-left font-bold leading-none sm:text-6xl'>Resume</h1>
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
    </div>
    
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
    </>
  )
}

export default Resume