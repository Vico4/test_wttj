import Searchbar from '../components/Searchbar'
import JobInfos from '../components/JobInfos'
import { Loader } from '@welcome-ui/loader'
import { Box } from '@welcome-ui/box'
import { Search } from '@welcome-ui/search'
import { Stack } from '@welcome-ui/stack'
import { Text } from '@welcome-ui/text'
import { useState, useEffect } from 'react'


function JobList() {

    const [jobList, getJobList] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k')
            const data = await response.json()
            console.log(data.jobs)
            getJobList(data.jobs)
          } catch (err) {
            console.log(err)
            setError(true)
          } finally {
            setLoading(false)
          }
        }
        setLoading(true)
        fetchData()
      }, [])


    return(
        <Box display="flex" w="100%" justifyContent="center" alignItems="center" backgroundColor="nude.100">
            <Stack>
                <Text variant='h1'>Welcome to the jungle</Text>
                <Searchbar />
                {isLoading ? 
                    (<Loader/>) : 
                    (<>{jobList.map((job) => (<p>{job.name}</p>))}</>)
                    }
                <JobInfos />
            </Stack>
        </Box> 
    )
}

export default JobList