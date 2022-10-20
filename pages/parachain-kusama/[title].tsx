import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Nav from '../../components/Nav'
import { SimpleGrid, Heading, Box, Text, Grid, GridItem } from '@chakra-ui/react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { title } from 'process';
import CardComponent, { ITcard } from '../../components/Card';
import Sidebar from '../../components/Sidebar';
import { useRouter } from 'next/router'

export interface post {
  id: string;
  createdAtTime:number;
  image: string;
  title: string;
  downvotesCount: number;
  summary: string;
  tagsOriginal: string;
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { title } }],
    fallback: true,
  }
}

export async function getStaticProps(context: { params: any; }) {
  const { params } = context
  const cate = params.title
  const client = new ApolloClient({
    uri: 'https://squid.subsquid.io/subsocial/graphql',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query MyQuery {
        posts(where: {tagsOriginal_contains: "${cate}", AND: {space: {id_eq: "7218"}}}) {
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


function Post({ posts }: InferGetStaticPropsType<typeof getStaticProps>)  {
  let router = useRouter()
  let titleURL = router.asPath
  let NameH1 = titleURL.split(('/')).pop()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

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
            <Heading as='h1' size={{base: '2xl', md: '4xl'}}>{NameH1}</Heading>
          </Box>
        </SimpleGrid>

        <Grid templateColumns='repeat(12, 1fr)' gap={4} p={30}>
      
      <GridItem colSpan={{base: 12, md: 9}} borderTop='1px' borderColor='gray.200' pt={6}>
          <Heading as='h2' fontSize='l' pb={6}>Tutte le news</Heading>
          <SimpleGrid columns={{base: 1, md: 3}} spacing={6}>
          {posts &&
            (posts as post[]).map((post: JSX.IntrinsicAttributes & ITcard) => 
            <CardComponent {...post} key={post.id}/>                       
          )}
          </SimpleGrid>
      </GridItem>

      <GridItem colSpan={{base: 12, md: 3}} borderTop='1px' borderColor='gray.200' pt={6}>
        <Sidebar />
      </GridItem>
      
    </Grid>
    </div>
  )
}

export default Post