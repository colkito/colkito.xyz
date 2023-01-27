// import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
// import { HiMenu } from 'react-icons/hi'
import { FiMenu } from 'react-icons/fi'

export default function LayoutHeader() {
  return (
    <header className="fixed w-full flex justify-between items-center px-5 md:px-12 h-20 bg-gray-50 border-b shadow-accent-2 z-50">
      <nav>
        <Link href={'/'}>
          <a title="Home">
            {/* <HiMenu /> */}
            <FiMenu size={'30'} />
          </a>
        </Link>
      </nav>

      <Image
        src="/assets/picture.jpg"
        width={36}
        height={36}
        className="object-cover w-12 h-12 rounded-full"
        alt="Mario Colque"
      />
    </header>
  )
}
