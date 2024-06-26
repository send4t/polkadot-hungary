import Image from 'next/image'
import Link from 'next/link'
import {
   Box,
   Center,
   Heading,
   Stack,
   Tag,
   HStack,
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
} from '@chakra-ui/react'
import ipfsContent from '../../ipfs'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from '../../styles/Post.module.css'
import router from 'next/router'
import { ChevronRightIcon } from '@chakra-ui/icons'
var urlCate = '../categoria/'

export interface ITpost {
   posts: ITpost
   morepost: ITpost
   id: string
   createdAtTime: number
   image: string
   title: string
   downvotesCount: number
   summary: string
   tagsOriginal: string
   body: string
   canonical: string
   link: string
   ownedByAccount: {
      profileSpace: {
         name: string
         image: string
      }
   }
   space: {
      id: string
      name: string
      image: string
   }
}

const SingleComponent: React.FC<ITpost> = (props) => {
   const overflowA = {
      overflow: 'auto',
   }
   return (
      <>
         {props.downvotesCount <= 3 && (
            <article className={styles.article}>
               <Box maxW={{ base: '100%', md: '870px' }} m={3}>
            <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
               <BreadcrumbItem>
                  <BreadcrumbLink
                     href="#"
                     onClick={() => router.back()}
                     color="#E9208A"
                     fontWeight="bold"
                     fontSize="lg"
                     p={2}
                     border="2px solid #E9208A"
                     borderRadius="md"
                     _hover={{ textDecoration: 'none', bg: '#E9208A', color: '#FFF' }}
                  >
                     &#8592; Vissza
                  </BreadcrumbLink>
               </BreadcrumbItem>
            </Breadcrumb>
         </Box>
               <Center mt={10}>
                  <Box
                     maxW={{ base: '100%', md: '870px' }}
                     boxShadow={'2xl'}
                     rounded={'md'}
                     p={6}
                     overflow={'hidden'}
                  >
                     <Box
                        h={{ base: '230px', md: '450px' }}
                        bg={'gray.100'}
                        mt={-6}
                        mx={-6}
                        mb={6}
                        pos={'relative'}
                     >
                        {props.image != null ? (
                           <Image
                              src={ipfsContent.ipfsURL + props.image}
                              layout={'fill'}
                              objectFit="cover"
                              alt={props?.title}
                           />
                        ) : (
                           <Image
                              src="/adv_placeholder.jpg"
                              layout={'fill'}
                              objectFit="cover"
                              alt={props?.title}
                           />
                        )}
                     </Box>
                     <HStack p={{ base: 1, md: 6 }} sx={overflowA}>
                        {props.tagsOriginal.split(',').map((tag: any) => (
                           <Link href={urlCate + tag} key={props.id}>
                              <a>
                                 <Tag size="sm" variant="solid">
                                    {tag}
                                 </Tag>
                              </a>
                           </Link>
                        ))}
                     </HStack>
                     <Stack px={{ base: 1, md: 6 }} py={{ base: 4, md: 0 }}>
                        <header>
                           <Heading as="h1">{props.title}</Heading>
                        </header>
                        <section>
                           <ReactMarkdown>{props.body}</ReactMarkdown>
                        </section>
                     </Stack>
                  </Box>
               </Center>
            </article>
         )}
      </>
   )
}

export default SingleComponent
