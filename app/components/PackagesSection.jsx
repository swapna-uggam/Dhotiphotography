


// 'use client';

// import { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { dbB } from '../admin/Firebase/configB';
// import {
//   Star,
//   Camera,
//   Clock,
//   Image,
//   Users,
//   Video,
//   MapPin,
//   Award,
//   Crown,
//   Link,
// } from 'lucide-react';

// export default function PackagesSection() {
//   const [packages, setPackages] = useState([]);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [hasMounted, setHasMounted] = useState(false);

//   const iconMap = {
//     Clock,
//     Image,
//     Users,
//     Video,
//     Camera,
//     MapPin,
//     Award,
//     Crown,
//   };

//   useEffect(() => {
//     setHasMounted(true);

//     const fetchPackages = async () => {
//       const snap = await getDocs(collection(dbB, 'dhotiPackages'));
//       const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setPackages(data);
//     };

//     fetchPackages();
//   }, []);

//   if (!hasMounted) return null;

//   return (
//     <section
//       id="PackagesSection"
//       className="relative py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-rose-50 via-white to-orange-50"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-10 w-56 h-56 bg-rose-400 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-14">
//           <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
//             <Camera className="w-4 h-4" />
//             Photography Packages
//           </div>
//           <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-3">
//             Choose Your Perfect <br />
//             <span className="text-3xl lg:text-5xl">Photography Experience</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Professionally crafted packages designed for every celebration.
//           </p>
//         </div>

//         {/* Packages Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {packages.map((pkg, index) => {
//             const features = pkg.features || [];
//             const discount = pkg.originalPrice && pkg.price
//               ? parseInt(pkg.originalPrice.replace(/[^\d]/g, '')) - parseInt(pkg.price.replace(/[^\d]/g, ''))
//               : null;

//             return (
//               <div
//                 key={pkg.id || index}
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 className={`relative group transition-transform duration-300 ${
//                   hoveredCard === index ? 'scale-105' : ''
//                 }`}
//               >
//                 {/* Badge */}
//                 {pkg.badgeName && (
//                   <div
//                     className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 px-4 py-1 text-xs font-semibold rounded-full shadow-md"
//                     style={{
//                       backgroundColor: pkg.badgeBackgroundColor || '#FFC107',
//                       border: `1px solid ${pkg.badgeBorderColor || '#FFA500'}`,
//                       color: pkg.badgeTextColor || '#000',
//                     }}
//                   >
//                     <Star className="inline w-3 h-3 mr-1" />
//                     {pkg.badgeName}
//                   </div>
//                 )}

//                 {/* Card */}
//                 <div
//                   className="relative z-10 bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
//                   style={{
//                     borderColor: pkg.borderColor || '#ddd',
//                   }}
//                 >
//                   {/* Title */}
//                   <div className="text-center mb-4">
//                     <h3
//                       className="text-xl font-bold"
//                       style={{ color: pkg.textFontColor || '#111' }}
//                     >
//                       {pkg.title}
//                     </h3>
//                     {pkg.tag && (
//                       <p className="text-pink-500 text-xs mt-1">{pkg.tag}</p>
//                     )}
//                     <div className="mt-2 flex justify-center gap-2 items-center">
//                       <span className="text-2xl font-bold">{pkg.price}</span>
//                       {pkg.originalPrice && (
//                         <span className="text-sm text-gray-500 line-through">
//                           {pkg.originalPrice}
//                         </span>
//                       )}
//                     </div>
//                     {discount && (
//                       <div className="bg-green-100 text-green-700 text-xs inline-block px-2 py-1 rounded-full mt-1">
//                         Save £{discount}
//                       </div>
//                     )}
//                   </div>

//                   {/* Features */}
//                   <div className="space-y-2 mb-4 text-sm text-gray-700">
//                     {features.slice(0, 5).map((text, i) => (
//                       <div key={i} className="flex items-start gap-2">
//                         <Clock className="w-4 h-4 text-pink-500 mt-1" />
//                         <span>{text}</span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* CTA  */}
//                    <a href="#ContactSection" className="block w-full">
//                   <button className="w-full mt-4 py-2 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 transition">
//                    <span className="flex justify-center items-center gap-2">
//                    Book Now <Camera className="w-4 h-4" />
//                      </span>
//                    </button>
//                     </a>
//                   <p className="text-center text-gray-400 text-xs mt-2">
//                     No hidden fees • Flexible scheduling
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }



// 'use client';

// import { useEffect, useState, useRef } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { dbB } from '../admin/Firebase/configB';
// import { Star, Camera } from 'lucide-react';

// export default function PackagesSection() {
//   const [packages, setPackages] = useState([]);
//   const [expandedCard, setExpandedCard] = useState(null);
//   const modalRef = useRef();

//   useEffect(() => {
//     const fetchPackages = async () => {
//       const snap = await getDocs(collection(dbB, 'dhotiPackages'));
//       const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setPackages(data);
//     };
//     fetchPackages();
//   }, []);

//   // Click outside to close modal
//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         setExpandedCard(null);
//       }
//     };
//     if (expandedCard) {
//       document.addEventListener('mousedown', handleOutsideClick);
//     }
//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     };
//   }, [expandedCard]);

//   const selectedPlan = packages.find(p => p.id === expandedCard);

//   return (
//     <section id="PackagesSection" className="py-16 bg-rose-50 relative">
//       {/* Background Blur Circles */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-10 w-56 h-56 bg-rose-400 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
//             <Camera className="w-4 h-4" />
//             Photography Packages
//           </div>
//           <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-3">
//             Choose Your Perfect <br />
//             <span className="text-3xl lg:text-5xl">Photography Experience</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Professionally crafted packages designed for every celebration.
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {packages.map((pkg) => (
//             <div
//               key={pkg.id}
//               onClick={() => setExpandedCard(pkg.id)}
//               className="relative flex flex-col justify-between rounded-xl shadow-md bg-white border border-gray-200 transition-transform duration-200 cursor-pointer hover:shadow-lg h-[340px] px-3 py-4"
//             >
//               {/* Badge */}
//               {pkg.badgeName && (
//                 <div
//                   className="absolute top-2 right-2 text-[10px] font-bold px-2 py-1 rounded-full"
//                   style={{
//                     backgroundColor: pkg.badgeBackgroundColor || '#FFC107',
//                     border: `1px solid ${pkg.badgeBorderColor || '#FFA500'}`,
//                     color: '#000',
//                   }}
//                 >
//                   <Star className="w-3 h-3 inline mr-1" />
//                   {pkg.badgeName}
//                 </div>
//               )}

//               {/* Title */}
//               <div className="p-2 text-center">
//                 <h3 className="text-base font-semibold" style={{ color: pkg.textFontColor || '#000' }}>
//                   {pkg.title}
//                 </h3>
//                 {pkg.tag && <p className="text-xs text-pink-500 mt-1">{pkg.tag}</p>}
//                 <p className="text-xl font-extrabold mt-1">{pkg.price}</p>
//               </div>

//               {/* Features */}
//               <div className="px-2 pb-2 text-xs">
//                 <h4 className="font-semibold mb-1">Features</h4>
//                 <ul className="list-disc ml-4 text-gray-800 space-y-1">
//                   {(pkg.features || []).slice(0, 5).map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Footer */}
//               <div className="flex flex-col gap-2 items-center mt-auto px-2 pb-3">
//                 <span className="text-blue-600 text-xs underline self-end">...Read More</span>
//                 <a
//                   href="#ContactSection"
//                   onClick={(e) => e.stopPropagation()}
//                   className="w-full text-center font-bold py-2 px-4 rounded-lg bg-pink-500 text-white hover:bg-pink-200 hover:text-black text-sm"
//                 >
//                   Book Now
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Modal */}
//         {expandedCard && selectedPlan && (
//           <div className="fixed inset-0 bg-white/70 z-50 flex items-center justify-center px-4">
//             <div
//               ref={modalRef}
//               className="bg-white max-w-md w-full rounded-xl shadow-xl relative p-6 max-h-[90vh] overflow-y-auto"
//             >
//               <button
//                 onClick={() => setExpandedCard(null)}
//                 className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-black"
//               >
//                 &times;
//               </button>

//               {/* Modal Header */}
//               <div className="text-center mb-4">
//                 <h3 className="text-xl font-bold" style={{ color: selectedPlan.textFontColor || '#000' }}>
//                   {selectedPlan.title}
//                 </h3>
//                 <p className="text-xl font-extrabold mt-1">{selectedPlan.price}</p>
//                 {selectedPlan.description && (
//                   <p className="text-sm text-gray-600 mt-2">{selectedPlan.description}</p>
//                 )}
//                 {selectedPlan.tag && <p className="text-xs text-gray-500 mt-1">{selectedPlan.tag}</p>}
//               </div>

//               {/* Modal Content */}
//               <div className="text-xs">
//                 <Section title="Features" items={selectedPlan.features} />
//                 <Section title="Camera Gear" items={selectedPlan.gear} />
//                 <Section title="Deliverables" items={selectedPlan.deliverables} />
//               </div>

//               <a
//                 href="#ContactSection"
//                 onClick={() => setExpandedCard(null)}
//                 className="block w-full text-center font-bold py-2 px-4 rounded-lg bg-pink-500 text-white hover:bg-pink-200 hover:text-black text-sm mt-4"
//               >
//                 Book Now
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// function Section({ title, items }) {
//   if (!items || !Array.isArray(items)) return null;
//   return (
//     <div className="mb-3">
//       <h4 className="text-xs font-semibold mb-1">{title}</h4>
//       <ul className="list-disc ml-5 text-xs text-gray-800 space-y-1">
//         {items.map((item, idx) => (
//           <li key={idx}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }




// 'use client';

// import { useEffect, useState, useRef } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { dbB } from '../admin/Firebase/configB';
// import { Star, Camera, X, Sparkles, ArrowRight, Check } from 'lucide-react';

// export default function PackagesSection() {
//   const [packages, setPackages] = useState([]);
//   const [expandedCard, setExpandedCard] = useState(null);
//   const modalRef = useRef();

//   useEffect(() => {
//     const fetchPackages = async () => {
//       const snap = await getDocs(collection(dbB, 'dhotiPackages'));
//       const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setPackages(data);
//     };
//     fetchPackages();
//   }, []);

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         setExpandedCard(null);
//       }
//     };
//     if (expandedCard) {
//       document.addEventListener('mousedown', handleOutsideClick);
//     }
//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     };
//   }, [expandedCard]);

//   const selectedPlan = packages.find(p => p.id === expandedCard);

//   return (
//     <section id="PackagesSection" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
//         <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
//       </div>

//       {/* Floating Icons */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-20 right-1/4 animate-float">
//           <Sparkles className="w-6 h-6 text-purple-400" />
//         </div>
//         <div className="absolute bottom-32 left-1/4 animate-float" style={{animationDelay: '1s'}}>
//           <Camera className="w-8 h-8 text-cyan-400" />
//         </div>
//         <div className="absolute top-1/2 left-10 animate-float" style={{animationDelay: '2s'}}>
//           <Star className="w-5 h-5 text-pink-400" />
//         </div>
//       </div>

//       <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-purple-700 px-8 py-4 rounded-full text-sm font-bold mb-6 shadow-xl border border-purple-200">
//             <Camera className="w-5 h-5" />
//             Photography Packages
//             <Sparkles className="w-4 h-4" />
//           </div>
//           <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent mb-6 leading-tight">
//             Choose Your Packages<br />
//             {/* <span className="text-4xl lg:text-6xl font-extrabold">Photography Experience</span> */}
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
//             Professionally crafted packages designed for every celebration with stunning visual storytelling.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {packages.map((pkg, index) => (
//             <div
//               key={pkg.id}
//               onClick={() => setExpandedCard(pkg.id)}
//               className="group relative flex flex-col justify-between bg-white/90 backdrop-blur-sm border-2 border-white/50 transition-all duration-700 cursor-pointer hover:shadow-2xl hover:scale-105 hover:rotate-1 hover:bg-white min-h-[340px] overflow-hidden"
//               style={{
//                 borderRadius: '1.5rem',
//                 animation: `slideInUp 0.8s ease-out ${index * 0.2}s both`
//               }}
//             >
//               {pkg.badgeName && (
//                 <div
//                   className="absolute top-2 right-2 text-[10px] font-bold px-2 py-1 rounded-full"
//                   style={{
//                     backgroundColor: pkg.badgeBackgroundColor || '#FFC107',
//                     border: `1px solid ${pkg.badgeBorderColor || '#FFA500'}`,
//                     color: '#000',
//                   }}
//                 >
//                   <Star className="w-3 h-3 inline mr-1" />
//                   {pkg.badgeName}
//                 </div>
//               )}
//               <div className="p-2 text-center">
//                 <h3 className="text-base font-semibold" style={{ color: pkg.textFontColor || '#000' }}>
//                   {pkg.title}
//                 </h3>
//                 {pkg.tag && <p className="text-xs text-pink-500 mt-1">{pkg.tag}</p>}
//                 <p className="text-xl font-extrabold mt-1">{pkg.price}</p>
//               </div>
//               <div className="px-2 pb-2 text-xs">
//                 <h4 className="font-semibold mb-1">Features</h4>
//                 <ul className="list-disc ml-4 text-gray-800 space-y-1">
//                   {(pkg.features || []).slice(0, 5).map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="flex flex-col gap-2 items-center mt-auto px-2 pb-3">
//                 <span className="text-blue-600 text-xs underline self-end">...Read More</span>
//                 <a
//                   href="#ContactSection"
//                   onClick={(e) => e.stopPropagation()}
//                   className="w-full text-center font-bold py-2 px-4 rounded-lg bg-pink-500 text-white hover:bg-pink-200 hover:text-black text-sm"
//                 >
//                   Book Now
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {expandedCard && selectedPlan && (
//           <div className="fixed inset-0 bg-white/70 z-50 flex items-center justify-center px-4">
//             <div
//               ref={modalRef}
//               className="bg-white max-w-md w-full rounded-xl shadow-xl relative p-6 max-h-[90vh] overflow-y-auto"
//             >
//               <button
//                 onClick={() => setExpandedCard(null)}
//                 className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-black"
//               >
//                 &times;
//               </button>
//               <div className="text-center mb-4">
//                 <h3 className="text-xl font-bold" style={{ color: selectedPlan.textFontColor || '#000' }}>
//                   {selectedPlan.title}
//                 </h3>
//                 <p className="text-xl font-extrabold mt-1">{selectedPlan.price}</p>
//                 {selectedPlan.description && (
//                   <p className="text-sm text-gray-600 mt-2">{selectedPlan.description}</p>
//                 )}
//                 {selectedPlan.tag && <p className="text-xs text-gray-500 mt-1">{selectedPlan.tag}</p>}
//               </div>
//               <div className="text-xs">
//                 <Section title="Features" items={selectedPlan.features} />
//                 <Section title="Camera Gear" items={selectedPlan.gear} />
//                 <Section title="Deliverables" items={selectedPlan.deliverables} />
//               </div>
//               <a
//                 href="#ContactSection"
//                 onClick={() => setExpandedCard(null)}
//                 className="block w-full text-center font-bold py-2 px-4 rounded-lg bg-pink-500 text-white hover:bg-pink-200 hover:text-black text-sm mt-4"
//               >
//                 Book Now
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// function Section({ title, items }) {
//   if (!items || !Array.isArray(items)) return null;
//   return (
//     <div className="mb-3">
//       <h4 className="text-xs font-semibold mb-1">{title}</h4>
//       <ul className="list-disc ml-5 text-xs text-gray-800 space-y-1">
//         {items.map((item, idx) => (
//           <li key={idx}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


'use client';

import { useEffect, useState, useRef } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { dbB } from '../admin/Firebase/configB';
import { Star, Camera } from 'lucide-react';

export default function PackagesSection() {
  const [packages, setPackages] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const modalRef = useRef();

  useEffect(() => {
    const fetchPackages = async () => {
      const snap = await getDocs(collection(dbB, 'dhotiPackages'));
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPackages(data);
    };
    fetchPackages();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setExpandedCard(null);
      }
    };
    if (expandedCard) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [expandedCard]);

  const selectedPlan = packages.find(p => p.id === expandedCard);

  return (
    <section id="PackagesSection" className="py-16 bg-[#FFF8E1] relative">
      {/* Background Circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-56 h-56 bg-[#FFD700] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#800020] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#fff3cd] text-[#800020] px-4 py-2 rounded-full lg:text-sm text:xs font-medium mb-4">
            <Camera className="w-4 h-4" />
            Photography Packages
          </div>
          <h2 className="text-2xl lg:text-6xl font-bold bg-gradient-to-r from-[#FFD700] via-[#800020] to-[#FFD700] bg-clip-text text-transparent mb-3">
            Choose Your Perfect <br />
            <span className="text-xl lg:text-5xl">Photography Experience</span>
          </h2>
          <p className="lg:text-lg text-sm text-[#5a3e2b] max-w-2xl mx-auto">
            Professionally crafted packages designed for every celebration.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setExpandedCard(pkg.id)}
              className="relative flex flex-col justify-between rounded-xl shadow-md bg-white border-2 border-[#800020] transition-transform duration-200 cursor-pointer hover:shadow-xl hover:scale-105 px-4 py-5"
            >
              {/* Badge */}
              {pkg.badgeName && (
                <div
                  className="absolute top-2 right-2 text-[10px] font-bold px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: pkg.badgeBackgroundColor || '#FFD700',
                    border: `1px solid ${pkg.badgeBorderColor || '#800020'}`,
                    color: '#000',
                  }}
                >
                  <Star className="w-3 h-3 inline mr-1" />
                  {pkg.badgeName}
                </div>
              )}

              {/* Title */}
              <div className="p-2 text-center">
                <h3 className="text-base font-semibold" style={{ color: pkg.textFontColor || '#000' }}>
                  {pkg.title}
                </h3>
                {pkg.tag && <p className="text-xs text-[#800020] mt-1">{pkg.tag}</p>}
                <p className="text-xl font-extrabold mt-1 text-[#FFD700]">{pkg.price}</p>
              </div>

              {/* Features */}
              <div className="px-2 pb-2 text-xs">
                <h4 className="font-semibold mb-1 text-[#800020]">Features</h4>
                <ul className="list-disc ml-4 text-[#5a3e2b] space-y-1">
                  {(pkg.features || []).slice(0, 5).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="flex flex-col gap-2 items-center mt-auto px-2 pb-3">
                <span className="text-[#800020] text-xs underline self-end">...Read More</span>
                <a
                  href="#ContactSection"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full text-center font-bold py-2 px-4 rounded-lg bg-[#800020] text-white hover:bg-[#FFD700] hover:text-black text-sm"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {expandedCard && selectedPlan && (
          <div className="fixed inset-0 bg-[#fffdf0]/90 z-50 flex items-center justify-center px-4">
            <div
              ref={modalRef}
              className="bg-white max-w-md w-full rounded-xl shadow-xl relative p-6 max-h-[90vh] overflow-y-auto border-2 border-[#FFD700]"
            >
              <button
                onClick={() => setExpandedCard(null)}
                className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-black"
              >
                &times;
              </button>

              <div className="text-center mb-4">
                <h3 className="text-xl font-bold" style={{ color: selectedPlan.textFontColor || '#000' }}>
                  {selectedPlan.title}
                </h3>
                <p className="text-xl font-extrabold mt-1 text-[#FFD700]">{selectedPlan.price}</p>
                {selectedPlan.description && (
                  <p className="text-sm text-[#5a3e2b] mt-2">{selectedPlan.description}</p>
                )}
                {selectedPlan.tag && <p className="text-xs text-[#800020] mt-1">{selectedPlan.tag}</p>}
              </div>

              <div className="text-xs text-[#5a3e2b]">
                <Section title="Features" items={selectedPlan.features} />
                <Section title="Camera Gear" items={selectedPlan.gear} />
                <Section title="Deliverables" items={selectedPlan.deliverables} />
              </div>

              <a
                href="#ContactSection"
                onClick={() => setExpandedCard(null)}
                className="block w-full text-center font-bold py-2 px-4 rounded-lg bg-[#800020] text-white hover:bg-[#FFD700] hover:text-black text-sm mt-4"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Section({ title, items }) {
  if (!items || !Array.isArray(items)) return null;
  return (
    <div className="mb-3">
      <h4 className="text-xs font-semibold mb-1 text-[#800020]">{title}</h4>
      <ul className="list-disc ml-5 text-xs text-[#5a3e2b] space-y-1">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
