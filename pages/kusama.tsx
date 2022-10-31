import type { GetServerSideProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Nav from '../components/Nav'
import { SimpleGrid, Heading, Box, Text, Grid, GridItem, Image, ListItem, UnorderedList } from '@chakra-ui/react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import CardComponent, { ITcard } from '../components/CardBlog';
import { useRouter } from 'next/router';
import { AllSapces, SpaceData } from '../components/Space';
import { getStaticProps } from '.';
import { TwitterKusama, TwitterPolkadot } from '../components/Twitter';
import Footer from '../components/Footer';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  const client = new ApolloClient({
    uri: 'https://squid.subsquid.io/subsocial/graphql',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query MyQuery {
        posts(where: {tagsOriginal_contains: "Kusama", AND: {space: ${AllSapces()}}}) {
          ${SpaceData()}    
        }
      }
    `
  });

  return {
    props: {
      posts: data.posts
    }
  }
}


function Page({ posts }: InferGetStaticPropsType<typeof getStaticProps>)  {
  let router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Head>
        <title>Kusama Network</title>
        <meta name="description" content="Kusama è canary network di Polkadot; una versione di Polkadot che è disponibile per prima e ha un valore economico reale. Per gli sviluppatori, Kusama è un banco di prova per aggiornamenti di runtime, on-chain governance e parachain." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <SimpleGrid px={30} py={20}>
          <Box>
            <Heading as='h1' size={{base: '2xl', md: '4xl'}}>Kusama</Heading>
            <Text>Page in working in progres</Text>
          </Box>
        </SimpleGrid>

        <Grid templateColumns='repeat(12, 1fr)' gap={4} p={30} >
          <GridItem colSpan={{base: 12, md: 3}} borderTop='1px' borderColor='gray.200' pt={6}>
            <Box pb={6}>
              <Heading as='h2' fontSize='l' pb={6}>Link Ufficiali</Heading>
              <UnorderedList>
                <ListItem><a href="https://kusama.network/" target="_blank" rel="noopener noreferrer">Website</a></ListItem>
                <ListItem><a href="https://guide.kusama.network/docs/kusama-getting-started" target="_blank" rel="noopener noreferrer">Guide</a></ListItem>
                <ListItem><a href="https://github.com/paritytech/polkadot" target="_blank" rel="noopener noreferrer">GitHub</a></ListItem>
                <ListItem><a href="https://substrate.io/" target="_blank" rel="noopener noreferrer">Substrate</a></ListItem>
                <ListItem><a href="https://twitter.com/kusamanetwork" target="_blank" rel="noopener noreferrer">Twitter</a></ListItem>
              </UnorderedList>
            </Box>
          </GridItem>

          <GridItem colSpan={{base: 12, md: 6}} borderTop='1px' borderColor='gray.200' pt={6}>
            <Heading as='h2' fontSize='l' pb={6}>About Kusama</Heading>
            <Text>
            Kusama è canary network di Polkadot; una versione di Polkadot che è disponibile per prima e ha un valore economico reale. Per gli sviluppatori, Kusama è un banco di prova per aggiornamenti di runtime, on-chain governance e parachain.
            <br /><br />
            Kusama è di proprietà di coloro che detengono i token Kusama - KSM. Non esiste un kill switch centrale e tutte le modifiche vengono apportate tramite la governance on-chain del protocollo. La rete è senza autorizzazione e chiunque può venire e iniziare a usarla. Kusama è sperimentale. Expect Chaos.
            <br /><br />
            Puoi interagire con tutte le funzionalità della rete Kusama come staking, governance, aste parachain, trasferimenti di base e tutto il resto.
            </Text>
          </GridItem>

          <GridItem colSpan={{base: 12, md: 3}} borderTop='1px' borderColor='gray.200' pt={6}>
            <Image boxSize='350px' objectFit='cover' src='/adv_placeholder.jpg' alt='adv'/>
          </GridItem>


          <GridItem colSpan={{base: 12, md: 9}} borderTop='1px' borderColor='gray.200' pt={6}>
            <Heading as='h2' fontSize='l' pb={6}>Tutte le news</Heading>
            <SimpleGrid columns={{base: 1, md: 3}} spacing={6}>
              {posts &&
                posts.map((post: JSX.IntrinsicAttributes & ITcard) => 
                <CardComponent {...post} key={post.id}/>                       
              )}
            </SimpleGrid>
          </GridItem>

          <GridItem colSpan={{base: 12, md: 3}} borderTop='1px' borderColor='gray.200' pt={6}>
                <TwitterKusama />
          </GridItem>


        </Grid>
        <Footer />
    </>
  )
}

export default Page