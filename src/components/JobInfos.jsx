import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { Button } from '@welcome-ui/button'
import JobDetails from './Jobdetails'
import { useState } from 'react'
import { Accordion } from '@welcome-ui/accordion'
import { Modal, useModalState } from '@welcome-ui/modal'




// afficher toutes les infos essentiels 
// intégrer bouton "see more" et details en déroulé ou en pop-up ? 
// intégrer bouton apply ? 

function JobInfos(props) {
    const urls = props.websites_urls
    const wttj_url = urls.find(element => element.website_reference === "wttj_fr")
    const url = wttj_url.url 
    const modal = useModalState()
    

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
            <Modal.Trigger as={Button} {...modal}>
                Open modal
            </Modal.Trigger>
            <Modal {...modal} ariaLabel="example">
                <Modal.Content>
                    <JobDetails description={props.description}
                    profile={props.profile}
                    process={props.recruitment_process}
                    salary={props.salary}
                     />
                </Modal.Content>
        </Modal>
            <Button as="a" href={url} target="_blank"> Apply </Button>
        </Box>
    )
}

export default JobInfos