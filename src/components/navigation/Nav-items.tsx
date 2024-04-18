import { Tooltip, Link, useColorModeValue } from '@chakra-ui/react'

//const Links = ['news', 'polkadot', 'kusama', 'DeFi', 'NFT', 'area-dev', 'about']
let url = '../'

const Links = [
   { name: 'Hírek', url: 'news', status: '' },
   { name: 'Polkadot', url: 'polkadot', status: '' },
   // { name: 'DeFi', url:'DeFi', status: ''},
   // { name: 'NFT', url:'NFT', status: ''},
   // { name: 'Area Dev', url:'area-dev', status: ''},
   { name: 'Rólunk', url: 'about', status: '' },
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

export default function NevItems() {
   const hover = useColorModeValue('gray.300', 'gray.700')

   return (
      <>
         {Links.map((link) => (
            <Link
               px={3}
               py={1}
               rounded={'md'}
               key={link.name}
               style={{
                  textTransform: 'capitalize',
               }}
               _hover={{
                  textDecoration: 'none',
                  bg: hover,
               }}
               href={url + link.url}
            >
               {link.name}
            </Link>
         ))}
         <Link
            px={3}
            py={1}
            rounded={'md'}
            key="NFT"
            textColor="gray.700"
            style={{ textTransform: 'capitalize' }}
            _hover={{ textDecoration: 'none' }}
            href="#"
         >

         <Link
            px={3}
            py={1}
            rounded={'md'}
            key="wiki"
            textColor="gray.700"
            style={{ textTransform: 'capitalize' }}
            _hover={{ textDecoration: 'none' }}
            href="#"
         >
            <Tooltip label="Hamarosan" aria-label="A tooltip">
               Wiki
            </Tooltip>
         </Link>
           
         </Link>
      </>
   )
}
