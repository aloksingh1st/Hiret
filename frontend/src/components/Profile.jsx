import React from "react";
import BasicDetails from "./Form/BasicDetails";
import Certificates from "./Form/Certificates";
import Education from "./Form/Education";
import KeySkills from "./Form/KeySkills";
import Languages from "./Form/Languages";
import ProfileSummary from "./Form/ProfileSummary";
import Resume from "./Form/Resume";
import WorkExp from "./Form/WorkExp";

const Profile = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const id = user._id;

  console.log(id);

  return (
    <>
      <hr class="h-px my-8 bg-gray-200 border-2 dark:bg-gray-700 m-bottom"></hr>

      <div>
        <div className="flex">
          <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              class="block flex-wrap -mb-px text-sm font-medium text-center"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg"
                  id="basic_details-tab"
                  data-tabs-target="#basic_details"
                  type="button"
                  role="tab"
                  aria-controls="basic_details"
                  aria-selected="false"
                >
                  Basic Details
                </button>
              </li>

              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg"
                  id="profil_summary-tab"
                  data-tabs-target="#profile_summary"
                  type="button"
                  role="tab"
                  aria-controls="profile_summary"
                  aria-selected="false"
                >
                  Profile Summary
                </button>
              </li>

              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg"
                  id="work_exp-tab"
                  data-tabs-target="#work_exp"
                  type="button"
                  role="tab"
                  aria-controls="work_exp"
                  aria-selected="false"
                >
                  Work Experience
                </button>
              </li>

              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg"
                  id="education-tab"
                  data-tabs-target="#education"
                  type="button"
                  role="tab"
                  aria-controls="education"
                  aria-selected="false"
                >
                  Education
                </button>
              </li>

              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg"
                  id="keySkills-tab"
                  data-tabs-target="#keySkills"
                  type="button"
                  role="tab"
                  aria-controls="keySkills"
                  aria-selected="false"
                >
                  Key Skills
                </button>
              </li>

              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  Resume
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="settings-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  Languages
                </button>
              </li>
              {/* <li role="presentation">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Certificates</button>
        </li> */}
            </ul>
          </div>
          <div id="myTabContent">
            <div
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="basic_details"
              role="tabpanel"
              aria-labelledby="basic_details-tab"
            >
              <BasicDetails id={id}/>
            </div>

            <div
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="profile_summary"
              role="tabpanel"
              aria-labelledby="profile_summary-tab"
            >
              <ProfileSummary id={id}/>
            </div>

            <div
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="work_exp"
              role="tabpanel"
              aria-labelledby="work_exp-tab"
            >
              <WorkExp id={id}/>
            </div>

            <div
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="education"
              role="tabpanel"
              aria-labelledby="education-tab"
            >
              <Education id={id}/>
            </div>

            <div
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="keySkills"
              role="tabpanel"
              aria-labelledby="keySkills-tab"
            >
              <KeySkills id={id}/>
            </div>

            <div
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="dashboard"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <Resume id={id}/>
            </div>
            <div
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <Languages id={id}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
