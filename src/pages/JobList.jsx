import { Loader } from '@welcome-ui/loader'
import { Box } from '@welcome-ui/box'
import { Search } from '@welcome-ui/search'
import { Stack } from '@welcome-ui/stack'
import { Text } from '@welcome-ui/text'
import { useState, useEffect } from 'react'
import JobCard from '../components/Jobcard'
import { InputText } from '@welcome-ui/input-text'




function JobList() {

    const [jobList, getJobList] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    // mettre un state filter géré par un composant form
    // const [groupBy, setGroupBy] = useState('department')
    const [search, setSearch] = useState('')

    const handleChange = (event) => {
        setSearch(event.target.value)
      }

    const handleSelect = (event) => {
        const group = event.target.value
        setLoading(true)
        console.log(jobList[0][group])
        const groupedJobList = jobList.sort(function compare(){})
        getJobList(groupedJobList)
        setLoading(false)
    }

    // utiliser composant Select pour grouper par office.name et department.name
    // conditionner l'affichage en fonction de la recherche et des filtres 

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

    if (error) {
        return (<p>Something went wrong</p>)
    }

    return(
        <Box display="flex" w="100%" justifyContent="center" alignItems="center" backgroundColor="nude.100">
            <Stack>
                <Text variant='h1'>Welcome to the jungle</Text>
                <InputText 
                    name="search" 
                    placeholder="Your dream job ?" 
                    onChange={handleChange}
                    />
                {isLoading ? 
                    (<Loader/>) : 
                    (<>{jobList.map((job, index) => (
                        job.name.includes(search) || !search ? 
                    <JobCard {...job} key={index} /> : null
                    ))}</>)
                    }
            </Stack>
        </Box> 
    )
}

export default JobList