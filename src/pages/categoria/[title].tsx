import type { GetServerSideProps, InferGetStaticPropsType } from 'next'
import Nav from '../../components/navigation/Nav'
import { SimpleGrid, Heading, Box, Grid, GridItem } from '@chakra-ui/react'
import CardComponent, { ITcard } from '../../components/cards/CardNews'
import Sidebar from '../../components/Sidebar'
import { useRouter } from 'next/router'
import HeadSEO from '../../components/seo/HeadSEOPage'
import { Tags } from '../../components/tags'
import { collectionsTag } from '../../components/tags/tags'
import { categoryQuery } from '../../graphql/query/categoria'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   const { data } = await categoryQuery(query)

   return {
      props: {
         posts: data.posts,
      },
   }
}

function Post({ posts }: InferGetStaticPropsType<typeof getServerSideProps>) {
   let router = useRouter()
   let titleURL = router.asPath
   let NameH1 = titleURL.split('/').pop()

   if (router.isFallback) {
      return <div>Loading...</div>
   }

   return (
      <>
         <HeadSEO
            titlePage={'Összes hír ' + NameH1?.replace('%20', ' ')}
            imagePage={'polkadotHU.png'}
            summaryPage={
               'A Polkadot és Kusama világából ' +
               NameH1?.replace('%20', ' ')
            }
         />
         <Nav />
         <main>
            <SimpleGrid px={30} py={20}>
               <Box>
                  <Heading as="h1" size={{ base: '2xl', md: '4xl' }}>
                     {NameH1?.replace('%20', ' ')}
                  </Heading>
               </Box>
            </SimpleGrid>

            <Grid templateColumns="repeat(12, 1fr)" gap={4} p={30}>
               <GridItem
                  colSpan={{ base: 12, md: 9 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Heading as="h2" fontSize="l" pb={6}>
                     Összes hír
                  </Heading>
                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                     {posts &&
                        (posts as ITcard[]).map((post) => (
                           <CardComponent {...post} key={post.id} />
                        ))}
                  </SimpleGrid>
               </GridItem>
               <GridItem
                  colSpan={{ base: 12, md: 3 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Box pb={6}>
                     <Tags
                        text={'Többi cikk'}
                        projects={collectionsTag}
                     />
                  </Box>
                  <Sidebar />
               </GridItem>
            </Grid>
         </main>
      </>
   )
}

export default Post
