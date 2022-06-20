import Link from 'next/link'
import { FaGithubAlt, FaTwitter } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import Container from './Container'

export default function LayoutFooter() {
  return (
    <footer className="bg-gray-50 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500">
            Decentralize all the thinks.
          </h3>
          <div className="flex lg:flex-row justify-center lg:justify-end items-center lg:pl-4 lg:w-1/2">
            <Link href="https://twitter.com/colkitoxyz" target="_blank">
              <a
                className="mx-3 p-4 text-lg rounded-full shadow text-blue-400 bg-white hover:bg-indigo-50"
                title="Follow me"
              >
                <FaTwitter />
              </a>
            </Link>
            <Link href="https://github.com/colkito" target="_blank">
              <a
                className="mx-3 p-4 text-lg rounded-full shadow text-slate-700 bg-white hover:bg-indigo-50"
                title="Check my repos"
              >
                <FaGithubAlt />
              </a>
            </Link>
            <Link href="mailto:hi@colkito.xyz" target="_blank">
              <a
                className="mx-3 p-4 text-lg rounded-full shadow text-indigo-600 bg-white hover:bg-indigo-50"
                title="Send me an email"
              >
                <MdAlternateEmail />
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
