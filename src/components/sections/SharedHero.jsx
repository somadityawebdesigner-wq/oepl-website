'use client';

export default function SharedHero({ title, bgImage, showTitle = false, height = "h-[40vh] min-h-[350px]" }) {
  return (
    <section className={`relative ${height} w-full flex items-center justify-center bg-gray-900`}>
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage || "/Images/14.webp"} 
          alt={title || "Banner"}
          className="w-full h-full object-cover"
        />
        {/* Dark overlay to make the text and background blend nicely */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Title inside the banner - Will only show if showTitle is true */}
      {showTitle && (
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wide ">
            {title}
          </h1>
        </div>
      )}
    </section>
  );
}