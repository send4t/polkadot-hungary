import type { GetServerSideProps, InferGetStaticPropsType } from 'next'
import Nav from '../components/navigation/Nav'
import {
   SimpleGrid,
   Heading,
   Box,
   Text,
   Grid,
   GridItem,
   Image,
   ListItem,
   UnorderedList,
} from '@chakra-ui/react'
import CardComponent, { ITcard } from '../components/cards/CardNews'
import { useRouter } from 'next/router'
import { TwitterKusama } from '../components/socials/Twitter'
import HeadSEO from '../components/seo/HeadSEOPage'
import { kusamaPageQuery } from '../graphql/query/kusama'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   const { data } = await kusamaPageQuery()

   return {
      props: {
         posts: data.posts,
      },
   }
}

function Page({ posts }: InferGetStaticPropsType<typeof getServerSideProps>) {
   let router = useRouter()

   if (router.isFallback) {
      return <div>Loading...</div>
   }
   return (
      <>
         <HeadSEO
            imagePage={'poster.png'}
            titlePage={'Kusama'}
            summaryPage={
               'Kusama è canary network di Polkadot; una versione di Polkadot che è disponibile per prima e ha un valore economico reale. Per gli sviluppatori, Kusama è un banco di prova per aggiornamenti di runtime, on-chain governance e parachain.'
            }
         />
         <Nav />
         <main>
            <SimpleGrid px={30} py={20}>
               <Box>
                  <Heading as="h1" size={{ base: '2xl', md: '4xl' }}>
                     Kusama
                  </Heading>
               </Box>
            </SimpleGrid>

            <Grid
               templateColumns="repeat(12, 1fr)"
               gap={{ base: 3, md: 4, lg: 6 }}
               p={30}
            >
               <GridItem
                  colSpan={{ base: 12, md: 3 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Box pb={6}>
                     <Heading as="h2" fontSize="l" pb={6}>
                        Hivatalos linkek
                     </Heading>
                     <UnorderedList>
                        <ListItem>
                           <a
                              href="https://kusama.network/"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              Weboldal
                           </a>
                        </ListItem>
                        <ListItem>
                           <a
                              href="https://guide.kusama.network/docs/kusama-getting-started"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              Útmutató
                           </a>
                        </ListItem>
                        <ListItem>
                           <a
                              href="https://github.com/paritytech/polkadot"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              GitHub
                           </a>
                        </ListItem>
                        <ListItem>
                           <a
                              href="https://substrate.io/"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              Substrate
                           </a>
                        </ListItem>
                        <ListItem>
                           <a
                              href="https://twitter.com/kusamanetwork"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              Twitter
                           </a>
                        </ListItem>
                     </UnorderedList>
                  </Box>
               </GridItem>

               <GridItem
                  colSpan={{ base: 12, md: 6 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Heading as="h2" fontSize="l" pb={6}>
                     Mi is a Kusama?
                  </Heading>
                  <Text>
                  Kusama a Polkadot kanárihálózata; egy olyan Polkadot változat, 
                  amely először áll rendelkezésre, és valós gazdasági értékkel rendelkezik. 
                  A fejlesztők számára a Kusama egy tesztpad a futásidejű frissítések, az on-chain kormányzás és a parachainek számára.
                     <br />
                     <br />
                     Kusama a Kusama tokenek - KSM birtokosainak tulajdona. Nincs központi kill switch, és minden változtatást a protokoll on-chain kormányzása révén hajtanak végre.
                      A hálózat engedély nélküli, így bárki szabadon csatlakozhat és használhatja azt. Kusama kísérleti jellegű. Expect Chaos.
                     <br />
                     <br />
                     Lehet interakcióba lépni a Kusama hálózatának összes funkciójával, mint például a staking, 
                     a kormányzás, a parachain aukciók, az alapvető átutalások és minden más.
                  </Text>
               </GridItem>

               <GridItem
                  colSpan={{ base: 12, md: 3 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <a
                     href="https://guide.kusama.network/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Image
                        boxSize="350px"
                        objectFit="cover"
                        src="/guida-kusama.jpg"
                        alt="guida kusama"
                        rounded={6}
                     />
                  </a>
               </GridItem>

               <GridItem
                  colSpan={{ base: 12, md: 9 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Heading as="h2" fontSize="l" pb={6}>
                     Hírek
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
                  <TwitterKusama />
               </GridItem>
            </Grid>
         </main>
      </>
   )
}

export default Page
