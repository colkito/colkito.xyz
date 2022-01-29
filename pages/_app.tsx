import '../styles/fonts.css'
import '../styles/globals.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  // Check the URL starts with 'http' protocol, and redirect to 'https' if needed
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

  return <Component {...pageProps} />
}

export default MyApp
