import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import JobDetails from './Jobdetails'
import { Modal, useModalState } from '@welcome-ui/modal'
import JobInfos from './JobInfos'

function JobCard(props) {
    const urls = props.websites_urls
    const wttj_url = urls.find(element => element.website_reference === "wttj_fr")
    const url = wttj_url.url 
    const modal = useModalState()

    return(
        <Box display="flex" flexDirection="column" alignItems='center'
        backgroundColor="light.900" borderRadius="sm" boxShadow="sm" margin="xl" maxWidth={600} minWidth={300}
        padding='2%' paddingTop='0%'>
            <JobInfos 
                {...props}
            />
            <Modal.Trigger as={Button} {...modal} w='30%' margin='1%'>
                See details
            </Modal.Trigger>
            <Modal {...modal} ariaLabel="jobdetails">
                <Modal.Content>
                    <JobDetails 
                        {...props}
                        url={url}
                     />
                </Modal.Content>
        </Modal>
            <Button as="a" href={url} target="_blank" w='30%' margin='1%'> Apply </Button>
        </Box>
    )
}

export default JobCard