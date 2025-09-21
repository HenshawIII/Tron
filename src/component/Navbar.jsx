'use client'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Tronixx</h2>
          <button
            onClick={closeMobileMenu}
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="mt-4">
          <Link
            to="/"
            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
          <Link
            to="/tokens"
            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            onClick={closeMobileMenu}
          >
            Tokens
          </Link>
        </nav>
      </div>

      {/* Desktop Navbar */}
      <nav className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
         'bg-transparent'
      }`}>
        <div className=" mx-auto px-6 md:px-12 md:py-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#8F72D0] rotate-[45deg] to-[#347FB0] rounded-lg flex items-center justify-center">
                <span className="absolute text-white font-bold text-lg -rotate-[45deg]">X</span>
              </div>
              <Link to="/" className="px-2 text-2xl font-[600] text-white hover:text-gray-300 transition-colors">
                Tronixx
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden bg-slate-50/[0.08] rounded-full py-4 px-12 lg:flex items-center space-x-8">
              <Link
                to="/"
                className="text-white hover:text-gray-300 transition-colors font-manrope font-light text-[16px]"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-gray-300 transition-colors font-manrope font-light text-[16px]"
              >
                About Us
              </Link>
              <Link
                to="/tokens"
                className="text-white hover:text-gray-300 transition-colors font-manrope font-light text-[16px]"
              >
                Tokens
              </Link>
              <Link
                to="/tokens"
                className="text-white hover:text-gray-300 transition-colors font-manrope font-light text-[16px]"
              >
               Blog
              </Link>
              <Link
                to="/tokens"
                className="text-white hover:text-gray-300 transition-colors font-manrope font-light text-[16px]"
              >
                Pages
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
            <Link
             to="/get-started"
             className="relative font-medium font-manrope text-[16px] text-white px-6 py-2 rounded-full text-lg overflow-hidden group transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
             style={{
               background: 'linear-gradient(to right, #8F72D0, #347FB0)'
             }}
           >
             <span className="relative z-20 transition-colors duration-300 group-hover:text-gray-900">
               Get Started
             </span>
             <div 
               className="absolute inset-0 bg-white rounded-full transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 z-10"
               style={{
                 transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
               }}
             ></div>
           </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-gray-300 focus:outline-none bg-transparent"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
