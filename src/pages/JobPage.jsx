import JobDetails from "../components/Jobdetails"
import JobInfos from "../components/JobInfos"
import { useParams } from 'react-router-dom'


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