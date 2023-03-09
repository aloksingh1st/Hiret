import React from 'react'

const Courosel = () => {
  return (
    <>

<div id="animation-carousel" class="relative" data-carousel="static">
    {/* <!-- Carousel wrapper --> */}
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src="https://thumbs.dreamstime.com/b/design-concept-word-education-website-banner-112452902.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 2 --> */}
        <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src="https://img.freepik.com/free-vector/teacher-concept-professor-giving-lesson-classroom-school-college-workers-idea-education-knowledge-isolated-flat-vector-illustration_613284-1754.jpg?size=626&ext=jpg&ga=GA1.2.824593082.1678251174&semt=ais" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 3 --> */}
        <div class="hidden duration-200 ease-linear" data-carousel-item="active">
            <img src="https://img.freepik.com/free-vector/happy-students-pupils-watching-study-webinar-isolated-flat-illustration_74855-14070.jpg?w=1380&t=st=1678251277~exp=1678251877~hmac=58081a34b24f3f23982aca0446a55b41d0202f35f8d5b7311860fbeb4ef176d2" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 brand dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-black brand sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center brand w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:black group-focus:ring-black dark:group-focus:ring-bla-800/70 group-focus:outline-none">
        <svg aria-hidden="true" class="w-5 h-5 text-black brand sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

    </>
  )
}

export default Courosel