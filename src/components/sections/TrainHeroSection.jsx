'use client';

export default function TrainHeroSection() {
  return (
    <section className="relative w-full h-[350px] sm:h-[550px] lg:h-[450px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('https://oeplind.com/wp-content/uploads/2025/04/mumbai-delhi-howrah-train.jpg')` // Aap yahan apni train/bridge image ka direct URL daal sakte hain
        }}
      >
        {/* Dark overlay taaki background thoda dim rahe aur professional lage */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Area (Agar aapko yahan koi text ya banner lagana ho to aap iske andar add kar sakte hain) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Optional text content */}
      </div>
    </section>
  );
}