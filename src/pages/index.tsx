import type { GetServerSideProps, InferGetStaticPropsType } from 'next'
import { useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
   Box,
   Button,
   Center,
   Grid,
   GridItem,
   Heading,
   SimpleGrid,
   Text,
   useColorModeValue,
} from '@chakra-ui/react'
import Nav from '../components/navigation/Nav'
import {
   SpotlightHome1,
   Twitter,
} from '../components/socials/Twitter'
import Sidebar from '../components/Sidebar'
import CardComponent, { ITcard } from '../components/cards/CardNews'
import HeadSEO from '../components/seo/HeadSEOPage'
import CardComponentVideo, { ITcardVideo } from '../components/cards/CardVideo'
import {
   dotLeapQuery,
   highPostQuery,
   kusamarianQuery,
   personalQuery,
   wagMediaItalyQuery,
} from '../graphql/query/main'
import { Tags } from '../components/tags'
import { collectionsTag } from '../components/tags/tags'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   const { data: polkadotHu } = await wagMediaItalyQuery()
   const { data: onlyPersonal } = await personalQuery()
   const { data: highPost } = await highPostQuery()
   const { data: kusamarian } = await kusamarianQuery()
  // const { data: dotleap } = await dotLeapQuery()

   return {
      props: {
         polkadotHu: polkadotHu.posts,
         onlyPersonal: onlyPersonal.posts,
         highPostHome: highPost.postById,
         kusamarian: kusamarian.posts,
         // dotleap: dotleap.posts,
      },
   }
}

function Home({
   polkadotHu,
   onlyPersonal,
   highPostHome,
    kusamarian,
   // dotleap,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
   let router = useRouter()

   const backgroundBox = useColorModeValue('gray.100', 'gray.900');
    const iframeHeight = useBreakpointValue({ base: "300", md: "400" });

   if (router.isFallback) {
      return (
         <div>
            <Box p={4}>
               <SimpleGrid columns={2} spacing={6}>
                  <Text>Loading...</Text>
               </SimpleGrid>
            </Box>
         </div>
      )
   }
   return (
      <>
         <HeadSEO
            titlePage={'Polkadot Hungary Community'}
            imagePage={'polkadotHU.png'}
            summaryPage={
               'Egy oldal magyarul a Polkadotról és Kusamaról, hírekkel, frissítésekkel, pletykákkal, videókkal és fordításokkal.'
            }
         />
         <Nav />
         <main>
            <SimpleGrid 
  px={{ base: 0, md: 32 }} 
  py={20} 
  spacing={10}
  columns={{ base: 1, md: 2 }} // Add this for 2 columns on medium screens
  alignItems="center" // Add this for vertical alignment
>
  {/* Title Box */}
  <Box>
    <Heading as="h1" size={{ base: '2xl', md: '4xl' }}>
      Üdvözöl
      <br />
      a Polkadot Hungary
    </Heading>
    <Box pt={3}>
      <Text>
        Egy oldal magyarul a Polkadotról és Kusamaról, hírekkel, frissítésekkel, pletykákkal, videókkal és fordításokkal.
      </Text>
    </Box>
  </Box>


</SimpleGrid>

            <Grid
               templateColumns="repeat(12, 1fr)"
               gap={{ base: 3, md: 4, lg: 6 }}
               p={30}
            >
               <GridItem
                  colSpan={{ base: 12, md: 9 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Heading as="h2" fontSize="l" pb={6}>
                  A Polkadot és Kusama ökoszisztéma projektjei a Polkadot Hungary Community csapatától.
                  </Heading>
                  <Box>
                     <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                        {(polkadotHu as ITcard[]).slice(0, 9).map((post) => (
                           <CardComponent {...post} key={post.id} />
                        ))}
                     </SimpleGrid>
                  </Box>
                  <Center py={6}>
                     <Button colorScheme="teal" variant="solid">
                        <Link href="/news">
                           <a>A blog összes cikke</a>
                        </Link>
                     </Button>
                  </Center>
               </GridItem>
               {/* <GridItem
                  colSpan={{ base: 12, md: 3 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
                  display={{ base: 'none', md: 'inline-block' }}
               >
                  <Heading as="h2" fontSize="l" pb={6}>
                     Da Twitter
                  </Heading>
                  <Box rounded={'md'}>
                     <Twitter />
                  </Box>
               </GridItem> */}

               

               <GridItem
                  colSpan={{ base: 12, md: 3 }}
               >
                  <Box
                     borderTop="1px"
                     borderColor="gray.200"
                     p={6}
                     bg={backgroundBox}
                  >
                     <Heading as="h2" fontSize="l" pb={6}>
                        Kiemelt cikkek
                     </Heading>
                     <CardComponent
                        {...(highPostHome as ITcard)}
                        key={(highPostHome as ITcard).id}
                     />
                  </Box>
               </GridItem>
            </Grid>

            <Grid templateColumns="repeat(12, 1fr)"
               gap={{ base: 3, md: 4, lg: 6 }}
               p={30}>
            <GridItem
                  colSpan={{ base: 12, md: 9 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Heading as="h2" fontSize="l" pb={6}>
                     A Polkadot hírei magyarul
                  </Heading>
                  <Box>
                     <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                        {(onlyPersonal as ITcard[]).slice(0, 9).map((post) => (
                           <CardComponent {...post} key={post.id} />
                        ))}
                     </SimpleGrid>
                  </Box>
                  <Center py={6}>
                     <Button colorScheme="teal" variant="solid">
                        <Link href="/news">
                           <a>Összes cikk</a>
                        </Link>
                     </Button>
                  </Center>
               </GridItem>
               <GridItem
                  colSpan={{ base: 12, md: 3 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Heading as="h2" fontSize="l" pb={6}>
                     Kövess minket Twitteren
                  </Heading>
                  <Twitter />
               </GridItem>
            </Grid>

            <Grid templateColumns="repeat(12, 1fr)" gap={4} p={30}>
   <GridItem
      colSpan={{ base: 12, md: 12 }}
      borderTop="1px"
      borderColor="gray.200"
      pt={6}
   >
      <Box mb={6}>
         <Heading as="h2" mb={6}>
            Legfrissebb Polkadot Hungary Community videók
         </Heading>
         <Text>
            Legyél naprakész a videóinkkal 
         </Text>
         <Box pt={6}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
               {(kusamarian as ITcardVideo[])
                  .slice(0, 3)
                  .map((post) => (
                     <CardComponentVideo {...post} key={post.id} />
                  ))}
            </SimpleGrid>
         </Box>
      </Box>
   </GridItem>
</Grid>
            {/* <Grid templateColumns='repeat(12, 1fr)' gap={4} p={30}>
             <GridItem colSpan={{base: 12, md: 12}} borderTop='1px' borderColor='gray.200' pt={6}>
             <Box mb={6}>
               <Heading as='h2' mb={6}>From the officle Paraverce</Heading>
               <Text>Officle projects channel on Paraverse</Text>
               <Box pt={6}>
                     <SimpleGrid columns={{base: 1, md: 4}} spacing={6}>
                         {(otherPost as ITcard[]).slice(0, 12).map((post) => 
                           <CardComponent {...post} key={post.id}/>                       
                         )}
                     </SimpleGrid>
                 </Box>
             </Box>
   
             </GridItem>
           </Grid> */}
         </main>
      </>
   )
}

export default Home
