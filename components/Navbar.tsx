import {
  Box,
  useColorModeValue,
  Stack,
  IconButton,
  useDisclosure,
  HStack,
  Link,
  Image,
  Container,
} from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import type { ReactNode } from 'react'

const Links = [
  { label: '☝️ Stories', href: '/stories' },
  { label: '✍️ Blog', href: '/blog' },
  { label: '🪴 Projects', href: '/projects' },
]

type NavLinkProps = {
  children: ReactNode
  href: string
}

const NavLink = (props: NavLinkProps) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={props.href}
  >
    {props.children}
  </Link>
)

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={'transparent'}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={'row'}
          justify={'space-between'}
          align={{ base: 'center', md: 'center' }}
        >
          <IconButton
            size={'md'}
            bg={'transparent'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link.label} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>

          <Stack direction="row" spacing="6">
            <Image
              borderRadius="full"
              boxSize="30px"
              src="/assets/picture.jpg"
              alt="Mario Colque"
            />
          </Stack>
        </Container>

        {isOpen ? (
          <Box pb={4} px={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLink href="/">🌎 Home</NavLink>
              {Links.map((link) => (
                <NavLink key={link.label} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
