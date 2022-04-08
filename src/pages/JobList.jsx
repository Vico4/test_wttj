import Searchbar from '../components/Searchbar'
import JobInfos from '../components/JobInfos'
import { Loader } from '@welcome-ui/loader'
import { Box } from '@welcome-ui/box'
import { Search } from '@welcome-ui/search'
import { Stack } from '@welcome-ui/stack'
import { Text } from '@welcome-ui/text'
import { useState, useEffect } from 'react'
import { Modal, useModalState } from '@welcome-ui/modal'
import JobCard from '../components/Jobcard'


function JobList() {

    const [jobList, getJobList] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    // mettre un state filter géré par un composant form
    const [filters, setFilters] = useState({})
    const [search, setSearch] = useState('')
    const modal = useModalState()

    const handleChange = (newValue) => {
        setSearch(newValue)
      }



    // afficher tous les détails dans un truc déroulant plutôt que dans JobPage 
    // pour pas multiplier les fetch ? 

    // utiliser formulaire controlé avec onChange et onSubmit pour setSearch
    // pas vraiment besoin du composant SearchBar ? 

    // conditionner l'affichage en fonction de la recherche et des filtres 

    // inclure bouton postuler ici ou dans le composant JobInfos ? 

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
                <Search 
                    placeholder="Your dream job ?"
                    onChange={handleChange}
                    />
                {isLoading ? 
                    (<Loader/>) : 
                    (<>{jobList.map((job, index) => (
                        {search} === job.name || {search} === '' &&
                    <JobCard {...job} key={index} />
                    ))}</>)
                    }
            </Stack>
        </Box> 
    )
}

export default JobList