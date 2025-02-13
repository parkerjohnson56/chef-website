"use client"

import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
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
  }

  return (
    <footer className="bg-[#f9e9dc] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo */}
          <div className="w-48">
            <Link href="/">
              <Image 
                src="/images/logo.png"
                alt="Pennie's Recipes Logo"
                width={200}
                height={50}
                className="w-full"
              />
            </Link>
          </div>

          {/* Spacer for middle */}
          <div className="flex-grow hidden md:block" />

          {/* Navigation Columns */}
          <div className="flex gap-16 text-center md:text-left">
            {/* Explore Column */}
            <div className="space-y-4">
              <h3 className="font-playfair text-[#71883a] text-xl mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/recipes" className="text-gray-600 hover:text-[#71883a]">
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-600 hover:text-[#71883a]">
                    Home
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={(e) => scrollToSection(e, 'about')}
                    className="text-gray-600 hover:text-[#71883a]"
                  >
                    About Me
                  </button>
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div className="space-y-4">
              <h3 className="font-playfair text-[#71883a] text-xl mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                 
                  <a href="mailto:pjohns80@asu.edu" className="text-gray-600 hover:text-[#71883a]">
  Get in Touch
</a>
                </li>
                
                <li>
                  <Link href="https://instagram.com" className="text-gray-600 hover:text-[#71883a]">
                    Instagram
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Parker Johnson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 