import { Loader } from '@welcome-ui/loader'
import { Box } from '@welcome-ui/box'
import { Stack } from '@welcome-ui/stack'
import { Text } from '@welcome-ui/text'
import { useState, useEffect } from 'react'
import JobCard from '../components/Jobcard'
import { InputText } from '@welcome-ui/input-text'
import { RadioGroup } from '@welcome-ui/radio-group'
import { Field } from '@welcome-ui/field'


function JobList() {

    const [jobList, getJobList] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [search, setSearch] = useState('')

    const handleChange = (event) => {
        setSearch(event.target.value)
      }

    const handleSelect = (event) => {
        const group = event.target.value
        setLoading(true)
        const groupedJobList = [...jobList]
        if(group === 'published_at') {
            groupedJobList.sort(function compare(a, b) {
                if (a[group] < b[group])
                   return 1;
                if (a[group] > b[group] )
                   return -1;
                return 0;
              })
            console.log(groupedJobList)
        }
        else {
        groupedJobList.sort(function compare(a, b) {
            if (a[group].name < b[group].name)
               return -1;
            if (a[group].name > b[group].name )
               return 1;
            return 0;
          })
        }
        getJobList(groupedJobList)
        setLoading(false)
    }

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
                <Field
                label="Group by :">
                <RadioGroup name="groupBy" 
                    options={[
                    {value: 'office',
                    label: 'office location'},
                    {value: 'department',
                    label: 'department (Media, Tech, etc.)'},
                    {value: 'published_at',
                    label: 'none'}
                    ]} 
                    onChange={handleSelect} />
                </Field>
                {isLoading ? 
                    (<Loader/>) : 
                    (<>{jobList.map((job, index) => (
                        job.name.toLowerCase().includes(search.toLowerCase()) || !search ? 
                    <JobCard {...job} key={index} /> : null
                    ))}</>)
                    }
            </Stack>
        </Box> 
    )
}

export default JobList