import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { Button } from '@welcome-ui/button'
import JobDetails from './Jobdetails'
import { useState } from 'react'
import { Accordion } from '@welcome-ui/accordion'
import { Modal, useModalState } from '@welcome-ui/modal'


// intégrer bouton "see more" et details en déroulé ou en pop-up ? 
// intégrer bouton apply ? 

function JobInfos(props) {
    const urls = props.websites_urls
    const wttj_url = urls.find(element => element.website_reference === "wttj_fr")
    const url = wttj_url.url 
    const modal = useModalState()
    

    return(
            <Box>
            <Text variant="h4"> {props.created_at.en} </Text>
            <Text variant="h4"> {props.name} </Text>
            <Box display="flex" flexDirection="row">
                <Text variant="h5"> {props.contract_type.en} </Text>
                <Text variant="h5"> {props.office.name} </Text>
            </Box>
            </Box>
    )
}

export default JobInfos