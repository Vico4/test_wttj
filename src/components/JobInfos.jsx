import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { Button } from '@welcome-ui/button'
import JobDetails from './Jobdetails'
import { useState } from 'react'
import { Accordion } from '@welcome-ui/accordion'



// afficher toutes les infos essentiels 
// intégrer bouton "see more" et details en déroulé ou en pop-up ? 
// intégrer bouton apply ? 

function JobInfos(props) {
    const [detailsVisible, showDetails] = useState(false)
    const urls = props.websites_urls
    const wttj_url = urls.find(element => element.website_reference === "wttj_fr")
    const url = wttj_url.url 
    console.log(urls)
    console.log(wttj_url)
    console.log(url)
    

    return(
        <Box display="flex" flexDirection="column" w='100%' 
        backgroundColor="primary.100" border='1px solid black'
        padding='2%' margin='2%'>
            <Text variant="h4"> {props.created_at.en} </Text>
            <Text variant="h4"> {props.name} </Text>
            <Box display="flex" flexDirection="row">
                <Text variant="h5"> {props.contract_type.en} </Text>
                <Text variant="h5"> {props.office.name} </Text>
            </Box>
            <Accordion title="show details" marginBottom="2%">
                <JobDetails 
                    description={props.description}
                    profile={props.profile}
                    process={props.recruitment_process}
                    salary={props.salary}
                     />
            </Accordion>
            <Button as="a" href={url} target="_blank"> Apply </Button>
        </Box>
    )
}

export default JobInfos