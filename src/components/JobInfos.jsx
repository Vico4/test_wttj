import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { Badge } from '@welcome-ui/badge'
import { LocationIcon } from '@welcome-ui/icons.location'
import { ContractIcon } from '@welcome-ui/icons.contract'
import { DepartmentIcon } from '@welcome-ui/icons.department'





function JobInfos(props) {

    return(
            <Box w="100%">
            <Text variant="h5" textAlign='end'> {props.created_at.en} </Text>
            <Text variant="h3"> {props.name} </Text>
            <Box display="flex" flexDirection="row">
                <Text variant="body1" marginRight="3%"> <ContractIcon/> {props.contract_type.en} </Text>
                <Text variant="body1" marginRight="3%"> <LocationIcon/> {props.office.name} </Text>
                <Text variant="body1"> <DepartmentIcon/> {props.department.name} </Text>
            </Box>
            </Box>
    )
}

export default JobInfos