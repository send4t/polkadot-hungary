import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Nav from '../../components/Nav'
import { Box, Grid, GridItem, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Sidebar from '../../components/Sidebar';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import CardComponent, { ITcard } from '../../components/CardBlog'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import { SpaceData } from '../../components/Space';
import Footer from '../../components/Footer';

export const getStaticProps: GetStaticProps = async (context) => {
  const client = new ApolloClient({
    uri: 'https://squid.subsquid.io/subsocial/graphql',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
    query MyQuery {
      posts(where: {space: {id_eq: "7218"}}) {
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

function AllPost({ posts }: InferGetStaticPropsType<typeof getStaticProps>){
  let router = useRouter()
  return (
    <>
      <Head>
        <title>Dal blog di Polkadto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <SimpleGrid px={30} py={20}>
          <Box>
            <Heading as='h1' size={{base: '2xl', md: '4xl'}}>Dal blog di Polkadto</Heading>
              <Box pt={3}>
                <Text>
                  Qui trovi tutte le news in ordine cronologico, contenuti in italiano ma anche in inglese.
                </Text>
                <Text>
                  Se sei interessanto ad un tops in particolare controlla la sidebare, sicuramente troverei quello che cerchi
                </Text>
              </Box>
          </Box>
        </SimpleGrid>

      <Grid templateColumns='repeat(12, 1fr)' gap={4} p={30}>
      
        <GridItem colSpan={{base: 12, md: 9}} borderTop='1px' borderColor='gray.200' pt={6}>
            <Heading as='h2' fontSize='l' pb={6}>Tutte le news</Heading>
            <Box p={4}>
                <SimpleGrid columns={{base: 1, md: 3}} spacing={6}>
                  {posts &&
                  posts.map((post: JSX.IntrinsicAttributes & ITcard) => 
                  <CardComponent {...post} key={post.id}/>                       
                )}
                </SimpleGrid>
            </Box>
        </GridItem>

        <GridItem colSpan={{base: 12, md: 3}} borderTop='1px' borderColor='gray.200' pt={6}>
            <Sidebar />
        </GridItem>
        
      </Grid>
      <Footer />
    </>
  )
}

export default AllPost