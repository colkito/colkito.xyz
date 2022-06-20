// import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import { HiMenu } from 'react-icons/hi'

export default function LayoutHeader() {
  return (
    <header className="fixed w-full flex justify-between items-center px-5 md:px-12 h-20 bg-gray-50 shadow shadow-accent-2 z-50">
      <Link href={'/'}>
        <a title="Home">
          <Image
            src="/assets/picture.jpg"
            width={48}
            height={48}
            className="object-cover w-12 h-12 rounded-full"
            alt="Mario Colque"
          />
        </a>
      </Link>

      <nav>
        <button>
          <HiMenu />
        </button>
      </nav>
    </header>
  )
}
