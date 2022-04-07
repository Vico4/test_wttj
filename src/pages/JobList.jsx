import Searchbar from '../components/Searchbar'
import JobInfos from '../components/JobInfos'
import { Loader } from '@welcome-ui/loader'
import { Box } from '@welcome-ui/box'
import { Search } from '@welcome-ui/search'
import { Stack } from '@welcome-ui/stack'
import { Text } from '@welcome-ui/text'
import { useState, useEffect } from 'react'



function JobList() {

    return(
        <Box display="flex" w="100%" justifyContent="center" alignItems="center" backgroundColor="nude.100">
        <Stack>
        <Text variant='h1'>Welcome to the jungle</Text>
        <Searchbar />
        <JobInfos />
        </Stack>
        </Box>
        
    )
}

export default JobList