export default function AboutContent() {
  return (
    <section className="py-12 lg:py-20 bg-white text-gray-800">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Main Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-red-700 tracking-wide uppercase inline-block pb-2 border-b-2 border-red-700">
            About Us
          </h2>
        </div>

        {/* Main Grid: items-stretch to keep columns equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Images Stack (Height 240px each) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-2 border-2 border-red-700 bg-white shadow-md">
              <img 
                src="/Images/8.webp" 
                alt="Olympus Engineering Train 1" 
                className="w-full h-[240px] object-cover block"
              />
            </div>
            <div className="p-2 border-2 border-red-700 bg-white shadow-md">
              <img 
                src="/Images/sddefault-1.webp" 
                alt="Olympus Engineering Train 2" 
                className="w-full h-[240px] object-cover block"
              />
            </div>
          </div>

          {/* Right Side: Text Content (16px / text-base, evenly spaced to match height) */}
          <div className="lg:col-span-7 flex flex-col justify-between text-gray-700 text-base leading-relaxed">
            <p className="text-justify">
              <strong>OLYMPUS Engineering Pvt. Ltd.</strong> is an <strong>ISO 9001-certified company based in Ghaziabad, Uttar Pradesh, India</strong>, specializing in high-quality engineering solutions for the <strong>Railways, Metro and Aerospace</strong> industries, committed to global quality and safety standards.
            </p>

            <p className="text-justify">
              With advanced manufacturing facilities and skilled workforce, we provide customized solutions for critical applications. Our expertise includes <strong>CNC machining, precision fabrication and high-performance component manufacturing</strong>.
            </p>

            <p className="text-justify">
              At OLYMPUS Engineering, <strong>quality, innovation and reliability</strong> are at our core. Through continuous improvement and cutting-edge technology, we ensure durable, efficient and cost-effective solutions worldwide.
            </p>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Specialization in Railways, Metro and Aerospace
              </h3>
              <p className="text-justify">
                We specialize in top-tier manufacturing solutions for the <strong>railways, metro and aerospace sectors</strong>, catering to their evolving needs with a strong focus on innovation and reliability.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                State-of-the-Art Manufacturing Facility
              </h3>
              <p className="text-justify">
                Our advanced facility, strategically located to serve the <strong>railways and metro systems</strong>, is equipped with cutting-edge technology adhering to global standards for maximum safety, efficiency and sustainability.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}