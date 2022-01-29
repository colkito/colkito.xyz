import type { ReactNode } from 'react'
import {
  Box,
  // Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  useDisclosure,
  HStack,
  Link,
  Image,
  Container,
} from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

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
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={'transparent'} borderBottomWidth={1}>
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
              <Link href="/">
                <Image
                  borderRadius="full"
                  boxSize="30px"
                  src="/images/picture-rounded-32x32.png"
                  alt="Mario Colque"
                />
              </Link>
              {Links.map((link) => (
                <NavLink key={link.label} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>

          <Stack direction="row" spacing="6">
            <Button
              px={2}
              py={1}
              rounded={'md'}
              bg={'transparent'}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
              }}
              onClick={toggleColorMode}
            >
              {colorMode === 'light' ? '🌒' : '☀️'}
            </Button>
          </Stack>
        </Container>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Link px={2} py={1} href="/">
                Home
              </Link>
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
