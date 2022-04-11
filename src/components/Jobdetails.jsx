import { Button } from "@welcome-ui/button"
import JobInfos from "./JobInfos"
import { Text } from '@welcome-ui/text'
import {Box} from '@welcome-ui/box'


function JobDetails(props) {

    return(
        <>
        <JobInfos {...props}/>
        <Text variant="h4"> Description </Text>
        <div dangerouslySetInnerHTML={{__html: props.description}}></div>
        <Text variant="h4"> Profil recherché </Text>
        <div dangerouslySetInnerHTML={{__html: props.profile}}></div>
        <div>{props.salary.min && props.salary.min}</div>
        <Box w="100%" display="flex" justifyContent="center" alignItems="center">
        <Button as="a" href={props.url} target="_blank" > Apply </Button>
        </Box>
        </>
    )
}

export default JobDetails