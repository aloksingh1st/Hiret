import React from 'react'
import Card from './Card'
import SearchBox from '../SearchBox'
import TeacherProfileCard from './TeacherProfileCard'

const HeroSection = () => {
  return (
    <>
    <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col text-left justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h2 className="second-color text-5xl text-left leading-none sm:text-6xl">Hire 
			</h2>
				<h3 className="text-5xl main-color text-left font-bold leading-none sm:text-6xl">
                    <span className="dark:text-violet-400">The Best Teachers</span> </h3> 
                    <h3 className="text-5xl second-color text-left leading-none sm:text-6xl">
                    For Your
                    </h3>
                    <h3 className="text-5xl main-color text-left font-bold leading-none sm:text-6xl">   
                <span>Academic Success</span>
                </h3>
			<div className="flex flex-col sm:items-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button type="button" class="text-white my-6 brand hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Blue</button>
            </div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://cdni.iconscout.com/illustration/premium/thumb/teacher-teaching-to-student-6170087-5070020.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>  




{/* teACHER <PROFILE></PROFILE> */}



    </>
  )
}

export default HeroSection