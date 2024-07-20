import React from 'react'
import { useGetJobsQuery } from '../store/api/jobsApi'
import JobCard from '../components/JobCard'

export default function Home() {
  const {data: jobs} = useGetJobsQuery()
  
  return (
    <div className='container'>
      <div className='flex gap-5 flex-wrap'>
        {
          jobs?.map((job) => (
            <JobCard card={job} />
          ))
        }
      </div>
    </div>
  )
}
