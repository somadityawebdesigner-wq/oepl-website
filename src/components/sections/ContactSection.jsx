'use client';

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split Container: Form on Left, Info on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          
          {/* Left Side: Contact Form (No separate top title to match screenshot layout) */}
          <div className="bg-white">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Name *" 
                  required
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 text-gray-800 text-sm shadow-sm"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email *" 
                  required
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 text-gray-800 text-sm shadow-sm"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Contact Number *" 
                  required
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 text-gray-800 text-sm shadow-sm"
                />
              </div>
              <div>
                <textarea 
                  rows="5" 
                  placeholder="Your Enquiry *" 
                  required
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 text-gray-800 text-sm shadow-sm resize-none"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="bg-[#b30000] hover:bg-red-800 text-white font-bold py-3.5 px-8 rounded-md transition-colors text-sm tracking-wider uppercase shadow-md"
                >
                  SEND REQUEST
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Get In Touch Details */}
          <div className="flex flex-col justify-center pt-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1a2b3c] mb-4">
              Get In Touch With Us!
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
              Any delicate you how kindness horrible outlived servants. You high bod wish help call draw side. Girl quit if case mr sing as no none neat.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#82b440] text-white p-3.5 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1a2b3c]">Phone Number</h4>
                  <p className="text-gray-600 font-medium text-sm sm:text-base mt-0.5">+91 9810714334</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#82b440] text-white p-3.5 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1a2b3c]">Email Address</h4>
                  <p className="text-gray-600 font-medium text-sm sm:text-base mt-0.5">info@oeplind.com</p>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#82b440] text-white p-3.5 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1a2b3c]">Ofice Address</h4>
                  <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed mt-0.5">
                    H-1 Avas Vikas Sector-15, Vasundhara Ghaziabad, Uttar Pradesh 201012 India
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Map Section */}
        <div className="w-full h-[350px] sm:h-[420px] bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative shadow-md">
          <iframe 
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9947847959074!2d77.368!3d28.657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM5JzI3LjIiTiA3N8KwMjInMDQuOCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}