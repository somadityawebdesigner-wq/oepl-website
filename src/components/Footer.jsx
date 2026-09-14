'use client';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 justify-between">
          
          {/* Column 1: Logo & Company Description */}
          <div className="space-y-4 lg:max-w-sm">
            <div className="flex items-center">
              <img 
                src="https://oeplind.com/wp-content/uploads/2025/03/Navy-And-Grey-Classic-Circle-Business-Consulting-Logo-1-edited.png" 
                alt="OLYMPUS Engineering Pvt. Ltd." 
                className="h-16 sm:h-20 w-auto object-contain -ml-2"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              OLYMPUS Engineering Pvt. Ltd. is an ISO 9001-certified company based in the industrial town of Ghaziabad, Uttar Pradesh, India.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 tracking-wide uppercase text-sm">
              Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/" className="text-gray-600 hover:text-[#cc0000] transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-[#cc0000] transition-colors">About Us</a></li>
              <li><a href="/products" className="text-gray-600 hover:text-[#cc0000] transition-colors">Products</a></li>
              <li><a href="/services" className="text-gray-600 hover:text-[#cc0000] transition-colors">Services</a></li>
              <li><a href="/alliances" className="text-gray-600 hover:text-[#cc0000] transition-colors">Our Alliances</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-[#cc0000] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Explore / Contact Details */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 tracking-wide uppercase text-sm">
              Explore
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-600">
              <li className="flex items-start space-x-3">
                <div className="bg-[#82b440] text-white p-2 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <span className="leading-relaxed">H-1 Avas Vikas Sector-15, Vasundhara, Ghaziabad, Uttar Pradesh 201012, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-[#82b440] text-white p-2 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <span>Phone no: +91 9810714334</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-[#82b440] text-white p-2 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <span>Email: info@oeplind.com</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom Red Copyright Bar */}
      <div className="bg-[#cc0000] text-white py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-center sm:text-left gap-2 sm:gap-0">
          <p>Copyright © 2026 oeplind.com</p>
          <p>Designed By 123 Web Designer</p>
        </div>
      </div>
    </footer>
  );
}