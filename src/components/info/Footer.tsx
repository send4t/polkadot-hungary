import {
   Grid,
   GridItem,
   Heading,
   Text,
   Box,
   Stack,
   HStack,
} from '@chakra-ui/react'
import Script from 'next/script'
import NevItems from '../navigation/Nav-items'
import SocialLink from '../socials/SocialLink'

export default function Footer() {
   return (
      <>
         <footer>
            <Grid
               templateColumns="repeat(12, 1fr)"
               gap={4}
               py={30}
               borderTop="1px"
               borderColor="gray.200"
            >
               <GridItem colSpan={{ base: 12, md: 6 }} p={6}>
                  <GridItem>
                     <Heading as="h3" fontSize="xl" mb={3}>
                        Polkadot Hungary Community
                     </Heading>
                     <Text>

                     A csapat 2020 óta töretlenül szervezi a lokális Polkadot közösséget. Regionális Head Ambassador (Six) indította el és mára már a legaktívabb crypto/blokklánc közösség vagyunk Magyarországon esemény szervezés és <a href="https://t.me/polkadothungary/">Telegram csoport</a> aktivitás alapján. Fő motivációnk a közösségszervezés az edukáció a Polkadot ökoszisztéma használatára, ezért hírekkel, videókkal és informatív cikkekkel jelentkezünk folyamatosan.
                     </Text>
                     <br />
                     <Text>
                     Közösségünk formálja a Polkadot Network alakulását. A 219-es Pool ID-val elindítottuk a Polkadot Hungary Staking Pool-t, valamint szakértelmünkkel aktívan részt veszünk a Polkadot on-chain governance rendszerében, OpenGov-on. A szavazatokat közösségi elbírálás alapján határozzuk meg és szavazunk multisignature account-on keresztül.
                     </Text>
                    
      
                     <Box display={{ base: 'none', md: 'flex' }} mt={6}>
                        <HStack as={'nav'} spacing={0}>
                           <NevItems />
                        </HStack>
                     </Box>
                     <Box pb={4} display={{ md: 'none' }} mt={6}>
                        <Stack as={'nav'} spacing={5}>
                           <NevItems />
                        </Stack>
                     </Box>
                  </GridItem>
               </GridItem>
               <GridItem colSpan={{ base: 12, md: 6 }} p={6}>
                  <Box>
                     <Heading as="h3" fontSize="xl" mb={3}>
                        Kövess minket
                     </Heading>
                     <HStack gap={6}>
                        <SocialLink />
                     </HStack>
                  </Box>
                  <Box mt={6}>
                     <Heading as="h3" fontSize="l" mb={3}>
                        Támogasd munkánkat
                     </Heading>
                     <Text>
                        A Polkadot Hungary Community teljes mértékben önkéntes alapon működik, ezért minden szponorációt vagy támogatást szívesen fogadunk.
                     </Text>
                     <code>
                        DOT: 16DNbAdyy6QsTPdDDHL5gt7FaeAQ1UioJA6Pj7aUGJERveFd
                     </code>
                  </Box>
               </GridItem>
            </Grid>
         </footer>
         <script id="usercentrics-cmp" src="https://app.usercentrics.eu/browser-ui/latest/loader.js" data-settings-id="GTM-NNTK365F" async></script>
         <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=GTM-NNTK365F"
         ></Script>
         <script
            dangerouslySetInnerHTML={{
               __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GTM-NNTK365F', {
                page_path: window.location.pathname,
                });
            `,
            }}
         />
      </>
   )
}
