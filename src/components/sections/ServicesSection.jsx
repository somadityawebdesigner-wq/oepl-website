'use client';

export default function Services({ variant = "home" }) {
  const services = [
    {
      title: "Testing And Commissioning Work For Rakes For Metro",
      image: "./Images/MetroTracks.webp"
    },
    {
      title: "Servicing & Maintenance Of RMPU System In AC Coaches",
      image: "./Images/oelp-services1.webp"
    },
    {
      title: "Electrical Cable Laying Work",
      image: " ./Images/oelp-services2.webp"
    }
  ];

  return (
    <section className="py-16 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading: 57px for services page variant, 22px for home */}
        <h2 className={`font-bold text-red-700 mb-3 sm:mb-4 ${variant === "service" ? "text-3xl sm:text-[57px]" : "text-2xl sm:text-[22px] md:text-[22px]"}`}>
           Services
        </h2>

        {/* Paragraph: Only shown on Home Page */}
        {variant === "home" && (
          <p className="text-gray-700 text-xs sm:text-sm md:text-base max-w-4xl mx-auto mb-10 sm:mb-16 leading-relaxed font-medium px-2">
            Through continuous improvement, we refine our products, services and solutions to enhance customer satisfaction and long-term reliability. By embracing new technologies and optimizing processes, we stay ahead in providing exceptional value and excellence in every offering.
          </p>
        )}

        {/* Conditional Layout: Service Page gets the big Red Container layout from the image */}
        {variant === "service" ? (
          <div className="bg-[#cc0000] rounded-3xl p-6 sm:p-10 lg:p-12 mt-6 sm:mt-8 max-w-6xl mx-auto shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {services.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col justify-between p-4 sm:p-5 h-full">
                  <div className="w-full h-[220px] sm:h-[250px] overflow-hidden rounded-xl mb-4">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-center flex-grow py-2">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 tracking-wide text-center leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Home Page Layout (Original Cards Grid) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {services.map((item, index) => (
              <div key={index} className="rounded-2xl overflow-hidden border-2 border-red-700 bg-white flex flex-col justify-between shadow-lg h-full">
                <div className="w-full h-[260px] sm:h-[300px] md:h-[320px] bg-white overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#cc0000] py-4 px-3 sm:px-4 text-white text-center flex items-center justify-center min-h-[80px] sm:min-h-[90px]">
                  <h3 className="text-sm sm:text-base font-bold tracking-wide leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}