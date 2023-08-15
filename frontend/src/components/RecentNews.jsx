import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const RecentNews = () => {


    const [ans, setAns] = useState();
    const [error, setError] = useState();


    const getNextCustID = () => {
        fetch("https://hiret-ltd.onrender.com/api/college/news")
          .then((response) => {
            // console.log("Success");
            setAns(response.data);
          })
          .catch((e) => {
            console.log("Error");
            // setNextCustIDList([]);
          });
      };
    
      React.useEffect(() => getNextCustID(), []);

  return (
    <>

<div className="w-full bg-white border my-12 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="sm:hidden">
        <label for="tabs" className="sr-only">Select tab</label>
        <select id="tabs" className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Statistics</option>
        </select>
    </div>
    <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
        <li className="w-full">
            <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" className="inline-block w-full p-4 rounded-tl-lg brand focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">RecentNews</button>
        </li>
    </ul>
    <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
        <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <ol>       
                {console.log(ans)} 
                <li>{ans?.news}</li>
            </ol>
        </div>
      
    </div>
</div>

    </>
  )
}

export default RecentNews