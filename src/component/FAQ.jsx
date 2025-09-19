import React, { useState } from 'react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState({})

  const faqItems = [
    {
      id: 1,
      number: "01",
      question: "What is Tokenix and how does it work?",
      answer: "Tokenix is a comprehensive platform for creating, launching, and managing cryptocurrency tokens. It provides tools for smart contract deployment, token economics design, and community building without requiring coding knowledge."
    },
    {
      id: 2,
      number: "02", 
      question: "Is Tokenix safe to use for real token launches?",
      answer: "Yes, Tokenix uses industry-standard security practices and audited smart contracts. All token launches are conducted on secure, established blockchains with built-in safety mechanisms."
    },
    {
      id: 3,
      number: "03",
      question: "Which blockchains does Tokenix support?",
      answer: "Tokenix currently supports Ethereum, Binance Smart Chain, Polygon, and Solana. We're continuously adding support for more blockchains based on community demand."
    },
    {
      id: 4,
      number: "04",
      question: "Do I need coding experience to use Tokenix?",
      answer: "No coding experience required! Tokenix provides a user-friendly interface with guided wizards that walk you through the entire token creation process step by step."
    },
    {
      id: 5,
      number: "05",
      question: "How much does it cost to use Tokenix?",
      answer: "Tokenix offers flexible pricing plans starting from free for basic features. Premium plans include advanced customization, priority support, and additional blockchain integrations."
    }
  ]

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <section className="relative w-full my-2 mx-auto py-20  rounded-3xl">
      <div className="mx-auto">
        
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Horizontal Separator with Circle Indicator */}
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

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqItems.map((item, index) => (
            <div key={item.id}>
              {/* FAQ Item */}
              <div 
                className="flex items-center justify-between py-6 px-4 hover:bg-white/5 transition-colors duration-300 cursor-pointer group"
                onClick={() => toggleItem(item.id)}
              >
                {/* Left side - Number and Question */}
                <div className="flex items-start gap-6 flex-col lg:flex-row  w-full">
                  {/* Number */}
                  <div className="text-white/60 font-mono text-lg font-medium min-w-[3rem]">
                    ({item.number})
                  </div>
                  
                  
                  {/* Question */}
                  <div className="text-white text-lg font-medium font-manrope w-full text-left lg:text-center">
                    {item.question}
                  </div>
                  </div>

                 {/* Right side - Plus/Minus Icon */}
                 <div className="">
                   <div className="w-6 h-6 flex items-center justify-center transition-all duration-300">
                     <svg 
                       className="w-5 h-5 text-white group-hover:text-white/80" 
                       fill="none" 
                       stroke="currentColor" 
                       viewBox="0 0 24 24"
                     >
                       {/* Plus sign - horizontal line */}
                       <path 
                         strokeLinecap="round" 
                         strokeLinejoin="round" 
                         strokeWidth={2} 
                         d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                         className={`transition-all duration-300 ${
                           openItems[item.id] ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                         }`}
                       />
                       {/* Minus sign - only horizontal line */}
                       <path 
                         strokeLinecap="round" 
                         strokeLinejoin="round" 
                         strokeWidth={2} 
                         d="M6 12h12"
                         className={`transition-all duration-300 ${
                           openItems[item.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                         }`}
                       />
                     </svg>
                   </div>
                 </div>
              </div>

              {/* Answer (Expandable) */}
              <div className={`overflow-hidden transition-all duration-1000 ${
                openItems[item.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-4 pb-6">
                  <div className="text-center text-white/70 text-base leading-relaxed font-manrope">
                    {item.answer}
                  </div>
                </div>
              </div>

              {/* Separator Line (except for last item) */}
              {index < faqItems.length - 1 && (
                <div className="h-px bg-white/10 mx-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
