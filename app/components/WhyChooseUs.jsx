

// 'use client';
// import { motion } from 'framer-motion';
// import {
//   Camera,
//   Clock,
//   Eye,
//   Globe,
//   Handshake,
//   MapPin,
//   Package,
//   SlidersHorizontal,
//   Smile,
//   Star,
//   UserCircle,
//   Users,
//   BadgeCheck,
// } from 'lucide-react';

// const features = [
//   {
//     icon: <Globe className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
//     title: 'Cultural Expertise',
//     description:
//       'Our Indian wedding photography is rooted in deep cultural understanding. From pre-wedding rituals to post-ceremony traditions, we ensure each shot reflects the authenticity, vibrancy, and spirit of your heritage. Every detail matters.',
//   },
//   {
//     icon: <SlidersHorizontal className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
//     title: 'Elegant Editing',
//     description:
//       'We deliver cinematic color grading, timeless tones, and professional touch-ups. Our editing enhances every image’s storytelling, ensuring your wedding album remains fresh, vibrant, and emotionally powerful for years to come.',
//   },
//   {
//     icon: <Smile className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
//     title: 'Emotional Moments',
//     description:
//       'Our lens is trained to capture genuine smiles, joyful tears, and heartfelt interactions. We don’t just take photos — we freeze real emotions that transport you back to those cherished moments, again and again.',
//   },
//   {
//     icon: <MapPin className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
//     title: 'Trusted Across UK',
//     description:
//       'Over 500+ clients have trusted us for Indian wedding photography in London, Birmingham, Leicester, and Manchester. We bring consistency, reliability, and a reputation built on glowing testimonials and repeat clients.',
//   },
//   {
//     icon: <Users className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
//     title: 'Family-Focused',
//     description:
//       'We capture the essence of generations — from grandparents to grandchildren. Our warm, respectful approach makes every family member feel seen, helping you preserve relationships in meaningful, emotional portraits.',
//   },
//   {
//     icon: <BadgeCheck className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
//     title: 'Experienced Team',
//     description:
//       'Our photographers and videographers are seasoned professionals, trained specifically in Indian and South Asian ceremonies. We work efficiently, dress appropriately, and respect traditions while creating stunning imagery.',
//   },
//   {
//     icon: <Clock className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
//     title: 'On-Time Delivery',
//     description:
//       'We guarantee prompt delivery of high-resolution edited images and cinematic videos. You’ll receive your full gallery within the agreed timeframe — no delays, just professional service and beautiful results.',
//   },
//   {
//     icon: <UserCircle className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
//     title: 'Client-Centric Approach',
//     description:
//       'We believe your wedding photos should reflect your story. That’s why we begin every project by listening — customizing every shot, scene, and style to align with your personality, values, and vision.',
//   },
//   {
//     icon: <Camera className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
//     title: 'High-End Equipment',
//     description:
//       'We shoot with full-frame DSLRs, 4K video rigs, and premium lenses to ensure clarity, depth, and beauty. Whether indoors or outdoors, morning or night, we deliver consistently sharp, vibrant visuals.',
//   },
//   {
//     icon: <Package className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
//     title: 'Tailored Packages',
//     description:
//       'Choose from flexible Indian wedding photo & video packages to suit every scale — from intimate Haldi ceremonies to grand multi-day receptions. Everything is customizable to your budget and schedule.',
//   },
//   {
//     icon: <Eye className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
//     title: 'Candid Storytelling',
//     description:
//       'We stay discreet and observant, capturing real moments as they unfold. Our candid wedding photography preserves spontaneous laughter, heartfelt glances, and unscripted magic — with authenticity and emotion.',
//   },
//   {
//     icon: <Handshake className="h-5 w-5 lg:h-10 lg:w-10  xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
//     title: 'Seamless Coordination',
//     description:
//       'We work hand-in-hand with planners, makeup artists, and venues to keep everything smooth. From arrival to wrap-up, our team supports your schedule without interrupting the joy of your wedding day.',
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section id="WhyChooseUs" className="bg-[#FFF8E1] px-2 py-8 lg:px-4 lg:py-16 pb-20 md:pb-50 lg:pb-56 xl:pb-56 2xl:pb-56 overflow-hidden">
//       <div className="text-center lg:mb-12">
//         <motion.h2
//           className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-black"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           Why Choose Us?
//         </motion.h2>
//         <motion.p
//           className="text-[#5D4037] mt-2 text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           Experience the difference with our traditional photography service
//         </motion.p>
//       </div>

//       <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-8 w-full mx-auto">
//         {features.map((feature, i) => (
//           <motion.div
//             key={i}
//             className={`
//               group
//               bg-white aspect-square p-4 rounded-xl border-l-4 border-[#D4AF37]
//               shadow hover:shadow-xl hover:scale-105 transition-transform duration-300
//               flex items-center justify-center
//               ${i % 2 === 0 ? 'sm:translate-y-2 sm:mt-0' : 'sm:translate-y-32 sm:mt-0'}
//               mt-0
//             `}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.1 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex flex-col items-center text-center justify-center h-full">
//               <div className="lg:mb-2 mb-2 md-text-xs xl:w-[45px] xl:h-[45px] lg:w-[30px] lg:h-[30px] 2xl:w-[70px] 2xl:h-[70px]">{feature.icon}</div>
//               <h3 className="lg:text-sm xl:text-xl text-[7px] md-text-lg  font-semibold text-[#800000] mb-2">
//                 {feature.title}
//               </h3>
//               <p className="lg:text-xs xl:text-sm 2xl:text-xl text-[6px] md-text-sm text-[#5D4037]">{feature.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }




'use client';
import { motion } from 'framer-motion';
import {
  Camera,
  Clock,
  Eye,
  Globe,
  Handshake,
  MapPin,
  Package,
  SlidersHorizontal,
  Smile,
  Star,
  UserCircle,
  Users,
  BadgeCheck,
} from 'lucide-react';

const features = [
  {
    icon: <Globe className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
    title: 'Cultural Expertise',
    description:
      'Our Indian wedding photography is rooted in deep cultural understanding. From pre-wedding rituals to post-ceremony traditions, we ensure each shot reflects the authenticity, vibrancy, and spirit of your heritage. Every detail matters.',
  },
  {
    icon: <SlidersHorizontal className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
    title: 'Elegant Editing',
    description:
      'We deliver cinematic color grading, timeless tones, and professional touch-ups. Our editing enhances every image’s storytelling, ensuring your wedding album remains fresh, vibrant, and emotionally powerful for years to come.',
  },
  {
    icon: <Smile className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
    title: 'Emotional Moments',
    description:
      'Our lens is trained to capture genuine smiles, joyful tears, and heartfelt interactions. We don’t just take photos — we freeze real emotions that transport you back to those cherished moments, again and again.',
  },
  {
    icon: <MapPin className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
    title: 'Trusted Across UK',
    description:
      'Over 500+ clients have trusted us for Indian wedding photography in London, Birmingham, Leicester, and Manchester. We bring consistency, reliability, and a reputation built on glowing testimonials and repeat clients.',
  },
  {
    icon: <Users className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
    title: 'Family-Focused',
    description:
      'We capture the essence of generations — from grandparents to grandchildren. Our warm, respectful approach makes every family member feel seen, helping you preserve relationships in meaningful, emotional portraits.',
  },
  {
    icon: <BadgeCheck className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
    title: 'Experienced Team',
    description:
      'Our photographers and videographers are seasoned professionals, trained specifically in Indian and South Asian ceremonies. We work efficiently, dress appropriately, and respect traditions while creating stunning imagery.',
  },
  {
    icon: <Clock className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
    title: 'On-Time Delivery',
    description:
      'We guarantee prompt delivery of high-resolution edited images and cinematic videos. You’ll receive your full gallery within the agreed timeframe — no delays, just professional service and beautiful results.',
  },
  {
    icon: <UserCircle className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
    title: 'Client-Centric Approach',
    description:
      'We believe your wedding photos should reflect your story. That’s why we begin every project by listening — customizing every shot, scene, and style to align with your personality, values, and vision.',
  },
  {
    icon: <Camera className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
    title: 'High-End Equipment',
    description:
      'We shoot with full-frame DSLRs, 4K video rigs, and premium lenses to ensure clarity, depth, and beauty. Whether indoors or outdoors, morning or night, we deliver consistently sharp, vibrant visuals.',
  },
  {
    icon: <Package className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
    title: 'Tailored Packages',
    description:
      'Choose from flexible Indian wedding photo & video packages to suit every scale — from intimate Haldi ceremonies to grand multi-day receptions. Everything is customizable to your budget and schedule.',
  },
  {
    icon: <Eye className="h-5 w-5 lg:h-10 lg:w-10 xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
    title: 'Candid Storytelling',
    description:
      'We stay discreet and observant, capturing real moments as they unfold. Our candid wedding photography preserves spontaneous laughter, heartfelt glances, and unscripted magic — with authenticity and emotion.',
  },
  {
    icon: <Handshake className="h-5 w-5 lg:h-10 lg:w-10  xl:w-[50px] xl:h-[50px] text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[360deg]" />,
    title: 'Seamless Coordination',
    description:
      'We work hand-in-hand with planners, makeup artists, and venues to keep everything smooth. From arrival to wrap-up, our team supports your schedule without interrupting the joy of your wedding day.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="WhyChooseUs" className="bg-[#FFF8E1] px-2 py-8 lg:px-4 lg:py-16 pb-20 md:pb-50 lg:pb-56 xl:pb-56 2xl:pb-56 overflow-hidden">
      <div className="text-center lg:mb-12">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-black"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          className="text-[#5D4037] mt-2 text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Experience the difference with our traditional photography service
        </motion.p>
      </div>

      <div className="grid grid-cols-2 mt-5 lg:mt-0 mb-[-25px] lg:mb-0 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className={`
              group
              bg-white aspect-square p-4 rounded-xl border-l-4 border-[#D4AF37]
              shadow hover:shadow-xl hover:scale-105 transition-transform duration-300
              flex items-center justify-center
              ${i % 2 === 0 ? 'sm:translate-y-2 sm:mt-0' : 'sm:translate-y-32 sm:mt-0'}
              mt-0
            `}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center justify-center h-full">
              <div className="lg:mb-2 mb-2 md-text-xs xl:w-[45px] xl:h-[45px] lg:w-[30px] lg:h-[30px] 2xl:w-[70px] 2xl:h-[70px]">{feature.icon}</div>
              <h3 className="lg:text-sm xl:text-xl text-[7px] md-text-lg  font-semibold text-[#800000] mb-2">
                {feature.title}
              </h3>
              <p className="lg:text-xs xl:text-sm 2xl:text-xl text-[6px] md-text-sm text-[#5D4037]">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}