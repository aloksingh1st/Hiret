import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const RecentJobs = () => {
  const [users, setUsers] = useState([]);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);
  const [totalItems, setTotalItems] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://hiret-ltd.onrender.com/api/college/getjobs?page=${currentPage}&limit=${limit}`
      );
      setUsers(response.data);
    }

    fetchData();
  }, [currentPage]);

  return (
    <>
      <div className="w-full bg-white border my-12 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="sm:hidden">
          <label for="tabs" className="sr-only">
            Select tab
          </label>
          <select
            id="tabs"
            className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Statistics</option>
          </select>
        </div>
        <ul
          className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
          id="fullWidthTab"
          data-tabs-toggle="#fullWidthTabContent"
          role="tablist"
        >
          <li className="w-full">
            <button
              id="jobs-tab"
              data-tabs-target="#jobs"
              type="button"
              role="tab"
              aria-controls="jobs"
              aria-selected="true"
              className="inline-block w-full p-4 rounded-tl-lg brand focus:outline-none dark:bg-gray-700"
            >
              Recent Jobs
            </button>
          </li>
        </ul>
        <div
          id="fullWidthTabContent"
          className="border-t border-gray-200 dark:border-gray-600"
        >
          <div
            className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
            id="jobs"
            role="tabpanel"
            aria-labelledby="jobs-tab"
          >
            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      College name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Role
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Required Skills
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Contact
                    </th>
                  </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        console.log(user);
                      return (
                          <>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {user.name}
                          </th>
                          <td class="px-6 py-4">{user.role}</td>
                          <td class="px-6 py-4">{user.reqSkills}</td>
                          <td class="px-6 py-4">{user.number}</td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentJobs;
