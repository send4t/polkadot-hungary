import type { GetServerSideProps, InferGetStaticPropsType } from 'next'
import Nav from '../../components/navigation/Nav'
import {
   Box,
   Grid,
   GridItem,
   Heading,
   SimpleGrid,
   Text,
} from '@chakra-ui/react'
import Sidebar from '../../components/Sidebar'
import CardComponent, { ITcard } from '../../components/cards/CardNews'
import HeadSEO from '../../components/seo/HeadSEOPage'
import { Twitter } from '../../components/socials/Twitter'
import { Tags } from '../../components/tags'
import { collectionsTag } from '../../components/tags/tags'
import { highPostQuery, spacesQuery } from '../../graphql/query/news'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   const { data: spaces } = await spacesQuery()
   const { data: highPost } = await highPostQuery()

   return {
      props: {
         spaces: spaces.posts,
         highPostHome: highPost.postById,
      },
   }
}

function AllPost({
   spaces,
   highPostHome,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
   return (
      <>
         <HeadSEO
            titlePage={'Polkadot Hungary Community'}
            imagePage={'poster.png'}
            summaryPage={'Összes cikk a Polkadot Hungary Community önkénteseitől'}
         />
         <Nav />
         <main>
            <SimpleGrid px={30} py={20}>
               <Box>
                  <Heading as="h1" size={{ base: '2xl', md: '4xl' }}>
                     Polkadot Hungary Community Blog
                  </Heading>
                  <Box pt={3}>
                     <Text>
                     Egy blog magyarul a Polkadotról és Kusamaról, hírekkel, frissítésekkel, alpha változatokkal, pletykákkal, videókkal és fordításokkal.
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
                    Összes hír
                  </Heading>
                  <Box p={4}>
                     <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                        {(spaces as ITcard[]).map((post) => (
                           <CardComponent {...post} key={post.id} />
                        ))}
                     </SimpleGrid>
                  </Box>
               </GridItem>

               <GridItem
                  colSpan={{ base: 12, md: 3 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Box pb={6}>
                     <Tags
                        text="Cikkek gyűjteménye"
                        projects={collectionsTag}
                     />
                  </Box>
                  <Box borderTop="1px" borderColor="gray.200" pt={6} pb={6}>
                     <Heading as="h2" fontSize="l" pb={6}>
                       Kiemelt cikkek
                     </Heading>
                     <CardComponent
                        {...(highPostHome as ITcard)}
                        key={(highPostHome as ITcard).id}
                     />
                  </Box>
                  <Sidebar />
                  <Twitter />
               </GridItem>
            </Grid>
         </main>
      </>
   )
}

export default AllPost
