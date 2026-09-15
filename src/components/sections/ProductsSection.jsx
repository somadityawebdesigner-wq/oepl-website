'use client';

export default function Products({ variant = "home" }) {
  const products = [
    {
      title: "LED Displays & Videos",
      type: "grid",
      images: [
        "https://oeplind.com/wp-content/uploads/2025/04/Untitled-design-4.jpg",
        "https://oeplind.com/wp-content/uploads/2025/04/Untitled-design-4.jpg",
        "https://oeplind.com/wp-content/uploads/2025/04/Untitled-design-4.jpg",
        "https://oeplind.com/wp-content/uploads/2025/04/Untitled-design-4.jpg"
      ]
    },
    {
      title: "PCBA Assemblies",
      type: "single",
      image: "https://oeplind.com/wp-content/uploads/2025/03/pcb1.jpg"
    },
    {
      title: "Master Controller",
      type: "single",
      image: "https://oeplind.com/wp-content/uploads/2025/03/master2.jpg"
    },
    {
      title: "ZS Coupler",
      type: "single",
      image: "https://oeplind.com/wp-content/uploads/2025/04/Zs-coupler.png"
    }
  ];

  return (
    <section className="py-16 pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading - 44px for product page variant */}
        <h2 className={`font-bold text-red-700 mb-4 ${variant === "product" ? "text-3xl sm:text-[57px]" : "text-3xl sm:text-[22px]"}`}>
          Our Products
        </h2>

        {/* Paragraph: Only shown on Home Page */}
        {variant === "home" && (
          <p className="text-gray-700 text-sm sm:text-base max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
            We are committed to delivering high-performance and reliable products and services that consistently meet and exceed customer expectations. With a strong focus on quality, innovation and efficiency, we ensure that our solutions align with industry standards and evolving market demands.
          </p>
        )}

        {/* Products Cards Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${variant !== "home" ? "mt-8" : ""}`}>
          {products.map((item, index) => (
            <div key={index} className="flex flex-col">
              
              {variant === "home" ? (
                /* Home Page Layout (With Red Border and Red Footer Bar) */
                <div className="rounded-2xl overflow-hidden border-2 border-red-700 bg-white flex flex-col justify-between shadow-lg">
                  <div className="w-full h-[340px] bg-white overflow-hidden">
                    {item.type === "grid" ? (
                      <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-0.5 bg-gray-200">
                        {item.images.map((img, imgIdx) => (
                          <img key={imgIdx} src={img} alt={`${item.title} ${imgIdx + 1}`} className="w-full h-full object-cover" />
                        ))}
                      </div>
                    ) : (
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div className="bg-[#cc0000] py-4 px-3 text-white text-center">
                    <h3 className="text-lg font-bold tracking-wide">{item.title}</h3>
                  </div>
                </div>
              ) : (
                /* Product Page Layout (Clean Image & Text Below without border, box line, or paragraph) */
                <div className="flex flex-col items-center">
                  <div className="w-full h-[320px] overflow-hidden mb-4">
                    {item.type === "grid" ? (
                      <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-0.5 bg-gray-200">
                        {item.images.map((img, imgIdx) => (
                          <img key={imgIdx} src={img} alt={`${item.title} ${imgIdx + 1}`} className="w-full h-full object-cover" />
                        ))}
                      </div>
                    ) : (
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-red-700 tracking-wide text-center">
                    {item.title}
                  </h3>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}