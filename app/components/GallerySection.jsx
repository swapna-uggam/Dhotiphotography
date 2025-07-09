

// 'use client';
// import { motion } from 'framer-motion';

// const images = [
//   '/lan.jpg', '/img2.jpg', '/lan.jpg', '/img4.jpg',
//   '/img5.jpg', '/img6.jpg', '/img7.jpg', '/img8.jpg',
//   '/img9.jpg', '/img10.jpg', '/img1.jpg', '/img2.jpg',
// ];

// export default function GallerySection() {
//   const shapes = ['circle', 'diamond', 'trapezoid'];

//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-[#1e1e1e] to-[#121212] py-20 px-6">
//       <div className="max-w-6xl mt-[-34px] mx-auto text-center mb-16">
//         <motion.h2
//           className="text-5xl font-extrabold text-white tracking-tight"
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Artistic Diagonal Gallery
//         </motion.h2>
//         <motion.p
//           className="text-gray-300 mt-6 text-xl max-w-2xl mx-auto"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           A creative collage of flowing shapes and dynamic textures, automatically adjusting to every image size.
//         </motion.p>
//       </div>

//       {/* Diagonal Layout */}
//       <div className="grid grid-cols-3 mt-24 gap-10 rotate-[6deg] -translate-y-6">
//         {images.map((src, index) => {
//           const shape = shapes[index % shapes.length];
//           const offsetY = (index % 3) * 50;

//           let shapeStyle = '';
//           let imageWrap = '';
//           if (shape === 'circle') {
//             shapeStyle = 'rounded-full';
//           } else if (shape === 'diamond') {
//             shapeStyle = 'rotate-45';
//             imageWrap = 'rotate-[-45deg]'; // undo rotation on image inside
//           } else if (shape === 'trapezoid') {
//             shapeStyle = 'clip-trapezoid';
//           }

//           return (
//             <motion.div
//               key={index}
//               className={`relative bg-white/10 backdrop-blur-lg p-2 border border-white/20 shadow-xl transition-all overflow-hidden ${shapeStyle}`}
//               style={{ transform: `translateY(-${offsetY}px)` }}
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.05 }}
//               viewport={{ once: true }}
//             >
//               <div className={`w-full h-full max-h-80 flex items-center justify-center ${imageWrap}`}>
//                 <img
//                   src={src}
//                   alt={`Image ${index + 1}`}
//                   className="max-w-full max-h-80 object-contain"
//                   loading="lazy"
//                 />
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// "use client";
// import { motion } from 'framer-motion';
// import { useState } from 'react';

// const images = [
//   '/lan.jpg', '/img2.jpg', '/lan.jpg', '/img4.jpg',
//   '/img5.jpg', '/img6.jpg', '/img7.jpg', '/img8.jpg',
//   '/img9.jpg', '/img10.jpg', '/img1.jpg', '/img2.jpg',
// ];

// export default function GallerySection() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <section className="min-h-screen bg-gray-50 py-16 px-4">
//       {/* Header */}
//       <motion.div 
//         className="max-w-4xl mx-auto text-center mb-20"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <motion.h2 
//           className="text-7xl font-thin text-gray-900 mb-4 tracking-tight"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 1 }}
//         >
//           Gallery
//         </motion.h2>
//         <motion.div 
//           className="w-24 h-px bg-gray-900 mx-auto mb-8"
//           initial={{ width: 0 }}
//           animate={{ width: 96 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//         />
//         <motion.p 
//           className="text-gray-600 text-lg font-light max-w-2xl mx-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 0.8 }}
//         >
//           A curated collection of visual stories
//         </motion.p>
//       </motion.div>

//       {/* Gallery Grid */}
//       <div className="max-w-7xl mx-auto">
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 0.6 }}
//         >
//           {images.map((src, index) => (
//             <motion.div
//               key={index}
//               className="relative group cursor-pointer bg-white"
//               onHoverStart={() => setHoveredIndex(index)}
//               onHoverEnd={() => setHoveredIndex(null)}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ 
//                 delay: 1.2 + (index * 0.1), 
//                 duration: 0.6,
//                 ease: "easeOut"
//               }}
//             >
//               <div className="relative overflow-hidden aspect-[4/5]">
//                 {/* Image */}
//                 <motion.img
//                   src={src}
//                   alt={`Gallery ${index + 1}`}
//                   className="w-full h-full object-cover"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.7, ease: "easeOut" }}
//                 />
                
//                 {/* Overlay */}
//                 <motion.div
//                   className="absolute inset-0 bg-black"
//                   initial={{ opacity: 0 }}
//                   animate={{ 
//                     opacity: hoveredIndex === index ? 0.3 : 0 
//                   }}
//                   transition={{ duration: 0.3 }}
//                 />
                
//                 {/* Image Number */}
//                 <motion.div
//                   className="absolute top-6 left-6 text-white font-light text-lg"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ 
//                     opacity: hoveredIndex === index ? 1 : 0,
//                     x: hoveredIndex === index ? 0 : -20
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {String(index + 1).padStart(2, '0')}
//                 </motion.div>
                
//                 {/* View indicator */}
//                 <motion.div
//                   className="absolute bottom-6 right-6 w-12 h-12 border border-white rounded-full flex items-center justify-center"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ 
//                     opacity: hoveredIndex === index ? 1 : 0,
//                     scale: hoveredIndex === index ? 1 : 0.8
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <motion.div
//                     className="w-2 h-2 bg-white rounded-full"
//                     animate={{ scale: [1, 1.5, 1] }}
//                     transition={{ 
//                       duration: 2, 
//                       repeat: Infinity,
//                       ease: "easeInOut"
//                     }}
//                   />
//                 </motion.div>
//               </div>
              
//               {/* Bottom border animation */}
//               <motion.div
//                 className="absolute bottom-0 left-0 h-1 bg-gray-900"
//                 initial={{ width: 0 }}
//                 animate={{ 
//                   width: hoveredIndex === index ? '100%' : 0 
//                 }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Bottom Section */}
//       <motion.div 
//         className="max-w-4xl mx-auto text-center mt-20"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2, duration: 0.8 }}
//       >
//         <div className="flex items-center justify-center space-x-8 text-gray-400 text-sm font-light">
//           <span>12 IMAGES</span>
//           <div className="w-px h-4 bg-gray-300"/>
//           <span>COLLECTION 2024</span>
//           <div className="w-px h-4 bg-gray-300"/>
//           <span>CURATED</span>
//         </div>
//       </motion.div>

//       {/* Floating Elements */}
//       <motion.div
//         className="fixed top-1/2 right-8 w-px h-20 bg-gray-300"
//         initial={{ height: 0 }}
//         animate={{ height: 80 }}
//         transition={{ delay: 2.5, duration: 0.8 }}
//       />
      
//       <motion.div
//         className="fixed top-1/2 right-6 w-2 h-2 bg-gray-400 rounded-full"
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 3, duration: 0.5 }}
//       />
//     </section>
//   );
// }

// "use client";
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';

// const images = [
//   '/lan.jpg', '/img2.jpg', '/lan.jpg', '/img4.jpg',
//   '/img5.jpg', '/img6.jpg', '/img7.jpg', '/img8.jpg',
//   '/img9.jpg', '/img10.jpg', '/img1.jpg', '/img2.jpg',
// ];

// export default function GallerySection() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [showAll, setShowAll] = useState(false);

//   const visibleImages = showAll ? images : images.slice(0, 6);

//   // Consistent shape and aspect ratio for all images
//   const imageShape = 'rounded-2xl';
//   const aspectRatio = 'aspect-[4/5]';

//   return (
//     <section id="GallerySection" className="bg-gray-50 py-16 px-4">
//       {/* Header */}
//       <motion.div 
//         className="mx-auto text-center mb-20"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <motion.h2 
//           className="text-7xl font-thin text-gray-900 mb-4 tracking-tight"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 1 }}
//         >
//           Gallery
//         </motion.h2>
//         <motion.div 
//           className="w-24 h-px bg-gray-900 mx-auto mb-8"
//           initial={{ width: 0 }}
//           animate={{ width: 96 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//         />
//         <motion.p 
//           className="text-gray-600 text-lg font-light max-w-2xl mx-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 0.8 }}
//         >
//           A curated collection of visual stories
//         </motion.p>
//       </motion.div>

//       {/* Gallery Grid */}
//       <div className="max-w-7xl mx-auto">
//         <motion.div 
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 0.6 }}
//         >
//           <AnimatePresence mode="popLayout">
//             {visibleImages.map((src, index) => (
//               <motion.div
//                 key={`${src}-${index}`}
//                 className="relative group cursor-pointer"
//                 onHoverStart={() => setHoveredIndex(index)}
//                 onHoverEnd={() => setHoveredIndex(null)}
//                 layout
//                 initial={{ opacity: 0, y: 20, scale: 0.9 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={{ opacity: 0, y: -20, scale: 0.9 }}
//                 transition={{ 
//                   duration: 0.6,
//                   ease: "easeOut",
//                   layout: { duration: 0.4 }
//                 }}
//               >
//                 <div className={`relative overflow-hidden ${aspectRatio} ${imageShape} shadow-lg hover:shadow-2xl transition-shadow duration-500`}>
//                   {/* Image */}
//                   <motion.img
//                     src={src}
//                     alt={`Gallery ${index + 1}`}
//                     className="w-full h-full object-cover"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.7, ease: "easeOut" }}
//                   />
                  
//                   {/* Overlay */}
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
//                     initial={{ opacity: 0 }}
//                     animate={{ 
//                       opacity: hoveredIndex === index ? 1 : 0 
//                     }}
//                     transition={{ duration: 0.3 }}
//                   />
                  
//                   {/* Image Number */}
//                   <motion.div
//                     className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center text-gray-800 font-medium text-sm"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ 
//                       opacity: hoveredIndex === index ? 1 : 0,
//                       scale: hoveredIndex === index ? 1 : 0.8
//                     }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {String(index + 1).padStart(2, '0')}
//                   </motion.div>
                  
//                   {/* View indicator */}
//                   <motion.div
//                     className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ 
//                       opacity: hoveredIndex === index ? 1 : 0,
//                       scale: hoveredIndex === index ? 1 : 0.8
//                     }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                     </svg>
//                   </motion.div>

//                   {/* Shape indicator dot */}
//                   <motion.div
//                     className="absolute top-4 right-4 w-3 h-3 bg-white/70 rounded-full"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: hoveredIndex === index ? 1 : 0.4 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* View More/Less Button */}
//         <motion.div 
//           className="text-center mt-16"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5, duration: 0.8 }}
//         >
//           <motion.button
//             onClick={() => setShowAll(!showAll)}
//             className="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-light text-lg rounded-full hover:bg-gray-800 transition-all duration-300 overflow-hidden"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <motion.span
//               key={showAll ? 'less' : 'more'}
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -20, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {showAll ? 'View Less' : 'View More'}
//             </motion.span>
            
//             <motion.div
//               className="ml-3"
//               animate={{ rotate: showAll ? 180 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </motion.div>

//             {/* Button background animation */}
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full"
//               initial={{ scale: 0, opacity: 0 }}
//               whileHover={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Bottom Section */}
//       <motion.div 
//         className="max-w-4xl mx-auto text-center mt-20"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2, duration: 0.8 }}
//       >
//         <div className="flex items-center justify-center space-x-8 text-gray-400 text-sm font-light">
//           <motion.span
//             key={visibleImages.length}
//             initial={{ y: 10, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             {visibleImages.length} OF {images.length} IMAGES
//           </motion.span>
//           <div className="w-px h-4 bg-gray-300"/>
//           <span>COLLECTION 2024</span>
//           <div className="w-px h-4 bg-gray-300"/>
//           <span>CURATED</span>
//         </div>
//       </motion.div>

//       {/* Floating Elements */}
//       <motion.div
//         className="fixed top-1/2 right-8 w-px h-20 bg-gray-300"
//         initial={{ height: 0 }}
//         animate={{ height: 80 }}
//         transition={{ delay: 2.5, duration: 0.8 }}
//       />
      
//       <motion.div
//         className="fixed top-1/2 right-6 w-2 h-2 bg-gray-400 rounded-full"
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 3, duration: 0.5 }}
//       />
//     </section>
//   );
// }


// "use client";
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';

// const images = [
//   '/lan.jpg', '/img2.jpg', '/lan.jpg', '/img4.jpg',
//   '/img5.jpg', '/img6.jpg', '/img7.jpg', '/img8.jpg',
//   '/img9.jpg', '/img10.jpg', '/img1.jpg', '/img2.jpg',
// ];

// export default function GallerySection() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [showAll, setShowAll] = useState(false);

//   const visibleImages = showAll ? images : images.slice(0, 6);
//   const aspectRatio = 'aspect-[4/5]';
//   const imageShape = 'rounded-2xl';

//   return (
//     <section id="GallerySection" className="bg-gray-50 py-16 px-4">
//       {/* Header */}
//       <motion.div
//         className="mx-auto text-center mb-20"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <motion.h2
//           className="text-4xl sm:text-5xl md:text-6xl font-thin text-gray-900 mb-4 tracking-tight"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 1 }}
//         >
//           Gallery
//         </motion.h2>
//         <motion.div
//           className="w-24 h-px bg-gray-900 mx-auto mb-8"
//           initial={{ width: 0 }}
//           animate={{ width: 96 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//         />
//         <motion.p
//           className="text-gray-600 text-base sm:text-lg font-light max-w-2xl mx-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 0.8 }}
//         >
//           A curated collection of visual stories
//         </motion.p>
//       </motion.div>

//       {/* Gallery Grid */}
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 0.6 }}
//         >
//           <AnimatePresence mode="popLayout">
//             {visibleImages.map((src, index) => (
//               <motion.div
//                 key={`${src}-${index}`}
//                 className="relative group cursor-pointer"
//                 onHoverStart={() => setHoveredIndex(index)}
//                 onHoverEnd={() => setHoveredIndex(null)}
//                 layout
//                 initial={{ opacity: 0, y: 20, scale: 0.9 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={{ opacity: 0, y: -20, scale: 0.9 }}
//                 transition={{
//                   duration: 0.6,
//                   ease: "easeOut",
//                   layout: { duration: 0.4 }
//                 }}
//               >
//                 <div className={`relative overflow-hidden ${aspectRatio} ${imageShape} shadow-lg hover:shadow-2xl transition-shadow duration-500`}>
//                   {/* Image */}
//                   <motion.img
//                     src={src}
//                     alt={`Gallery ${index + 1}`}
//                     className="w-full h-full object-cover"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.7, ease: "easeOut" }}
//                   />

//                   {/* Overlay */}
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
//                     initial={{ opacity: 0 }}
//                     animate={{
//                       opacity: hoveredIndex === index ? 1 : 0
//                     }}
//                     transition={{ duration: 0.3 }}
//                   />

//                   {/* Image Number */}
//                   <motion.div
//                     className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center text-gray-800 font-medium text-sm"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{
//                       opacity: hoveredIndex === index ? 1 : 0,
//                       scale: hoveredIndex === index ? 1 : 0.8
//                     }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {String(index + 1).padStart(2, '0')}
//                   </motion.div>

//                   {/* View indicator */}
//                   <motion.div
//                     className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{
//                       opacity: hoveredIndex === index ? 1 : 0,
//                       scale: hoveredIndex === index ? 1 : 0.8
//                     }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                     </svg>
//                   </motion.div>

//                   {/* Top-right dot */}
//                   <motion.div
//                     className="absolute top-4 right-4 w-3 h-3 bg-white/70 rounded-full"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: hoveredIndex === index ? 1 : 0.4 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* View More/Less Button */}
//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5, duration: 0.8 }}
//         >
//           <motion.button
//             onClick={() => setShowAll(!showAll)}
//             className="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-light text-lg rounded-full hover:bg-gray-800 transition-all duration-300 overflow-hidden"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <motion.span
//               key={showAll ? 'less' : 'more'}
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -20, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {showAll ? 'View Less' : 'View More'}
//             </motion.span>
//             <motion.div
//               className="ml-3"
//               animate={{ rotate: showAll ? 180 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </motion.div>
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Bottom Section */}
//       <motion.div
//         className="max-w-4xl mx-auto text-center mt-20"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2, duration: 0.8 }}
//       >
//         <div className="flex items-center justify-center flex-wrap gap-4 text-gray-400 text-sm font-light">
//           <motion.span
//             key={visibleImages.length}
//             initial={{ y: 10, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             {visibleImages.length} OF {images.length} IMAGES
//           </motion.span>
//           <span className="hidden sm:block w-px h-4 bg-gray-300" />
//           <span>COLLECTION 2024</span>
//           <span className="hidden sm:block w-px h-4 bg-gray-300" />
//           <span>CURATED</span>
//         </div>
//       </motion.div>
//     </section>
//   );
// }



// "use client";
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';

// const images = [
//   '/lan.jpg', '/img2.jpg', '/lan.jpg', '/img4.jpg',
//   '/img5.jpg', '/img6.jpg', '/img7.jpg', '/img8.jpg',
//   '/img9.jpg', '/img10.jpg', '/img1.jpg', '/img2.jpg',
// ];

// export default function GallerySection() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [showAll, setShowAll] = useState(false);

//   const visibleImages = showAll ? images : images.slice(0, 6);
//   const aspectRatio = 'aspect-[4/5]';
//   const imageShape = 'rounded-2xl';

//   return (
//     <section id="GallerySection" className="bg-gray-50 py-16 px-4 overflow-hidden">
//       {/* Header */}
//       <motion.div
//         className="mx-auto text-center mb-20"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <motion.h2
//           className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-gray-900 mb-4 tracking-tight"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 1 }}
//         >
//           Gallery
//         </motion.h2>
//         <motion.div
//           className="w-24 h-px bg-gray-900 mx-auto mb-8"
//           initial={{ width: 0 }}
//           animate={{ width: 96 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//         />
//         <motion.p
//           className="text-gray-600 text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 0.8 }}
//         >
//           A curated collection of visual stories
//         </motion.p>
//       </motion.div>

//       {/* Gallery Grid */}
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 0.6 }}
//         >
//           <AnimatePresence mode="popLayout">
//             {visibleImages.map((src, index) => (
//               <motion.div
//                 key={`${src}-${index}`}
//                 className="relative group cursor-pointer"
//                 onHoverStart={() => setHoveredIndex(index)}
//                 onHoverEnd={() => setHoveredIndex(null)}
//                 layout
//                 initial={{ opacity: 0, y: 20, scale: 0.9 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={{ opacity: 0, y: -20, scale: 0.9 }}
//                 transition={{
//                   duration: 0.6,
//                   ease: "easeOut",
//                   layout: { duration: 0.4 }
//                 }}
//               >
//                 <div className={`relative overflow-hidden ${aspectRatio} ${imageShape} shadow-lg hover:shadow-2xl transition-shadow duration-500`}>
//                   {/* Image */}
//                   <motion.img
//                     src={src}
//                     alt={`Gallery ${index + 1}`}
//                     className="w-full h-full object-cover"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.7, ease: "easeOut" }}
//                   />

//                   {/* Overlay */}
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
//                     initial={{ opacity: 0 }}
//                     animate={{
//                       opacity: hoveredIndex === index ? 1 : 0
//                     }}
//                     transition={{ duration: 0.3 }}
//                   />

//                   {/* Image Number */}
//                   <motion.div
//                     className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-800 font-medium text-xs sm:text-sm"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{
//                       opacity: hoveredIndex === index ? 1 : 0,
//                       scale: hoveredIndex === index ? 1 : 0.8
//                     }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {String(index + 1).padStart(2, '0')}
//                   </motion.div>

//                   {/* View indicator */}
//                   <motion.div
//                     className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{
//                       opacity: hoveredIndex === index ? 1 : 0,
//                       scale: hoveredIndex === index ? 1 : 0.8
//                     }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                     </svg>
//                   </motion.div>

//                   {/* Top-right dot */}
//                   <motion.div
//                     className="absolute top-4 right-4 w-2 h-2 sm:w-3 sm:h-3 bg-white/70 rounded-full"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: hoveredIndex === index ? 1 : 0.4 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* View More/Less Button */}
//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5, duration: 0.8 }}
//         >
//           <motion.button
//             onClick={() => setShowAll(!showAll)}
//             className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg bg-gray-900 text-white font-light rounded-full hover:bg-gray-800 transition-all duration-300 overflow-hidden"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <motion.span
//               key={showAll ? 'less' : 'more'}
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -20, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {showAll ? 'View Less' : 'View More'}
//             </motion.span>
//             <motion.div
//               className="ml-3"
//               animate={{ rotate: showAll ? 180 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </motion.div>
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Bottom Section */}
//       <motion.div
//         className="max-w-4xl mx-auto text-center mt-20"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2, duration: 0.8 }}
//       >
//         <div className="flex items-center justify-center flex-wrap gap-4 text-gray-400 text-xs sm:text-sm md:text-base font-light">
//           <motion.span
//             key={visibleImages.length}
//             initial={{ y: 10, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             {visibleImages.length} OF {images.length} IMAGES
//           </motion.span>
//           <span className="hidden sm:block w-px h-4 bg-gray-300" />
//           <span>COLLECTION 2024</span>
//           <span className="hidden sm:block w-px h-4 bg-gray-300" />
//           <span>CURATED</span>
//         </div>
//       </motion.div>
//     </section>
//   );
// }



'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../admin/Firebase/config';

export default function GallerySection() {
  const [images, setImages] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6); // Default count

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'galleryImages'));
        const urls = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.url) urls.push(data.url);
        });
        setImages(urls);
      } catch (error) {
        console.error('Error fetching images from Firestore:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();

    // Set initial visible count based on screen size
    const handleResize = () => {
      if (window.innerWidth < 640) { // Mobile
        setVisibleCount(4);
      } else if (window.innerWidth < 1024) { // Tablet/Laptop
        setVisibleCount(6);
      } else { // Desktop
        setVisibleCount(8);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleImages = showAll ? images : images.slice(0, visibleCount);
  const aspectRatio = 'aspect-[4/5]';
  const imageShape = 'rounded-2xl';

  return (
    <section id="GallerySection" className="bg-gray-50 py-16 px-4 overflow-hidden">
      {/* Header */}
      <motion.div
        className="mx-auto text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-gray-900 mb-4 tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Gallery
        </motion.h2>
        <motion.div
          className="w-24 h-px bg-gray-900 mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
        <motion.p
          className="text-gray-600 text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          A curated collection of visual stories
        </motion.p>
      </motion.div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <p className="text-center text-gray-500">Loading gallery...</p>
        ) : (
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <AnimatePresence mode="popLayout">
              {visibleImages.map((src, index) => (
                <motion.div
                  key={`${src}-${index}`}
                  className="relative group cursor-pointer"
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{
                    duration: 0.6,
                    ease: 'easeOut',
                    layout: { duration: 0.4 },
                  }}
                >
                  <div
                    className={`relative overflow-hidden ${aspectRatio} ${imageShape} shadow-lg hover:shadow-2xl transition-shadow duration-500`}
                  >
                    <motion.img
                      src={src}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                      loading="lazy"
                    />

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    <motion.div
                      className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-800 font-medium text-xs sm:text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        scale: hoveredIndex === index ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.div>

                    <motion.div
                      className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center cursor-pointer hover:bg-white transition-all duration-300 z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        scale: hoveredIndex === index ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.3 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(src);
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </motion.div>

                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 sm:w-3 sm:h-3 bg-white/70 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0.4 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* View More / View Less Button */}
        {!loading && images.length > visibleCount && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg bg-gray-900 text-white font-light rounded-full hover:bg-gray-800 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                key={showAll ? 'less' : 'more'}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {showAll ? 'View Less' : `View More (${images.length - visibleCount})`}
              </motion.span>
              <motion.div
                className="ml-3"
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-6xl w-full max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              
              <motion.img
                src={selectedImage}
                alt="Full view"
                className="w-full h-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <div className="flex justify-between items-center text-white">
                  <span className="text-sm font-light opacity-80">
                    {images.indexOf(selectedImage) + 1} / {images.length}
                  </span>
                  <a
                    href={selectedImage}
                    download
                    className="text-sm font-light hover:underline flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}