'use client';

export default function Pillars() {
  const pillars = [
    {
      title: 'Quality',
      desc: 'A structured quality process ensures zero-defect manufacturing, precision and reliability. With a team of expert engineers and technicians, we exceed industry standards and aim for absolute zero failure.',
      icon: (
        <svg className="w-12 h-12 text-[#cc0000]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 10h2v5h-2v-5zm0 6h2v2h-2v-2z"/>
        </svg>
      ),
    },
    {
      title: 'Trust',
      desc: 'Trust starts with consistency. Our commitment to high-quality standards, precision engineering and reliability fosters long-term customer confidence and industry leadership.',
      icon: (
        <svg className="w-12 h-12 text-[#cc0000]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
    },
    {
      title: 'Execution',
      desc: 'Flawless project execution is key to success. Our expert project team, supported by onsite and remote technical staff, ensures smooth operations, efficiency and timely delivery.',
      icon: (
        <svg className="w-12 h-12 text-[#cc0000]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
    },
    {
      title: 'Customer Focus',
      desc: 'A customer-focused strategy sets us apart. By understanding customer needs and delivering personalized experiences, we build strong relationships and continuously improve to enhance satisfaction.',
      icon: (
        <svg className="w-12 h-12 text-[#cc0000]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
    }
  ];

  return (
    <section className="pt-16 pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#cc0000] tracking-wide">
            Four Pillars Of Our Business
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item, index) => (
            <div 
              key={index} 
              style={{ '--hover-bg': '#8AA0A2' }}
              className="p-8 rounded-lg bg-white border border-gray-100 flex flex-col justify-start transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-[var(--hover-bg)]"
            >
              {/* Icon at Top-Left */}
              <div className="mb-6">
                {item.icon}
              </div>

              {/* Title & Description Below Icon */}
              <div>
                <h3 className="text-xl font-bold text-[#cc0000] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}