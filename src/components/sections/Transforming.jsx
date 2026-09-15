'use client';

export default function Transforming() {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] z-0">
       
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading - Centered */}
        <div className="text-center mb-10">
          <h2 className="text-[22px] sm:text-[22px] font-bold text-red-700 tracking-wide">
            Transforming With Innovations
          </h2>
        </div>

        {/* Content Grid: Left Image, Right Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Fixed Compact Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[420px] h-[320px] rounded-md overflow-hidden shadow-md bg-gray-100 border border-gray-200">
              <img 
                src="/Images/tranforming-oepl.webp" 
                alt="Tunnel Railway" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/Images/tranforming-oepl.webp";
                }}
              />
            </div>
          </div>

          {/* Right Side: Exact Original Content with Background Watermark Image */}
          <div className="lg:col-span-7 relative space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            
            {/* Background Watermark Image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <img 
                src="https://oeplind.com/wp-content/uploads/2025/04/Untitled-design-14.png" 
                alt="Watermark Background" 
                className="w-full h-full object-contain opacity-[0.07]" 
              />
            </div>

            {/* Content wrapped to stay above the background image */}
            <div className="relative z-10 space-y-4">
              <p>
                <strong className="text-gray-900">OLYMPUS Engineering Pvt. Ltd.</strong> is an <strong className="text-gray-900">ISO 9001-certified company</strong> based in <strong className="text-gray-900">Ghaziabad, Uttar Pradesh, India</strong>, specializing in high-quality engineering solutions for the <strong className="text-gray-900">Railways, Metro and Aerospace industries</strong>. We are committed to delivering precision-engineered products that meet global quality and safety standards.
              </p>
              
              <p>
                With advanced manufacturing facilities and a skilled workforce, we provide <strong className="text-gray-900">customized solutions</strong> for critical industrial applications. Our expertise includes <strong className="text-gray-900">CNC machining, precision fabrication and high-performance component manufacturing</strong> tailored to industry-specific requirements.
              </p>
              
              <p>
                At OLYMPUS Engineering, <strong className="text-gray-900">quality, innovation and reliability</strong> are at the core of our operations. Through continuous improvement and cutting-edge technology, we ensure durable, efficient and cost-effective solutions for clients worldwide.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}