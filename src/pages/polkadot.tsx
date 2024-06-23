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
import { TwitterPolkadot } from '../components/socials/Twitter'
import HeadSEO from '../components/seo/HeadSEOPage'
import { polkadotPageQuery } from '../graphql/query/polkadot'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   const { data: polkadotOnly } = await polkadotPageQuery()

   return {
      props: {
         posts: polkadotOnly.posts,
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
            imagePage={'polkadotHU.png'}
            titlePage={'Polkadot'}
            summaryPage={
               'A Polkadot lehetővé teszi egy teljesen decentralizált web megvalósítását, ahol a felhasználók rendelkeznek az irányítással.'
            }
         />
         <Nav />
         <main>
            <SimpleGrid px={{base:0,md:32}} py={20}>
               <Box>
                  <Heading as="h1" size={{ base: '2xl', md: '4xl' }}>
                     Polkadot
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
                              href="https://polkadot.network/"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              Weboldal
                           </a>
                        </ListItem>
                        <ListItem>
                           <a
                              href="https://polkadot.network/Polkadot-lightpaper.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              Lightpaper
                           </a>
                        </ListItem>
                        <ListItem>
                           <a
                              href="https://polkadot.network/PolkaDotPaper.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              PolkaDotPaper
                           </a>
                        </ListItem>
                        <ListItem>
                           <a
                              href="https://wiki.polkadot.network/"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              Wiki
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
                              href="https://twitter.com/Polkadot"
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
                     Mi is a Polkadot?
                  </Heading>
                  <Text>
                  Polkadot lehetővé teszi egy teljesen decentralizált web megvalósítását, ahol a felhasználók rendelkeznek az irányítással.
                  <br />
                  <br />
                  Polkadot eredeti tervek alapján célnak tűzte ki, hogy összekösse a privát és konzorciumi láncokat, a nyilvános és engedély nélküli hálózatokat, 
                  az orákulumokat és a jövőbeli technológiákat. Polkadot egy olyan internetet tesz lehetővé, 
                  ahol a független blokkláncok megbízhatóan cserélhetnek információkat és tranzakciókat a Polkadot Relay Chain-jén keresztül.
                  <br />
                  <br />
                  Polkadot-on egyszerűbb, mint valaha, decentralizált alkalmazásokat, szolgáltatásokat, valamint intézményi rendszereket létrehozni 
                  és összekapcsolni. Az fejlesztők célja, hogy jobb megoldásokat hozzanak létre, hogy felszabadítsák a
                   társadalmat attól a függőségtől, amely egy nem működő rendszerrel szembesít bennünket, ahol a nagy intézmények megsérthetik a bizalmunkat.
                  </Text>
               </GridItem>

               <GridItem
                  colSpan={{ base: 12, md: 3 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <a
                     href="https://wiki.polkadot.network/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Image
                        boxSize="350px"
                        objectFit="cover"
                        src="/wiki-polkadot.jpg"
                        alt="wiki polkadot"
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
                     Polkadot hírek a globális ökoszisztémából
                  </Heading>
                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                     {(posts as ITcard[]).slice(0,9).map((post) => (
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
                  <TwitterPolkadot />
               </GridItem>
            </Grid>
         </main>
      </>
   )
}

export default Page
