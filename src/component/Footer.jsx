import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribing with email:', email)
    setEmail('')
  }

  return (
    <footer className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Brand Information Section */}
          <div className="space-y-6">
            {/* Logo and Brand Name */}
            <div className="flex items-center space-x-4">
              {/* Logo */}
              <div className="w-12 h-12 bg-gradient-to-br from-[#8F72D0] rotate-[45deg] to-[#347FB0] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl -rotate-[45deg]">X</span>
              </div>
              {/* Brand Name */}
              <h3 className="text-2xl font-bold text-white">Tronixx</h3>
            </div>
            
            {/* Description */}
            <p className="text-white/80 text-base leading-relaxed font-manrope max-w-md">
              Tronixx empowers users to launch secure, scalable blockchain projects using powerful no-code tools and seamless Web3 integration.
            </p>
          </div>

          {/* Newsletter Subscription Section */}
          <div className="space-y-6">
            {/* Heading */}
            <h4 className="text-white text-xl font-semibold">
              It's a date, okay?
            </h4>
            
            {/* Email Form */}
            <form onSubmit={handleSubscribe} className="space-y-4">
              {/* Email Input */}
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none  focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              {/* Subscribe Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#8F72D0] to-[#347FB0]  text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Subscribe Now
              </button>
            </form>
          </div>

          {/* Navigation Links Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Pages Column */}
            <div className="space-y-4">
              <h5 className="text-white font-semibold text-lg">Pages</h5>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-white/70 hover:text-white transition-colors duration-300 font-manrope">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/70 hover:text-white transition-colors duration-300 font-manrope">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-white/70 hover:text-white transition-colors duration-300 font-manrope">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-white/70 hover:text-white transition-colors duration-300 font-manrope">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-4">
              <h5 className="text-white font-semibold text-lg">Company</h5>
              <ul className="space-y-3">
                <li>
                  <Link to="/blog-single" className="text-white/70 hover:text-white transition-colors duration-300 font-manrope">
                    Blog Single
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="text-white/70 hover:text-white transition-colors duration-300 font-manrope">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-white/70 hover:text-white transition-colors duration-300 font-manrope">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/70 hover:text-white transition-colors duration-300 font-manrope">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-4">
              <h5 className="text-white font-semibold text-lg">Legal</h5>
              <ul className="space-y-3">
                <li>
                  <Link to="/style-guide" className="text-white/70 hover:text-white transition-colors duration-300 font-manrope">
                    Style Guide
                  </Link>
                </li>
                <li>
                  <Link to="/licensing" className="text-white/70 hover:text-white transition-colors duration-300 font-manrope">
                    Licensing
                  </Link>
                </li>
                <li>
                  <Link to="/instructions" className="text-white/70 hover:text-white transition-colors duration-300 font-manrope">
                    Instructions
                  </Link>
                </li>
                <li>
                  <Link to="/changelog" className="text-white/70 hover:text-white transition-colors duration-300 font-manrope">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Column */}
            <div className="space-y-4">
              <h5 className="text-white font-semibold text-lg">Social</h5>
              <ul className="space-y-3">
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-300 font-manrope">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-300 font-manrope">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-300 font-manrope">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-300 font-manrope">
                    Dribbble
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-16 pt-8 ">
        <div className="flex w-full items-center justify-center mb-16">
          <div className="flex items-center gap-4 w-full ">
            {/* Left line */}
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/40"></div>
            
            {/* Center hollow circle */}
            <div className="w-3 h-3 bg-transparent border border-white rounded-full"></div>
            
            {/* Right line */}
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-white/40"></div>
          </div>
        </div>
          <div className="text-center text-white/60 font-manrope">
            <p>&copy; 2024 Tronixx. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
