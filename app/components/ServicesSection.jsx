

// 'use client';
// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const services = [
//   {
//     title: 'Pooja & Ritual Photography',
//     description: 'Spiritual and ceremonial rituals captured with devotion and detail.',
//     image: '/img1.jpg',
//   },
//   {
//     title: 'Traditional Dress Moments',
//     description: 'The proud moment when the boy dons the Dhoti for the first time.',
//     image: '/img2.jpg',
//   },
//   {
//     title: 'Family Blessings & Aashirvadam',
//     description: 'Touching moments with elders and relatives full of emotion.',
//     image: '/img3.jpg',
//   },
//   {
//     title: 'Candid Smiles & Interactions',
//     description: 'Joyful, natural moments captured without posing.',
//     image: '/img4.jpg',
//   },
//   {
//     title: 'Decor & Stage Details',
//     description: 'Traditional decorations and ambience captured beautifully.',
//     image: '/img5.jpg',
//   },
//   {
//     title: 'Group Portraits',
//     description: 'Professional family and friends group photos.',
//     image: '/img6.jpg',
//   },
//   {
//     title: 'Cultural Performances',
//     description: 'Music and dance performances captured with energy and color.',
//     image: '/img7.jpg',
//   },
//   {
//     title: 'Cinematic Video Coverage',
//     description: 'A full cinematic experience from start to finish.',
//     image: '/img8.jpg',
//   },
// ];

// export default function DhotiFunctionShowcase() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const active = services[activeIndex];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % services.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-[#FFF8E1] py-16 px-4">
//       {/* Section Title */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#800000]">
//           Our Dhoti Function Services
//         </h2>
//         <p className="text-[#5D4037] mt-2 text-lg max-w-xl mx-auto">
//           From traditional rituals to candid family moments, we capture the essence of every milestone with emotion and authenticity.
//         </p>
//       </div>

//       {/* Content Grid */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
//         {/* LEFT: Title + Description Centered */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={active.title + '-text'}
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 30 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white h-[500px] p-8 rounded-xl border-l-4 border-[#D4AF37] shadow-md flex flex-col items-center justify-center text-center"
//           >
//             <h3 className="text-2xl font-bold text-[#800000] mb-4">
//               {active.title}
//             </h3>
//             <p className="text-[#5D4037] text-lg">{active.description}</p>
//           </motion.div>
//         </AnimatePresence>

//         {/* RIGHT: Image Only */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={active.title + '-image'}
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -30 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white h-[500px] rounded-xl overflow-hidden shadow-md flex items-center justify-center"
//           >
//             <img
//               src={active.image}
//               alt={active.title}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }



'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Pooja & Ritual Photography',
    description: 'Spiritual and ceremonial rituals captured with devotion and detail.',
    image: '/img1.jpg',
  },
  {
    title: 'Traditional Dress Moments',
    description: 'The proud moment when the boy dons the Dhoti for the first time.',
    image: '/img2.jpg',
  },
  {
    title: 'Family Blessings & Aashirvadam',
    description: 'Touching moments with elders and relatives full of emotion.',
    image: '/img3.jpg',
  },
  {
    title: 'Candid Smiles & Interactions',
    description: 'Joyful, natural moments captured without posing.',
    image: '/img4.jpg',
  },
  {
    title: 'Decor & Stage Details',
    description: 'Traditional decorations and ambience captured beautifully.',
    image: '/img5.jpg',
  },
  {
    title: 'Group Portraits',
    description: 'Professional family and friends group photos.',
    image: '/img6.jpg',
  },
  {
    title: 'Cultural Performances',
    description: 'Music and dance performances captured with energy and color.',
    image: '/img7.jpg',
  },
  {
    title: 'Cinematic Video Coverage',
    description: 'A full cinematic experience from start to finish.',
    image: '/img8.jpg',
  },
];

export default function DhotiFunctionShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="ServicesSection" className="bg-[#FFF8E1] py-4 px-4 sm:px-6 md:px-10 lg:px-16 2xl:px-32 overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-4 md:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800000]">
          Our Dhoti Function Services
        </h2>
        <p className="text-[#5D4037] mt-2 text-base sm:text-lg max-w-2xl mx-auto">
          From traditional rituals to candid family moments, we capture the essence of every milestone with emotion and authenticity.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
        {/* LEFT: Title + Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title + '-text'}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.3 }}
            className="bg-white md:min-h-[100px] lg:h-[550px] p-6 md:p-10 rounded-xl border-l-4 border-[#D4AF37] shadow-md flex flex-col justify-center text-center"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#800000] mb-4">
              {active.title}
            </h3>
            <p className="text-[#5D4037] text-base sm:text-lg leading-relaxed">
              {active.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* RIGHT: Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title + '-image'}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="bg-white md:min-h-[100px] lg:h-[550px] rounded-xl overflow-hidden shadow-md flex items-center justify-center"
          >
            <Image
              src={active.image}
              alt={active.title}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="col-span-1 md:col-span-2 flex justify-center gap-6 mt-6 md:mt-10">
          <button
            onClick={() => setActiveIndex((prev) => (prev - 1 + services.length) % services.length)}
            className="bg-[#800000] text-[#FFF8E1] font-semibold px-6 py-2 rounded-full shadow-md hover:bg-[#5D4037] transition"
          >
            ⬅ Previous
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % services.length)}
            className="bg-[#800000] text-[#FFF8E1] font-semibold px-6 py-2 rounded-full shadow-md hover:bg-[#5D4037] transition"
          >
            Next ➡
          </button>
        </div>
      </div>
    </section>
  );
}


