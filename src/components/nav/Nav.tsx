import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="w-full p-4 bg-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          {/* Add more navigation links as needed */}
        </div>
        <Link href="/" className="text-white text-xl font-bold">
          Your Logo
        </Link>
      </div>
    </nav>
  )
}

export default Nav 