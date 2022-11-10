import type { GetServerSideProps, InferGetStaticPropsType, NextPage } from 'next'
import Nav from '../../components/Nav'
import { SimpleGrid, Heading, Box, Text, Grid, GridItem } from '@chakra-ui/react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import CardComponent, { ITcard } from '../../components/CardNews';
import Sidebar from '../../components/Sidebar';
import { useRouter } from 'next/router'
import { AllSapces, SpaceData } from '../../components/Space';
import { getStaticProps } from '..'
import HeadSEO from '../../components/HeadSEOPage'


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.title
  const client = new ApolloClient({
    uri: 'https://squid.subsquid.io/subsocial/graphql',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query MyQuery {
        posts(where: {tagsOriginal_contains: "${id}", AND: {space: ${AllSapces()}}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
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


function Post({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  let router = useRouter()
  let titleURL = router.asPath
  let NameH1 = titleURL.split(('/')).pop()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <HeadSEO 
        titlePage={'Tutte le news su'} 
        imagePage={'orizzontale.png'} 
        summaryPage={'Dal mondo Polkadot e Kusama un blog in italiano con news, aggiornamenti, alpha, rumors e traduzioni'} 
      />
      <Nav />
      <main>
        <SimpleGrid px={30} py={20}>
          <Box>
            <Heading as='h1' size={{base: '2xl', md: '4xl'}}>{NameH1}</Heading>
          </Box>
        </SimpleGrid>

        <Grid templateColumns='repeat(12, 1fr)' gap={4} p={30}>
      
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
          <Sidebar />
        </GridItem>
        
      </Grid>
    </main>
    </>
  )
}

export default Post