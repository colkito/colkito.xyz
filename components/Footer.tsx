import {
  Box,
  chakra,
  Container,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaGithubAlt, FaRegEnvelope, FaTwitter } from 'react-icons/fa'
import { ReactNode } from 'react'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.600', 'gray.400')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
          <Text>~ Decentralize all the thinks ~</Text>
        </HStack>
        <Stack direction="row" spacing="6">
          <SocialButton label="Twitter" href="https://twitter.com/colkitoxyz">
            <FaTwitter />
          </SocialButton>
          <SocialButton label="GitHub" href="https://github.com/colkito">
            <FaGithubAlt />
          </SocialButton>
          <SocialButton label="Contact" href="mailto:hi@colkito.xyz">
            <FaRegEnvelope />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
