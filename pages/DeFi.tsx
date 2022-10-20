import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Nav from '../components/Nav'
import { SimpleGrid, Heading, Box, Text, Grid, GridItem } from '@chakra-ui/react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import CardComponent, { ITcard } from '../components/Card';
import Sidebar from '../components/Sidebar';


export async function getStaticProps(context: { params: any; }) {
  const client = new ApolloClient({
    uri: 'https://squid.subsquid.io/subsocial/graphql',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query MyQuery {
        posts(where: {tagsOriginal_contains: "DeFi", AND: {space: {id_eq: "7218"}}}) {
          id
          createdAtTime
          image
          title
          downvotesCount
          summary
          tagsOriginal
          ownedByAccount {
            id
            profileSpace {
              name
            }
          }
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


function DeFi({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Scopri i topic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <SimpleGrid px={30} py={20}>
          <Box>
            <Heading as='h1' size={{base: '2xl', md: '4xl'}}>DeFi</Heading>
          </Box>
        </SimpleGrid>

        <Grid templateColumns='repeat(12, 1fr)' gap={4} p={30}>
      
      <GridItem colSpan={{base: 12, md: 9}} borderTop='1px' borderColor='gray.200' pt={6}>
          <Heading as='h2' fontSize='l' pb={6}>Tutte le news</Heading>
          <SimpleGrid columns={{base: 1, md: 3}} spacing={6}>
            {posts &&
              posts.map((post: JSX.IntrinsicAttributes & ITcard) => 
              <CardComponent {...post} />                       
            )}
          </SimpleGrid>
      </GridItem>

      <GridItem colSpan={{base: 12, md: 3}} borderTop='1px' borderColor='gray.200' pt={6}>
        <Box pb={6}>
          <Heading as='h2' fontSize='l' pb={6}>Progetti</Heading>
          <Text>Coming soon</Text>
        </Box>
      </GridItem>
      
    </Grid>
    </div>
  )
}

export default DeFi