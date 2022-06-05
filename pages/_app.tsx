import '../styles/fonts.css'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Layout from '@/components/Layout'
import type { AppProps } from 'next/app'

const fonts = {
  heading: "'Texta Alt', sans-serif",
  body: "'Texta Alt', sans-serif",
}

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({
  fonts,
  colors,
})

export default function MyApp({ Component, pageProps }: AppProps) {
  // Redirect 'http' to 'https' if needed
  if (typeof window !== 'undefined') {
    const httpTokens: string[] | null = /^http:\/\/(.*)$/.exec(
      window.location.href
    )
    const isDev = window.location.hostname === 'localhost'
    if (!!httpTokens && !isDev) {
      window.location.replace('https://' + httpTokens[1])
      return <></>
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
