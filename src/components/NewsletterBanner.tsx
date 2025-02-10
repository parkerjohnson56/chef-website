"use client"

import Link from 'next/link'
import { useState } from 'react'

const NewsletterBanner = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-[#71883a]">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Link href="/newsletter" className="block">
            <div className="flex flex-col md:flex-row items-center justify-center cursor-pointer transition-colors duration-300 py-2 md:py-3">
              <p className="text-[10px] md:text-sm text-white text-center">
                Get new recipes delivered to your inbox! Sign Up Today! :) 
              </p>
            </div>
          </Link>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsVisible(false);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:opacity-80 p-1"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsletterBanner 