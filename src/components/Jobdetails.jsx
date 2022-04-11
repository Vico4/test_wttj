import { Button } from "@welcome-ui/button"
import JobInfos from "./JobInfos"
import { Text } from '@welcome-ui/text'
import {Box} from '@welcome-ui/box'


function JobDetails(props) {

    return(
        <>
        <JobInfos {...props}/>
        <Text variant="body1">{props.start_date ? 
            (props.office.name === "Paris" ? 
                "date de début: " + props.start_date.fr :
                "starting on the " + props.start_date.en) : 
                null}</Text>
        <Text variant="h4"> Description </Text>
        <div dangerouslySetInnerHTML={{__html: props.description}}></div>
        <Text variant="h4"> Profil recherché </Text>
        <div dangerouslySetInnerHTML={{__html: props.profile}}></div>
        <div>{props.salary.min && "salaire minimum : " + props.salary.min + props.salary.currency}</div>
        <div>{props.salary.min && "salaire maximum : " + props.salary.max}</div>
        <Box w="100%" display="flex" justifyContent="center" alignItems="center">
        <Button as="a" href={props.url} target="_blank" > Apply </Button>
        </Box>
        </>
    )
}

export default JobDetails