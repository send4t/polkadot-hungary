import {
   Box,
   Flex,
   Link,
   Button,
   useDisclosure,
   useColorModeValue,
   Stack,
   useColorMode,
   IconButton,
   HStack,
   Image,
} from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import NevItems from './Nav-items'

//const Links = ['news', 'polkadot', 'kusama', 'DeFi', 'NFT', 'area-dev', 'about']
let url = '../'

const Links = [
   { name: 'News', url: 'news', status: '' },
   { name: 'Polkadot', url: 'polkadot', status: '' },
   { name: 'Kusama', url: 'kusama', status: '' },
   // { name: 'DeFi', url:'DeFi', status: ''},
   // { name: 'NFT', url:'NFT', status: ''},
   // { name: 'Area Dev', url:'area-dev', status: ''},
   { name: 'About', url: 'about', status: '' },
   // { name: 'Community ITA', url: 'community-italiana'}
]

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={3}
//     py={1}
//     rounded={'md'}
//     style={{
//       textTransform: 'capitalize'
//     }}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}

//     href={url+children}>
//     {children}
//   </Link>
// );

export default function Nav() {
   const { colorMode, toggleColorMode } = useColorMode()
   const { isOpen, onOpen, onClose } = useDisclosure()
   return (
      <header>
         <Box bg={useColorModeValue('gray.100', 'gray.900')} px={{base:0 , md:32}} py={1}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
               <IconButton
                  size={'md'}
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  aria-label={'Open Menu'}
                  display={{ md: 'none' }}
                  onClick={isOpen ? onClose : onOpen}
               />
               <HStack spacing={10} alignItems={'center'}>
                  <Box>
                     <Link href="/">
                        <Image
                            boxSize='42px'
                           src={useColorModeValue('/logo-bk.svg', '/logo.svg')}
                           alt="logo"
                        />
                     </Link>
                  </Box>
                  <HStack
                     as={'nav'}
                     spacing={0}
                     display={{ base: 'none', md: 'flex' }}
                  >
                     <NevItems />
                  </HStack>
               </HStack>

               <Flex alignItems={'center'}>
                  <Stack direction={'row'} spacing={7}>
                     <Button onClick={toggleColorMode}>
                        {colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
                     </Button>
                  </Stack>
               </Flex>
            </Flex>
            {isOpen ? (
               <Box pb={4} display={{ md: 'none' }}>
                  <Stack as={'nav'} spacing={5}>
                     <NevItems />
                  </Stack>
               </Box>
            ) : null}
         </Box>
      </header>
   )
}
