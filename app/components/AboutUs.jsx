

// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// export default function AboutUs() {
//   const [expanded, setExpanded] = useState(false);
//   const toggleExpanded = () => setExpanded(!expanded);

//   return (
//     <section className="bg-white py-16 px-4 md:px-8">
//       <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between">
//         {/* Left Text Content */}
//         <div className="md:w-1/2 space-y-4 text-center md:text-left">
//           <h2 className="text-sm font-medium text-black uppercase tracking-wide">About Us</h2>
//           <h3 className="text-3xl md:text-4xl font-bold text-[#800020]">Behind the Lens</h3>

//           <p className="text-gray-500">
//             We capture timeless moments through our lens, telling visual stories that inspire and connect.
//           </p>

//           {expanded && (
//             <p className="text-gray-500 transition-all duration-300">
//               Our mission is to reflect authentic experiences in every frame. With years of expertise and a passion for storytelling, we create visuals that linger in memory.
//             </p>
//           )}

//           <button onClick={toggleExpanded}
//             className="mt-4 flex items-center justify-center md:justify-start gap-2 text-white bg-[#D4AF37] px-4 py-2 rounded hover:bg-[#c19b2c] transition"
//           >
//             {expanded ? 'Read Less' : 'Read More'}
//             <span
//               className={`transform transition-transform duration-300 ${
//                 expanded ? 'rotate-180' : 'rotate-0'
//               }`}
//             >
//               ➜
//             </span>
//           </button>
//         </div>

//         {/* Right Side Images */}
//         <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end gap-6 scale-[0.85] sm:scale-100">
//           {/* Left Image Group */}
//           <div className="relative w-[220px] h-[280px]">
//             <div className="absolute top-0 left-0 w-[220px] h-[220px] rounded overflow-hidden border-4 border-white shadow-lg shadow-red-200 z-10 transition-transform hover:scale-105">
//               <Image src="/len1.jpg" alt="Image A1" fill className="object-cover" />
//             </div>
//             <div className="absolute top-[140px] left-[40px] w-[180px] h-[180px] rounded overflow-hidden border-4 border-white shadow-lg shadow-orange-200 z-20 transition-transform hover:scale-105">
//               <Image src="/len2.jpg" alt="Image A2" fill className="object-cover" />
//             </div>
//           </div>

//           {/* Right Image Group */}
//           <div className="relative w-[200px] h-[260px]">
//             <div className="absolute top-0 left-0 w-[160px] h-[160px] rounded overflow-hidden border-4 border-white shadow-lg shadow-blue-200 z-10 transition-transform hover:scale-105">
//               <Image src="/len3.jpg" alt="Image B1" fill className="object-cover" />
//             </div>
//             <div className="absolute top-[120px] left-[40px] w-[180px] h-[180px] rounded overflow-hidden border-4 border-white shadow-lg shadow-green-200 z-20 transition-transform hover:scale-105">
//               <Image src="/len4.jpg" alt="Image B2" fill className="object-cover" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// export default function AboutUs() {
//   const [expanded, setExpanded] = useState(false);
//   const toggleExpanded = () => setExpanded(!expanded);

//   return (
//     <section className="bg-white py-16 px-4 md:px-8">
//       <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between">
//         {/* Left Text Content */}
//         <div className="md:w-1/2 space-y-4 text-center md:text-left">
//           <h2 className="text-sm font-medium text-black uppercase tracking-wide">About Us</h2>
//           <h3 className="text-3xl md:text-4xl font-bold text-[#800020]">Behind the Lens</h3>

//           <p className="text-gray-500">
//             We capture timeless moments through our lens, telling visual stories that inspire and connect.
//           </p>

//           {expanded && (
//             <p className="text-gray-500 transition-all duration-300">
//               Our mission is to reflect authentic experiences in every frame. With years of expertise and a passion for storytelling, we create visuals that linger in memory.
//             </p>
//           )}

//           <button
//             onClick={toggleExpanded}
//             className="mt-4 flex items-center justify-center md:justify-start gap-2 text-white bg-[#D4AF37] px-4 py-2 rounded hover:bg-[#c19b2c] transition"
//           >
//             {expanded ? 'Read Less' : 'Read More'}
//             <span
//               className={`transform transition-transform duration-300 ${
//                 expanded ? 'rotate-180' : 'rotate-0'
//               }`}
//             >
//               ➜
//             </span>
//           </button>
//         </div>

//         {/* Right Side Images */}
//         <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end gap-6 scale-[0.85] sm:scale-100">
//           {/* Left Image Group */}
//           <div className="relative w-[220px] h-[280px]">
//             <div className="absolute top-0 left-0 w-[220px] h-[220px] rounded overflow-hidden border-4 border-white shadow-lg shadow-red-200 z-10 transition-transform hover:scale-105">
//               <Image
//                 src="/len1.jpg"
//                 alt="Image A1"
//                 fill
//                 sizes="(max-width: 768px) 100vw, 220px"
//                 className="object-cover"
//               />
//             </div>
//             <div className="absolute top-[140px] left-[40px] w-[180px] h-[180px] rounded overflow-hidden border-4 border-white shadow-lg shadow-orange-200 z-20 transition-transform hover:scale-105">
//               <Image
//                 src="/len2.jpg"
//                 alt="Image A2"
//                 fill
//                 sizes="(max-width: 768px) 100vw, 180px"
//                 className="object-cover"
//               />
//             </div>
//           </div>

//           {/* Right Image Group */}
//           <div className="relative w-[200px] h-[260px]">
//             <div className="absolute top-0 left-0 w-[160px] h-[160px] rounded overflow-hidden border-4 border-white shadow-lg shadow-blue-200 z-10 transition-transform hover:scale-105">
//               <Image
//                 src="/len3.jpg"
//                 alt="Image B1"
//                 fill
//                 sizes="(max-width: 768px) 100vw, 160px"
//                 className="object-cover"
//               />
//             </div>
//             <div className="absolute top-[120px] left-[40px] w-[180px] h-[180px] rounded overflow-hidden border-4 border-white shadow-lg shadow-green-200 z-20 transition-transform hover:scale-105">
//               <Image
//                 src="/len4.jpg"
//                 alt="Image B2"
//                 fill
//                 sizes="(max-width: 768px) 100vw, 180px"
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AboutUs() {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Content */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-sm font-medium text-black uppercase tracking-wide">About Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#800020]">Behind the Lens</h3>

          <p className="text-gray-500">
            We capture timeless moments through our lens, telling visual stories that inspire and connect.
          </p>

          {expanded && (
            <p className="text-gray-500 transition-all duration-300">
              Our mission is to reflect authentic experiences in every frame. With years of expertise and a passion for storytelling, we create visuals that linger in memory.
            </p>
          )}
          <button onClick={toggleExpanded}
            className="mt-4 flex items-center justify-center md:justify-start gap-2 text-white bg-[#D4AF37] px-4 py-2 rounded hover:bg-[#c19b2c] transition"
          >
            {expanded ? 'Read Less' : 'Read More'}
            <span
              className={`transform transition-transform duration-300 ${
                expanded ? 'rotate-180' : 'rotate-0'
              }`}
            >
              ➜
            </span>
          </button>
        </div>

        {/* Right Side Images */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end gap-6 scale-[0.85] sm:scale-100">
          {/* Left Image Group */}
          <div className="relative w-[220px] h-[280px]">
            <div className="absolute top-0 left-0 w-[220px] h-[220px] rounded overflow-hidden border-4 border-white shadow-lg shadow-red-200 z-10 transition-transform hover:scale-105">
              <Image
                src="/len1.jpg"
                alt="Image A1"
                fill
                sizes="(max-width: 768px) 100vw, 220px"
                className="object-cover"
              />
            </div>
            <div className="absolute top-[140px] left-[40px] w-[180px] h-[180px] rounded overflow-hidden border-4 border-white shadow-lg shadow-orange-200 z-20 transition-transform hover:scale-105">
              <Image
                src="/len2.jpg"
                alt="Image A2"
                fill
                sizes="(max-width: 768px) 100vw, 180px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Image Group */}
          <div className="relative w-[200px] h-[260px]">
            <div className="absolute top-0 left-0 w-[160px] h-[160px] rounded overflow-hidden border-4 border-white shadow-lg shadow-blue-200 z-10 transition-transform hover:scale-105">
              <Image
                src="/len3.jpg"
                alt="Image B1"
                fill
                sizes="(max-width: 768px) 100vw, 160px"
                className="object-cover"
              />
            </div>
            <div className="absolute top-[120px] left-[40px] w-[180px] h-[180px] rounded overflow-hidden border-4 border-white shadow-lg shadow-green-200 z-20 transition-transform hover:scale-105">
              <Image
                src="/len4.jpg"
                alt="Image B2"
                fill
                sizes="(max-width: 768px) 100vw, 180px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
