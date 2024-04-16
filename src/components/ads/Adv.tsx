import { Box, Image, Text, Heading } from '@chakra-ui/react'
import React from 'react'

export function AdvSidebar() {
   const lazyRoot = React.useRef(null)

   return (
      <>
         <Box>
            <a
               href=""
               target="_blank"
               rel="noopener noreferrer"
            >
               <Text mb={3} textAlign="center" fontSize="xs">
                  <i>Sponszor helye</i>
               </Text>
               <Image
                  boxSize="180px"
                  objectFit="cover"
                  src="/ondin.svg"
                  alt="adv"
                  mx="auto"
               />
               <Heading as="h2" fontSize="l" mt={3} textAlign="center">
                  Lelkes és kedves
                  <br />
                  támogatónk
               </Heading>
            </a>
         </Box>
         <Box borderTop="1px" borderColor="gray.200" m={6} py={6}>
            <a href="">
               <Text mb={3} textAlign="center" fontSize="xs">
                  <i>Szponzorálta NagySzponzor</i>
               </Text>
               <Image
                  boxSize="180px"
                  objectFit="cover"
                  src="/iceberg.jpeg"
                  alt="adv"
                  mx="auto"
               />
               <Heading as="h2" fontSize="l" mt={3} textAlign="center">
                  Második lelkes és kedves
                  <br />
                  szponzorunk
               </Heading>
            </a>
         </Box>
      </>
   )
}
