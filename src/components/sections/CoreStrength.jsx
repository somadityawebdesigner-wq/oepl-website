'use client';

export default function CoreStrength() {
  const strengths = [
    {
      title: ["Backward", "Integrated"],
      desc: "We maintain end-to-end control over our manufacturing processes, ensuring seamless quality checks, timely production, and unmatched reliability across all product lines.",
      icon: "https://oeplind.com/wp-content/uploads/2025/04/output-onlinegiftools-3.gif"
    },
    {
      title: ["Customized", "Design"],
      desc: "We offer custom-designed electronic components tailored to your specific requirements, ensuring compatibility and optimal performance for your projects.",
      icon: "https://oeplind.com/wp-content/uploads/2025/04/output-onlinegiftools-1.gif"
    },
    {
      title: ["Research", "Development"],
      desc: "Our dedicated R&D team continuously explores cutting-edge technologies and material sciences to innovate superior engineering solutions.",
      icon: "https://oeplind.com/wp-content/uploads/2025/04/output-onlinegiftools-2.gif"
    },
    {
      title: ["Skilled", "Team"],
      desc: "Our workforce comprises experienced engineers, technical experts, and skilled artisans dedicated to maintaining the highest standards of craftsmanship and safety.",
      icon: "https://oeplind.com/wp-content/uploads/2025/04/output-onlinegiftools-4.gif"
    }
  ];

  return (
    <section className="py-16 pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-red-700 mb-3">
          Core Strength
        </h2>
        <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto mb-14 font-medium">
          The Foundation of our Values <span className="italic font-normal">“We increased our efficiency and operational abilities by staying grounded to our ethical standards and business ethics.”</span>
        </p>

        {/* 4 Cards Grid with 3D Flip Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((item, index) => (
            <div 
              key={index} 
              className="group h-[380px] [perspective:1000px] cursor-pointer"
            >
              <div className="relative h-full w-full rounded-2xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* FRONT SIDE (Red Background with Title & Large Image Icon) */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-[#cc0000] text-white p-6 flex flex-col items-center justify-between [backface-visibility:hidden]">
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold tracking-wide leading-snug">
                      {item.title[0]} <br /> {item.title[1]}
                    </h3>
                  </div>
                  <div className="mb-4 flex items-center justify-center">
                    <img 
                      src={item.icon} 
                      alt={item.title.join(" ")} 
                      className="w-[110px] h-[150px] object-contain"
                    />
                  </div>
                </div>

                {/* BACK SIDE (Lime-Green Background on Hover) */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-[#84cc16] text-white p-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-sm sm:text-base font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}