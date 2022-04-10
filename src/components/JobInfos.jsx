import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'


function JobInfos(props) {

    return(
            <Box>
            <Text variant="h4"> {props.created_at.en} </Text>
            <Text variant="h4"> {props.name} </Text>
            <Box display="flex" flexDirection="row">
                <Text variant="h5"> {props.contract_type.en} </Text>
                <Text variant="h5"> {"==" +props.office.name} </Text>
                <Text variant="h5"> {"==" + props.department.name} </Text>
            </Box>
            </Box>
    )
}

export default JobInfos