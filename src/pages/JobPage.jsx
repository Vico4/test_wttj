import JobDetails from "../components/Jobdetails"
import JobInfos from "../components/JobInfos"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Loader } from '@welcome-ui/loader'


function JobPage() {
    const { jobId } = useParams()

    return(
        <>
            <p>Coucou job n° {jobId}</p>
            <JobInfos />
            <JobDetails />  
        </>
    )
}

export default JobPage