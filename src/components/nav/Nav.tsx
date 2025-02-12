"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Only show extra padding on homepage
  const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/'

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    
    // Check if we're not on homepage
    if (window.location.pathname !== '/') {
      // Navigate to homepage with the section hash
      window.location.href = `/#${id}`
    } else {
      // If on homepage, just scroll
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }, 100)
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`w-full bg-[#faf3ef] relative ${isHomePage ? 'mt-0' : ''}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - centered on mobile */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Link href="/" className="font-bold">
              <Image 
                src="/images/logo.png"
                alt="Your Logo"
                width={200}
                height={50}
              />
            </Link>
          </div>

          {/* Hamburger button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#71883a] z-50"
          >
            {isMenuOpen ? (
              // X icon for close
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-20">
          <a href="mailto:pjohns80@asu.edu" className="text-[#71883a] hover:text-gray-600 font-bold font-italiana">
  CONTACT
</a>

            <Link href="/recipes" className="text-[#71883a] hover:text-gray-600 font-bold font-italiana">
              RECIPES
            </Link>
            <button 
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-[#71883a] hover:text-gray-600 font-bold font-italiana"
            >
              ABOUT
            </button>
          </div>

          {/* Mobile menu - with transition */}
          <div 
            className={`
              absolute top-full left-0 right-0 w-full 
              bg-[#faf3ef] md:hidden flex flex-col items-center 
              shadow-md transition-all duration-300 ease-in-out text-center
              z-50
              ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
            `}
          >
            <div className="py-4 space-y-4 w-full">
              <Link href="/contact" className="block text-[#71883a] hover:text-gray-600 font-bold font-italiana">
                CONTACT
              </Link>
              <Link href="/recipes" className="block text-[#71883a] hover:text-gray-600 font-bold font-italiana">
                RECIPES
              </Link>
              <button 
                onClick={(e) => scrollToSection(e, 'about')}
                className="block w-full text-[#71883a] hover:text-gray-600 font-bold font-italiana"
              >
                ABOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav