
// 'use client';
// import Link from 'next/link';
// import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
// import { motion } from 'framer-motion';

// export default function FooterSection() {
//   return (
//     <footer className="bg-[#4E342E] text-white py-12 px-6">
//       <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
//         {/* 1. Brand Info */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-2xl font-bold text-[#D4AF37] mb-3">
//             Snap U Photography
//           </h3>
//           <p className="text-sm text-gray-200">
//             Capturing your cultural moments with care and creativity. Based in the UK, we specialize in Dhoti, naming, and family ceremonies.
//           </p>
//         </motion.div>

//         {/* Wrapper for Services and Quick Links: grid-cols-2 on mobile */}
//         <div className="grid grid-cols-2 gap-6 md:block md:space-y-0">
//           {/* 2. Services */}
//           <motion.div
//             className="space-y-2"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-lg font-semibold text-[#D4AF37]">Services</h4>
//             <ul className="text-sm space-y-1">
//               <li>Dhoti Ceremony</li>
//               <li>Naming Ceremony</li>
//               <li>Family Portraits</li>
//               <li>Outdoor Sessions</li>
//               <li>Custom Packages</li>
//             </ul>
//           </motion.div>

//           {/* 3. Quick Links */}
//           <motion.div
//             className="space-y-2"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-lg font-semibold text-[#D4AF37]">Quick Links</h4>
//             <ul className="text-sm space-y-1">
//               <li><Link href="#why-choose-us" className="hover:underline">Why Choose Us</Link></li>
//               <li><Link href="#packages" className="hover:underline">Packages</Link></li>
//               <li><Link href="#services" className="hover:underline">Services</Link></li>
//               <li><Link href="#gallery" className="hover:underline">Gallery</Link></li>
//               <li><Link href="#contact" className="hover:underline">Contact</Link></li>
//             </ul>
//           </motion.div>
//         </div>

//         {/* 4. Contact Info */}
//         <motion.div
//           className="space-y-2"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//         >
//           <h4 className="text-lg font-semibold text-[#D4AF37]">Contact Us</h4>
//           <p className="flex items-center gap-2 text-sm">
//             <Phone className="w-4 h-4 text-[#D4AF37]" /> +44 1234 567890
//           </p>
//           <p className="flex items-center gap-2 text-sm">
//             <Mail className="w-4 h-4 text-[#D4AF37]" /> info@snapuphotos.co.uk
//           </p>
//           <div className="flex gap-4 mt-2">
//             <a href="#" aria-label="Facebook" className="hover:text-[#D4AF37]">
//               <Facebook />
//             </a>
//             <a href="#" aria-label="Instagram" className="hover:text-[#D4AF37]">
//               <Instagram />
//             </a>
//           </div>
//         </motion.div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="text-center mt-10 text-sm text-gray-300">
//         © {new Date().getFullYear()} Snap U Photography. All rights reserved.
//       </div>
//     </footer>
//   );
// }


'use client';
import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FooterSection() {
  return (
    <footer className="bg-[#4E342E] text-white py-8 px-4 md:py-10 md:px-8 lg:py-12 lg:px-16 2xl:px-32 overflow-hidden">
      <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        {/* 1. Brand Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-2 md:mb-3">
            Snap U Photography
          </h3>
          <p className="text-sm md:text-base text-gray-200 max-w-sm">
            Capturing your cultural moments with care and creativity. Based in the UK, we specialize in Dhoti, naming, and family ceremonies.
          </p>
        </motion.div>

        {/* Wrapper for Services + Quick Links (mobile: 2-cols, tablet+: stacked or grid) */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:col-span-1 lg:col-span-2 lg:grid-cols-2 lg:gap-8">
          {/* 2. Services */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg md:text-xl font-semibold text-[#D4AF37]">Services</h4>
            <ul className="text-sm md:text-base space-y-1">
              <li>Dhoti Ceremony</li>
              <li>Cinematic viedo </li>
              <li>Family Portraits</li>
              <li>Outdoor Sessions</li>
              <li>Custom Packages</li>
            </ul>
          </motion.div>

          {/* 3. Quick Links */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg md:text-xl font-semibold text-[#D4AF37]">Quick Links</h4>
            <ul className="text-sm md:text-base space-y-1">
              <li><Link href="#WhyChooseUs" className="hover:underline">Why Choose Us</Link></li>
              <li><Link href="#PackagesSection" className="hover:underline">Packages</Link></li>
              <li><Link href="#ServicesSection" className="hover:underline">Services</Link></li>
              <li><Link href="#GallerySection" className="hover:underline">Gallery</Link></li>
              <li><Link href="#ContactSection" className="hover:underline">Contact</Link></li>
            </ul>
          </motion.div>
        </div>

        {/* 4. Contact Info */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg md:text-xl font-semibold text-[#D4AF37]">Contact Us</h4>
          <p className="flex items-center gap-2 text-sm md:text-base">
            <Phone className="w-4 h-4 text-[#D4AF37]" /> +44 1234 567890
          </p>
          <p className="flex items-center gap-2 text-sm md:text-base">
            <Mail className="w-4 h-4 text-[#D4AF37]" /> info@snapuphotos.co.uk
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-[#D4AF37]">
              <Facebook />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#D4AF37]">
              <Instagram />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 md:mt-10 text-sm md:text-base text-gray-300">
        © {new Date().getFullYear()} Snap U Photography. All rights reserved.
      </div>
    </footer>
  );
}
