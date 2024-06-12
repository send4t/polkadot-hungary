import {
   Box,
   Heading,
   SimpleGrid,
   Text,
   ListItem,
   UnorderedList,
   Grid,
   GridItem,
   Image,
} from '@chakra-ui/react'
import { GetServerSideProps, InferGetStaticPropsType } from 'next'
import HeadSEO from '../components/seo/HeadSEOPage'
import Nav from '../components/navigation/Nav'
import CardTeam, { ITteam } from '../components/info/Team'
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
         <SimpleGrid px={{base:0,md:32}} py={20}>
            <Box>
               <Heading as="h1" size="4xl">
                  Polkadot Hungary Community
               </Heading>
            </Box>
         </SimpleGrid>

         <Grid templateColumns="repeat(12, 1fr)" p={{base:0,md:32}}>
            <GridItem
               colSpan={{ base: 12, md: 8 }}
               borderTop="1px"
               borderColor="gray.200"
               py={6}
               px={3}
            >
               <Heading as="h2" fontSize="xl" pb={6}>
                  A célunk
               </Heading>
               <Text>
               A csapatunk 2020 óta töretlenül szervezi a lokális Polkadot közösséget. Ez idő alatt több, mint <a href="https://www.meetup.com/polkadot-hungary/" style={{ color: 'blue' }}>30 Polkadot Meetup</a>, <a href="https://cointelegraph.com/press-releases/hackers-wanted-for-polkadots-36k-metaverse-championship-anyone-welcome/" style={{ color: 'blue' }}>2 Polkadot Championship Hackathon-t</a>  és a Budapesi Blockchain Week legnagyobb eseményét, a Polkadot Day-t szervezezte meg. Közösségünket Six, a regionális Head Ambassador indította el és mára már a legaktívabb crypto/blokklánc közösség vagyunk Magyarországon esemény szervezés és <a href="https://t.me/polkadothungary/" style={{ color: 'blue' }}>Telegram csoport</a> aktivitás alapján. Fő motivációnk a közösségszervezés az edukáció a Polkadot ökoszisztéma használatára, így ellátjuk őket hírekkel, videókkal és informatív cikkekkel.
               </Text>
               <br />
               <Text>
               A közösség ebben a blogban gyűjti össze az eredeti cikkeket, útmutatókat, oktatóanyagokat és az ökoszisztéma legfontosabb tartalmait.
               </Text>
               <br />
               <Heading as="h2" fontSize="xl" pb={6}>
                   Egy erős alap
               </Heading>
               <Text>
               A Polkadot Hungary néhány magyar Polkadot közösség tagjának akaratából született, hogy orvosolja a magyar információs csatornák fragmentálódását az ökoszisztémában. Egyetlen csatorna létrehozásával a cél az, hogy a Polkadotot közvetlenebbé tegyék az átlagos felhasználó számára, és több résztvevőt vonzanak a hálózathoz.
               </Text>
               <br />
               <Text>
               A Polkadot Hungary alapító csapata különböző területeken dolgozó szakértőkből áll, a számítástechnikai fejlesztők, marketingesek és web3 natív felhasználók alkotják. Ez a heterogén környezet lehetővé teszi számunkra, hogy hasznos és élvezetes tartalmakat állítsunk elő.
               </Text>
               < br />
               <Text>Jelenleg a Polkadot Hungary-t ezeken a felületen érheted el:</Text>
                  <UnorderedList>
                     <ListItem>
                         Twitter csatorna:{' '}
                              <a
                               href="https://twitter.com/PolkadotHungary"
                               target="_blank"
                                 rel="noopener noreferrer"
                              >
                               @PolkadotHungary
                               </a>
                     </ListItem>
                      <ListItem>
                           Telegram csatorna:{' '}
                              <a
                               href="https://t.me/polkadothungary"
                               target="_blank"
                                 rel="noopener noreferrer"
                              >
                               @polkadothungary
                               </a>
                     </ListItem>
                     </UnorderedList>
                     <br />

               <Heading as="h2" fontSize="xl" pb={6}>
                  Részt venni a Polkadot Hungary-ben
               </Heading>
               <Text>
                  Jelenleg a több módja is van annak, hogy támogasd a Polkadot Hungary-t.
                  Vegyél részt a havi eseményeinken. Stake-elj velünk és bízd ránk a szavazati erődet.
               </Text>
               <br />
               <Text>
                  Terveink között szerepel, hogy bárki küldhessen nekünk eredeti cikket vagy fordítást és a szerkesztőség döntése alapján publikáljuk ezeket. Jelenleg nem tudunk semmilyen juttatást garantálni, mivel a projekt még a kezdeti szakaszban van és önkéntes alapon működik. Jövőben lehet, hogy on-chain jutalmakat is kiosztunk közösséget építő tagjaink számára.
               </Text>
               <Heading as="h2" fontSize="xl" pb={6}>
               <br />
                     Hogyan készült ez az oldal
               </Heading>
               <Text>
                  A Polkadot szellemisége megkívánja, hogy ahol csak lehet decentralizált technológiát használjunk ezért nemcsak elméletben, hanem tettekben is igyekszünk így építkezni. A blogunk a web3 technológiákon alapul, az alap vázat a Polkadot Arena weboldaláról az engedélyükkel vettük át.
                Minden cikkünk az IPFS protokollon keresztül van regisztrálva a <b>Subsocial</b>-on, amely a Polkadot <a href="subsocial.network" target="_blank" rel="noopener noreferrer">Parachain projektje</a>.
               </Text>
               <br />
               <Text>
                  Az adatok olvasásához a <b>Subsquid</b> <a href="https://subsquid.io/" target="_blank" rel="noopener noreferrer">GraphQL hívásait</a> használjuk, egy másik decentralizált projektet, amely összeköti a blockchain világát és az adatok megjelenítését a képernyőn.
               </Text>
               <br />
               <Text>
                  A blogunk jelenleg az első verziójában van, és kiemelt fontosságú számunkra a releváns cikkek megjelenítése magyar nyelven.
                  Folyamatosan dolgozunk, hogy jobb és a még felhasználóbarátabb tájékoztatást nyújtsunk .
               </Text>
            </GridItem>
            <GridItem
               colSpan={{ base: 12, md: 4 }}
               borderTop="1px"
               borderColor="gray.200"
               p={6}
               display="flex"
               justifyContent="center"
               alignItems="center"
               minHeight="200px" 
>
            <Box>
            <Image src='polkadotHU.png' alt='Polkadot logo' /> 
            </Box>
            </GridItem>
         </Grid>

         {/* <Box borderTop="1px" borderColor="gray.200" p={30}>
            <Heading as="h2" fontSize="xl" pb={6}>
               Il team
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 4 }}>
               {accounts &&
                  (accounts as ITteam[]).map((profile) => (
                     <CardTeam {...profile} key={profile.profileSpace?.id} />
                  ))}
            </SimpleGrid>
         </Box> */}
      </>
   )
}

export default About
