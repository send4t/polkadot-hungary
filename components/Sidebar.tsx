import { SimpleGrid, Heading, Box, Text, Grid, GridItem } from '@chakra-ui/react'
import { AdvSidebar } from './Adv'
import { CollectionsTag, ParachainPolkadot, ParachainKusama, Projects } from './Alltags'


export default function Sidebar(){
    return(
        <>
        <Box pb={6}>
            <CollectionsTag />
        </Box>
        <Box borderTop='1px' borderColor='gray.200' pt={6} pb={6}>
            <AdvSidebar />
        </Box>
        <Box borderTop='1px' borderColor='gray.200' pt={6} pb={6}>
            <ParachainPolkadot />
        </Box>
        <Box borderTop='1px' borderColor='gray.200' pt={6} pb={6}>
            <ParachainKusama />
        </Box>
        <Box borderTop='1px' borderColor='gray.200' pt={6} pb={6}>
            <Projects />
        </Box>
        </>
    )
}