
// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { Menu, X } from 'lucide-react';

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const navItems = [
//     { label: 'Home', href: '#HeroSection' },
//     { label: 'About Us', href: '#AboutUs' },
//     { label: 'Video', href: '#VideoHighlight' },
//     { label: 'Services', href: '#ServicesSection' },
//     { label: 'Gallery', href: '#GallerySection' },
//     { label: 'Packages', href: '#PackagesSection' },
//     { label: 'Contact', href: '#ContactSection' },
//   ];

//   // Prevent hydration mismatch on first load
//   if (!hasMounted) return null;

//   return (
//     <nav className="bg-white sticky top-0 z-50 w-full shadow-md overflow-x-hidden">
//       <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
          
//           {/* Logo + Title */}
//           <div className="flex items-center space-x-3">
//             <Image 
//               src="/logo.png"
//               alt="Logo"
//                width={50}
//                height={50}
//                className="object-contain"
//             />
//             <span className="text-lg lg:text-lg sm:text-xl md:text-xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#800000] bg-clip-text text-transparent">
//               Snap U Photography
//             </span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="text-black hover:text-[#FFD700] md:text-sm transition-colors duration-300 text-base lg:text-lg"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               aria-label="Toggle Menu"
//               className="text-black focus:outline-none"
//             >
//               {menuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-4 pb-4 overflow-x-hidden">
//           <nav className="flex flex-col space-y-3 pt-4">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="text-black hover:text-[#FFD700] transition-colors duration-300 text-base"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {item.label}
//               </a>
//             ))}
//           </nav>
//         </div>
//       )}
//     </nav>
//   );
// }



'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { label: 'Home', href: '#HeroSection' },
    { label: 'About Us', href: '#AboutUs' },
    { label: 'Video', href: '#VideoHighlight' },
    { label: 'Services', href: '#ServicesSection' },
    { label: 'Gallery', href: '#GallerySection' },
    { label: 'Packages', href: '#PackagesSection' },
    { label: 'Contact', href: '#ContactSection' },
  ];

  if (!hasMounted) return null;

  return (
    <div className="relative z-50">
      <nav className="bg-white sticky top-0 w-full shadow-md">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Title */}
            <div className="flex items-center space-x-3">
              <Image 
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="text-lg lg:text-lg sm:text-xl md:text-xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#800000] bg-clip-text text-transparent">
                Snap U Photography
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-black hover:text-[#FFD700] md:text-sm transition-colors duration-300 text-base lg:text-lg"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                className="text-black focus:outline-none"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Overlay */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white md:hidden shadow-md px-4 pb-4 z-50">
          <nav className="flex flex-col space-y-3 pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-black hover:text-[#FFD700] transition-colors duration-300 text-base"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
