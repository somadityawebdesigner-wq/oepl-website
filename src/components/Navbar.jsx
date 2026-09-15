import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent w-full">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
        
        <Link href="/" className="flex items-center group">
          <div className="relative h-16 w-auto flex items-center">
            <Image 
              src="https://oeplind.com/wp-content/uploads/2025/03/cropped-Navy-And-Grey-Classic-Circle-Business-Consulting-Logo-150x80.png"
              alt="Olympus Engineering Pvt. Ltd."
              width={150}
              height={80}
              className="h-16 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-white font-medium text-base">
          <Link href="/" className="hover:text-red-400 transition">Home</Link>
          <Link href="/about" className="hover:text-red-400 transition">About Us</Link>
          <Link href="/products" className="hover:text-red-400 transition">Product</Link>
          <Link href="/services" className="hover:text-red-400 transition">Services</Link>
          {/* <Link href="/alliances" className="hover:text-red-400 transition">Our Alliances</Link> */}
          <Link href="/blog" className="hover:text-red-400 transition">Blog</Link>
          <Link href="/contact" className="hover:text-red-400 transition">Contact Us</Link>
        </nav>

        {/* Action Button (Wide & Bold like original) */}
        <div>
          <Link 
            href="/contact" 
            className="bg-[#84cc16] hover:bg-lime-600 text-white font-bold px-8 py-3.5 tracking-wider text-sm transition shadow-lg inline-block uppercase"
          >
            GET IN TOUCH
          </Link>
        </div>

      </div>
    </header>
  );
}