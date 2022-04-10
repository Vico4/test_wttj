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
        <Box display="flex" flexDirection="column" w='100%' 
        backgroundColor="primary.100" border='1px solid black'
        padding='2%' margin='2%'>
            <JobInfos 
                {...props}
            />
            <Modal.Trigger as={Button} {...modal}>
                See details
            </Modal.Trigger>
            <Modal {...modal} ariaLabel="example">
                <Modal.Content>
                    <JobDetails 
                        {...props}
                        url={url}
                     />
                </Modal.Content>
        </Modal>
            <Button as="a" href={url} target="_blank"> Apply </Button>
        </Box>
    )
}

export default JobCard