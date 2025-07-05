// 'use client';
// import { useState } from 'react';
// import { CheckCircle, Star, Camera, Clock, Image, Users, Video, MapPin, Award, Crown } from 'lucide-react';

// const packages = [
//   {
//     name: 'Bronze',
//     subtitle: 'Perfect Start',
//     price: '£149',
//     originalPrice: '£199',
//     features: [
//       { icon: Clock, text: '2-Hour Professional Shoot' },
//       { icon: Image, text: '15 Premium Edited Photos' },
//       { icon: Users, text: 'One Traditional Outfit' },
//       { icon: MapPin, text: 'One Outdoor/Indoor Location' },
//     ],
//     popular: false,
//     gradient: 'from-amber-50 to-orange-50',
//     borderGradient: 'from-amber-300 to-orange-300',
//     buttonGradient: 'from-amber-600 to-orange-600',
//     iconColor: 'text-amber-600',
//     badge: null,
//   },
//   {
//     name: 'Silver',
//     subtitle: 'Most Popular',
//     price: '£249',
//     originalPrice: '£329',
//     features: [
//       { icon: Clock, text: '4-Hour Extended Shoot' },
//       { icon: Image, text: '30 Professional Edited Photos' },
//       { icon: Users, text: 'Two Complete Outfit Changes' },
//       { icon: Camera, text: 'Location + Decor Detail Shots' },
//       { icon: Video, text: 'Short Cinematic Highlight Video' },
//     ],
//     popular: true,
//     gradient: 'from-slate-50 to-gray-50',
//     borderGradient: 'from-slate-400 to-gray-400',
//     buttonGradient: 'from-slate-600 to-gray-700',
//     iconColor: 'text-slate-600',
//     badge: 'Most Popular',
//   },
//   {
//     name: 'Gold',
//     subtitle: 'Premium Experience',
//     price: '£399',
//     originalPrice: '£549',
//     features: [
//       { icon: Crown, text: 'Full-Day Luxury Coverage' },
//       { icon: Image, text: '60+ Masterpiece Edited Photos' },
//       { icon: Users, text: 'Unlimited Outfit Changes' },
//       { icon: Camera, text: 'Pre/Post Event Complete Coverage' },
//       { icon: Video, text: 'Cinematic Video + Social Reels' },
//       { icon: Award, text: 'Traditional Poses & Candid Moments' },
//     ],
//     popular: false,
//     gradient: 'from-yellow-50 to-amber-50',
//     borderGradient: 'from-yellow-400 to-amber-400',
//     buttonGradient: 'from-yellow-600 to-amber-600',
//     iconColor: 'text-yellow-600',
//     badge: 'Premium',
//   },
// ];

// export default function PackagesSection() {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   return (
//     <section id="PackagesSection" className="relative py-20 bg-gradient-to-br from-rose-50 via-white to-orange-50 overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-rose-400 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
//       </div>
      
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
//             <Camera className="w-4 h-4" />
//             Photography Packages
//           </div>
          
//           <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-4">
//             Choose Your Perfect
//             <br />
//             <span className="text-3xl md:text-5xl">Photography Experience</span>
//           </h2>
          
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             Capture your special moments with our professionally crafted packages designed for every celebration and tradition.
//           </p>
//         </div>

//         {/* Packages Grid */}
//         <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
//           {packages.map((pkg, index) => (
//             <div
//               key={index}
//               className={`relative group ${pkg.popular ? 'lg:-mt-8' : ''}`}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               {/* Popular badge */}
//               {pkg.badge && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
//                   <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
//                     <Star className="w-4 h-4 inline mr-1" />
//                     {pkg.badge}
//                   </div>
//                 </div>
//               )}

//               {/* Card */}
//               <div className={`
//                 relative overflow-hidden rounded-2xl lg:rounded-3xl
//                 bg-gradient-to-br ${pkg.gradient}
//                 border-2 border-transparent
//                 bg-clip-padding
//                 shadow-xl hover:shadow-2xl
//                 transition-all duration-500 ease-out
//                 ${hoveredCard === index ? 'scale-105' : ''}
//                 ${pkg.popular ? 'ring-2 ring-rose-200 shadow-rose-200/25' : ''}
//               `}>
//                 {/* Gradient border effect */}
//                 <div className={`absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r ${pkg.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
//                 <div className={`absolute inset-[2px] rounded-2xl lg:rounded-3xl bg-gradient-to-br ${pkg.gradient}`}></div>
                
//                 {/* Content */}
//                 <div className="relative z-10 p-8 lg:p-10">
//                   {/* Header */}
//                   <div className="text-center mb-8">
//                     <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
//                       {pkg.name}
//                     </h3>
//                     <p className="text-gray-600 font-medium mb-6">{pkg.subtitle}</p>
                    
//                     {/* Pricing */}
//                     <div className="mb-6">
//                       <div className="flex items-center justify-center gap-3 mb-2">
//                         <span className="text-4xl lg:text-5xl font-bold text-gray-800">
//                           {pkg.price}
//                         </span>
//                         <span className="text-lg text-gray-500 line-through">
//                           {pkg.originalPrice}
//                         </span>
//                       </div>
//                       <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
//                         Save £{parseInt(pkg.originalPrice.slice(1)) - parseInt(pkg.price.slice(1))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Features */}
//                   <div className="space-y-4 mb-8">
//                     {pkg.features.map((feature, i) => (
//                       <div
//                         key={i}
//                         className="flex items-center gap-3 group/feature"
//                       >
//                         <div className={`
//                           flex items-center justify-center w-10 h-10 rounded-full
//                           bg-white shadow-md group-hover/feature:shadow-lg
//                           transition-all duration-300
//                           ${pkg.iconColor}
//                         `}>
//                           <feature.icon className="w-5 h-5" />
//                         </div>
//                         <span className="text-gray-700 font-medium group-hover/feature:text-gray-900 transition-colors">
//                           {feature.text}
//                         </span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* CTA Button */}
//                   <button className={`
//                     w-full py-4 px-6 rounded-xl font-semibold text-white
//                     bg-gradient-to-r ${pkg.buttonGradient}
//                     shadow-lg hover:shadow-xl
//                     transform hover:-translate-y-1
//                     transition-all duration-300
//                     group/button
//                   `}>
//                     <span className="flex items-center justify-center gap-2">
//                       Book {pkg.name} Package
//                       <Camera className="w-5 h-5 group-hover/button:rotate-12 transition-transform duration-300" />
//                     </span>
//                   </button>

//                   {/* Small print */}
//                   <p className="text-center text-gray-500 text-sm mt-4">
//                     No hidden fees • Flexible scheduling
//                   </p>
//                 </div>

//                 {/* Decorative corner */}
//                 <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
//                   <div className={`w-full h-full bg-gradient-to-br ${pkg.buttonGradient} transform rotate-45 translate-x-10 -translate-y-10`}></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-16">
//           <p className="text-gray-600 mb-6">
//             Need a custom package? We're here to help create the perfect photography experience for your special day.
//           </p>
//           <button className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-rose-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
//             <Users className="w-5 h-5" />
//             Get Custom Quote
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


// 'use client';
// import { useState } from 'react';
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
// } from 'lucide-react';

// const packages = [
//   {
//     name: 'Bronze',
//     subtitle: 'Perfect Start',
//     price: '£149',
//     originalPrice: '£199',
//     features: [
//       { icon: Clock, text: '2-Hour Professional Shoot' },
//       { icon: Image, text: '15 Premium Edited Photos' },
//       { icon: Users, text: 'One Traditional Outfit' },
//       { icon: MapPin, text: 'One Outdoor/Indoor Location' },
//     ],
//     popular: false,
//     gradient: 'from-amber-50 to-orange-50',
//     borderGradient: 'from-amber-300 to-orange-300',
//     buttonGradient: 'from-amber-600 to-orange-600',
//     iconColor: 'text-amber-600',
//     badge: null,
//   },
//   {
//     name: 'Silver',
//     subtitle: 'Most Popular',
//     price: '£249',
//     originalPrice: '£329',
//     features: [
//       { icon: Clock, text: '4-Hour Extended Shoot' },
//       { icon: Image, text: '30 Professional Edited Photos' },
//       { icon: Users, text: 'Two Complete Outfit Changes' },
//       { icon: Camera, text: 'Location + Decor Detail Shots' },
//       { icon: Video, text: 'Short Cinematic Highlight Video' },
//     ],
//     popular: true,
//     gradient: 'from-slate-50 to-gray-50',
//     borderGradient: 'from-slate-400 to-gray-400',
//     buttonGradient: 'from-slate-600 to-gray-700',
//     iconColor: 'text-slate-600',
//     badge: 'Most Popular',
//   },
//   {
//     name: 'Gold',
//     subtitle: 'Premium Experience',
//     price: '£399',
//     originalPrice: '£549',
//     features: [
//       { icon: Crown, text: 'Full-Day Luxury Coverage' },
//       { icon: Image, text: '60+ Masterpiece Edited Photos' },
//       { icon: Users, text: 'Unlimited Outfit Changes' },
//       { icon: Camera, text: 'Pre/Post Event Complete Coverage' },
//       { icon: Video, text: 'Cinematic Video + Social Reels' },
//       { icon: Award, text: 'Traditional Poses & Candid Moments' },
//     ],
//     popular: false,
//     gradient: 'from-yellow-50 to-amber-50',
//     borderGradient: 'from-yellow-400 to-amber-400',
//     buttonGradient: 'from-yellow-600 to-amber-600',
//     iconColor: 'text-yellow-600',
//     badge: 'Premium',
//   },
// ];

// export default function PackagesSection() {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   return (
//     <section
//       id="PackagesSection"
//       className="relative py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-rose-50 via-white to-orange-50 overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-10 w-56 h-56 sm:w-72 sm:h-72 bg-rose-400 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-orange-400 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10 max-w-[1600px] xl:max-w-[1800px] 2xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-14">
//           <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
//             <Camera className="w-4 h-4" />
//             Photography Packages
//           </div>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-3">
//             Choose Your Perfect <br />
//             <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
//               Photography Experience
//             </span>
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             Capture your special moments with our professionally crafted packages designed for every celebration and tradition.
//           </p>
//         </div>

//         {/* Cards Grid — 2 columns on mobile */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
//           {packages.map((pkg, index) => (
//             <div
//               key={index}
//               className={`relative group ${pkg.popular ? 'lg:-mt-6 xl:-mt-8' : ''}`}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               {/* Badge */}
//               {pkg.badge && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
//                   <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
//                     <Star className="w-4 h-4 inline mr-1" />
//                     {pkg.badge}
//                   </div>
//                 </div>
//               )}

//               {/* Card */}
//               <div
//                 className={`relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-br ${pkg.gradient}
//                 border border-transparent bg-clip-padding shadow-lg hover:shadow-xl
//                 transition-transform duration-500 ease-out
//                 ${hoveredCard === index ? 'scale-105' : ''}
//                 ${pkg.popular ? 'ring-2 ring-rose-200 shadow-rose-200/30' : ''}`}
//               >
//                 {/* Border overlay */}
//                 <div className={`absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r ${pkg.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
//                 <div className={`absolute inset-[2px] rounded-2xl lg:rounded-3xl bg-gradient-to-br ${pkg.gradient}`} />

//                 {/* Card Content */}
//                 <div className="relative z-10 p-5 sm:p-6 lg:p-8">
//                   <div className="text-center mb-6">
//                     <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
//                       {pkg.name}
//                     </h3>
//                     <p className="text-gray-600 font-medium mb-4 text-lg">{pkg.subtitle}</p>
//                     <div className="mb-4 sm:mb-5">
//                       <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1">
//                         <span className="text-lg sm:text-4xl lg:text-5xl font-bold text-gray-800">
//                           {pkg.price}
//                         </span>
//                         <span className="text-base sm:text-lg text-gray-500 line-through">
//                           {pkg.originalPrice}
//                         </span>
//                       </div>
//                       <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
//                         Save £{parseInt(pkg.originalPrice.slice(1)) - parseInt(pkg.price.slice(1))}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="space-y-3 sm:space-y-4 mb-6">
//                     {pkg.features.map((feature, i) => (
//                       <div key={i} className="flex items-center gap-3 group/feature">
//                         <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md ${pkg.iconColor}`}>
//                           <feature.icon className="w-4 h-4" />
//                         </div>
//                         <span className="text-[7px] sm:text-base lg:text-lg text-gray-700 font-medium">
//                           {feature.text}
//                         </span>
//                       </div>
//                     ))}
//                   </div>

//                   <button className={`w-full py-2 sm:py-4 px-2 sm:px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${pkg.buttonGradient} shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300`}>
//                     <span className="flex items-center justify-center gap-2">
//                       Book {pkg.name} Package
//                       <Camera className="w-5 h-5 group-hover/button:rotate-12 transition-transform duration-300" />
//                     </span>
//                   </button>
//                   <p className="text-center text-gray-500 text-xs sm:text-sm mt-3">
//                     No hidden fees • Flexible scheduling
//                   </p>
//                 </div>

//                 <div className="absolute top-0 right-0 w-10 h-10 sm:w-20 sm:h-20 opacity-10">
//                   <div className={`w-full h-full bg-gradient-to-br ${pkg.buttonGradient} transform rotate-45 translate-x-8 -translate-y-8`} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-16">
//           <p className="text-gray-600 mb-6">
//             Need a custom package? We're here to help create the perfect photography experience for your special day.
//           </p>
//           <button className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-rose-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
//             <Users className="w-4 h-4" />
//             Get Custom Quote
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';
import { useEffect, useState } from 'react';
import {
  Star,
  Camera,
  Clock,
  Image,
  Users,
  Video,
  MapPin,
  Award,
  Crown,
} from 'lucide-react';

const packages = [
  {
    name: 'Bronze',
    subtitle: 'Perfect Start',
    price: '£149',
    originalPrice: '£199',
    features: [
      { icon: Clock, text: '2-Hour Professional Shoot' },
      { icon: Image, text: '15 Premium Edited Photos' },
      { icon: Users, text: 'One Traditional Outfit' },
      { icon: MapPin, text: 'One Outdoor/Indoor Location' },
    ],
    popular: false,
    gradient: 'from-amber-50 to-orange-50',
    borderGradient: 'from-amber-300 to-orange-300',
    buttonGradient: 'from-amber-600 to-orange-600',
    iconColor: 'text-amber-600',
    badge: null,
  },
  {
    name: 'Silver',
    subtitle: 'Most Popular',
    price: '£249',
    originalPrice: '£329',
    features: [
      { icon: Clock, text: '4-Hour Extended Shoot' },
      { icon: Image, text: '30 Professional Edited Photos' },
      { icon: Users, text: 'Two Complete Outfit Changes' },
      { icon: Camera, text: 'Location + Decor Detail Shots' },
      { icon: Video, text: 'Short Cinematic Highlight Video' },
    ],
    popular: true,
    gradient: 'from-slate-50 to-gray-50',
    borderGradient: 'from-slate-400 to-gray-400',
    buttonGradient: 'from-slate-600 to-gray-700',
    iconColor: 'text-slate-600',
    badge: 'Most Popular',
  },
  {
    name: 'Gold',
    subtitle: 'Premium Experience',
    price: '£399',
    originalPrice: '£549',
    features: [
      { icon: Crown, text: 'Full-Day Luxury Coverage' },
      { icon: Image, text: '60+ Masterpiece Edited Photos' },
      { icon: Users, text: 'Unlimited Outfit Changes' },
      { icon: Camera, text: 'Pre/Post Event Complete Coverage' },
      { icon: Video, text: 'Cinematic Video + Social Reels' },
      { icon: Award, text: 'Traditional Poses & Candid Moments' },
    ],
    popular: false,
    gradient: 'from-yellow-50 to-amber-50',
    borderGradient: 'from-yellow-400 to-amber-400',
    buttonGradient: 'from-yellow-600 to-amber-600',
    iconColor: 'text-yellow-600',
    badge: 'Premium',
  },
];

export default function PackagesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Prevent SSR hydration mismatch

  return (
    <section
      id="PackagesSection"
      className="relative py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-rose-50 via-white to-orange-50 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-56 h-56 sm:w-72 sm:h-72 bg-rose-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-orange-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            Photography Packages
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-3">
            Choose Your Perfect <br />
            <span className="text-3xl lg:text-5xl">Photography Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Capture your special moments with our professionally crafted packages designed for every celebration and tradition.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {packages.map((pkg, index) => {
            const discount =
              parseInt(pkg.originalPrice.slice(1)) -
              parseInt(pkg.price.slice(1));

            return (
              <div
                key={index}
                className={`relative group ${pkg.popular ? 'lg:-mt-6 xl:-mt-8' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                      <Star className="w-4 h-4 inline mr-1" />
                      {pkg.badge}
                    </div>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${pkg.gradient}
                  border border-transparent bg-clip-padding shadow-lg hover:shadow-xl
                  transition-transform duration-500 ease-out
                  ${hoveredCard === index ? 'scale-105' : ''}
                  ${pkg.popular ? 'ring-2 ring-rose-200 shadow-rose-200/30' : ''}`}
                >
                  {/* Overlay */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${pkg.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className={`absolute inset-[2px] rounded-2xl bg-gradient-to-br ${pkg.gradient}`} />

                  {/* Content */}
                  <div className="relative z-10 p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-800">{pkg.name}</h3>
                      <p className="text-gray-600 mb-4">{pkg.subtitle}</p>
                      <div className="flex justify-center items-center gap-3 mb-2">
                        <span className="text-4xl font-bold text-gray-800">{pkg.price}</span>
                        <span className="text-lg text-gray-500 line-through">{pkg.originalPrice}</span>
                      </div>
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium inline-block">
                        Save £{discount}
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      {pkg.features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                          <div key={i} className="flex items-center gap-3">
                            <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md ${pkg.iconColor}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-gray-700 text-base font-medium">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>

                    <button className={`w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${pkg.buttonGradient} hover:-translate-y-0.5 transition-all`}>
                      <span className="flex items-center justify-center gap-2">
                        Book {pkg.name} Package
                        <Camera className="w-5 h-5" />
                      </span>
                    </button>
                    <p className="text-center text-gray-500 text-sm mt-3">
                      No hidden fees • Flexible scheduling
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need a custom package? We&apos;re here to help create the perfect photography experience for your special day.
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-rose-700 hover:to-pink-700 shadow-lg">
            <Users className="w-4 h-4" />
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
