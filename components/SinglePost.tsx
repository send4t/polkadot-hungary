import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Tag,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import ipfsContect from './ipfsURL';
import React from 'react'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown';
import styles from '../styles/Post.module.css'
import router from 'next/router';
import { ChevronRightIcon } from '@chakra-ui/icons';
var urlCate = '../categoria/'

export interface ITcard {
    posts: ITcard;
    id: string;
    createdAtTime:number;
    image: string;
    title: string;
    downvotesCount: number;
    summary: string;
    tagsOriginal: string;
    body: string;
    canonical: string;
}

const SingleComponent: React.FC<ITcard> = props => {
    return(
        <>
        {props.posts.downvotesCount <= 3 &&
          <article className={styles.article}>
              <Center mt={10}>
                  <Box maxW={{base: '100%', md: '870px'}} boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
                        <Box h={'70px'} mt={-6} mx={-6}>
                            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href='#' onClick={() => router.back()}>
                                        Torna indietro
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Box>
                      <Box h={'450px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                          <Image
                          src={ipfsContect.ipfsURL+props.posts.image}
                          layout={'fill'}
                          alt='image'
                          />
                      </Box>
                      <HStack p={{base: 1, md: 6}}>
                      {props.posts.tagsOriginal.split(",").map((tag: any) => (
                          <Link href={urlCate+tag} key={props.posts.id}>
                              <a><Tag size='sm' variant='solid'>{tag}</Tag></a>
                          </Link>
                      ))}
                      </HStack>
                      <Stack px={{base: 1, md: 6}} py={{base: 4, md: 0}}>
                          <header>
                              <Heading as='h1'>{props.posts.title}</Heading>
                          </header>
                          <section>
                            <ReactMarkdown>{props.posts.body}</ReactMarkdown>
                          </section>
                      </Stack>
                  </Box>
              </Center>
          </article>
          }
        </>
  )
}

export default SingleComponent;
