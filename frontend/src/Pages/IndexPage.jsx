import React from 'react'
import CardContainer from '../components/CardContainer'
import Courosel from '../components/Courosel'
import FilteredJobs from '../components/FilteredJobs'
import RecentJobs from '../components/RecentJobs'
import RecentNews from '../components/RecentNews'
import SearchBox from '../components/SearchBox'
import Testimonial from '../components/Testimonial'

const IndexPage = () => {
  return (
    <>
    <Courosel/>
    {/* <SearchBox className="my-5"/> */}
    <h2 className='text-3xl font-bold my-12'>Why Hiret ?</h2>
    <CardContainer />
    <RecentNews />
    <RecentJobs />

    {/* <FilteredJobs /> */}
    <div className="extram subbrand">
    <Testimonial />
    </div>
    </>
  )
}

export default IndexPage