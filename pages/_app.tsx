import Layout from '@/components/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  // Redirect 'http' to 'https' if needed
  if (typeof window !== 'undefined') {
    const httpTokens: string[] | null = /^http:\/\/(.*)$/.exec(window.location.href);
    const isDev = window.location.hostname === 'localhost';
    if (!!httpTokens && !isDev) {
      window.location.replace('https://' + httpTokens[1]);
      return <></>;
    }
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
