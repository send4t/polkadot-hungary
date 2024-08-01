import {
   Box,
   SimpleGrid,
   Flex,
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   Image,
   Button
 } from '@chakra-ui/react'
 import { ChevronRightIcon } from '@chakra-ui/icons'
 import { GetServerSideProps, InferGetStaticPropsType } from 'next'
 import HeadSEO from '../components/seo/HeadSEOPage'
 import Nav from '../components/navigation/Nav'
 import { aboutPageQuery } from '../graphql/query/about'
 
 export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   const { data } = await aboutPageQuery()
 
   return {
     props: {
       accounts: data.accounts,
     },
   }
 }
 
 function About({
   accounts,
 }: InferGetStaticPropsType<typeof getServerSideProps>) {
   return (
     <>
       <HeadSEO
         imagePage={'pokadotHU.png'}
         titlePage={'Polkadot Hungary Community'}
         summaryPage={
           'Egy oldal magyarul a Polkadotról és Kusamaról, hírekkel, frissítésekkel, pletykákkal, videókkal és fordításokkal.'
         }
       />
       <Nav />
       <SimpleGrid px={{ base: 0, md: 32 }} py={20} alignItems="center">
         <Box>
           <Image
             src="https://www.polkadothungary.net/polkadotHU.png"
             alt="Polkadot Hungary"
             mx="auto"
             mb={10}
           />
           <Flex direction="column" align="center">
             <Button
               as="a"
               href="https://www.meetup.com/polkadot-hungary/"
               color="#E9208A"
               fontWeight="bold"
               fontSize="lg"
               p={2}
               border="2px solid #E9208A"
               borderRadius="md"
               _hover={{ textDecoration: 'none', bg: '#E9208A', color: '#FFF' }}
               mb={4}
               width={{ base: '80%', md: '40%' }}
             >
               Polkadot meetups Budapest
             </Button>
             <Button
               as="a"
               href="https://www.youtube.com/@polkadothungary5446"
               color="#E9208A"
               fontWeight="bold"
               fontSize="lg"
               p={2}
               border="2px solid #E9208A"
               borderRadius="md"
               _hover={{ textDecoration: 'none', bg: '#E9208A', color: '#FFF' }}
               mb={4}
               width={{ base: '80%', md: '40%' }}
             >
               YouTube
             </Button>
             <Button
               as="a"
               href="https://t.me/polkadothungary"
               color="#E9208A"
               fontWeight="bold"
               fontSize="lg"
               p={2}
               border="2px solid #E9208A"
               borderRadius="md"
               _hover={{ textDecoration: 'none', bg: '#E9208A', color: '#FFF' }}
               mb={4}
               width={{ base: '80%', md: '40%' }}
             >
               Telegram
             </Button>
             <Button
               as="a"
               href="https://x.com/polkadothungary"
               color="#E9208A"
               fontWeight="bold"
               fontSize="lg"
               p={2}
               border="2px solid #E9208A"
               borderRadius="md"
               _hover={{ textDecoration: 'none', bg: '#E9208A', color: '#FFF' }}
               mb={4}
               width={{ base: '80%', md: '40%' }}
             >
               X
             </Button>
             <Button
               as="a"
               href="https://www.facebook.com/groups/polkadothungary"
               color="#E9208A"
               fontWeight="bold"
               fontSize="lg"
               p={2}
               border="2px solid #E9208A"
               borderRadius="md"
               _hover={{ textDecoration: 'none', bg: '#E9208A', color: '#FFF' }}
               mb={4}
               width={{ base: '80%', md: '40%' }}
             >
               Facebook
             </Button>
           </Flex>
         </Box>
       </SimpleGrid>
     </>
   )
 }
 
 export default About
 