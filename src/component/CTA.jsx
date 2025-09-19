import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="relative w-[94%] xl:w-[94%] bg-[#0c0c0c] mx-auto mb-20 lg:h-[95vh] flex items-center justify-center overflow-hidden py-10 rounded-3xl">
      {/* Background Gradient */}
      <div className="absolute inset-0 "></div>
      
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Top-left circular ring */}
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/20 rounded-full"></div>
        <div className="absolute top-12 left-12 w-28 h-28 border border-white/10 rounded-full"></div>
        <div className="absolute -bottom-32 -right-32 w-full h-full">
        <img src={'../public/grp14.png'} alt="hero-bg" className='w-[100%] h-[100%] xl:w-full xl:h-full' />
        </div>
        
        {/* Top-right geometric shape */}
        <div className="absolute top-16 right-16 w-24 h-24 transform rotate-45">
          <div className="w-full h-full bg-white/10 clip-path-polygon"></div>
        </div>
        
        {/* Bottom-left pipe structure */}
        <div className="absolute bottom-20 left-8 w-40 h-8 bg-gradient-to-r from-white/5 to-white/10 rounded-full transform rotate-12"></div>
        <div className="absolute bottom-24 left-12 w-32 h-6 bg-gradient-to-r from-white/5 to-white/10 rounded-full transform rotate-12"></div>
        
        {/* Star icons */}
        <div className="absolute bottom-8 right-8 w-6 h-6">
          <svg className="w-full h-full text-white/60 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-4 h-4">
          <svg className="w-full h-full text-white/40 animate-pulse delay-1000" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        
        {/* Additional geometric elements */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-white/5 rounded-lg transform rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-white/5 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-[500] text-white leading-tight mb-8">
          Accelerate Blockchain Launch with Powerful Tools
        </h1>

        {/* Description */}
        <p className="text-[16px]  text-white/90 leading-relaxed font-manrope mb-12 max-w-3xl mx-auto">
          Build, deploy, and grow your crypto project faster than ever. Tokenix gives you everything you need—from smart contracts to launchpad support—all in one seamless platform.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
             <Link
              to="/get-started"
              className="relative font-medium font-manrope text-[16px] text-white px-8 py-3 rounded-full text-lg overflow-hidden group transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
              style={{
                background: 'linear-gradient(to right, #8F72D0, #347FB0)'
              }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-900">
                Get Started For Free
              </span>
              <div 
                className="absolute inset-0 bg-white transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 rounded-full"
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              ></div>
            </Link>
            </div>
      </div>

      {/* Additional Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
    </section>
  )
}

export default CTA
