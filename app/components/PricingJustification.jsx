

'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, Camera, Clock } from 'lucide-react';

const reasons = [
  {
    icon: <Camera className="w-7 h-7 text-[#D4AF37]" />,
    title: 'Traditional Expertise',
    description: 'We’re deeply familiar with Indian cultural events – ensuring every sacred moment is captured authentically.',
  },
  {
    icon: <Clock className="w-7 h-7 text-[#D4AF37]" />,
    title: 'No Rush Sessions',
    description: 'Our shoots respect your pace and rituals – no time pressure or shortcuts.',
  },
  {
    icon: <Star className="w-7 h-7 text-[#D4AF37]" />,
    title: 'Handcrafted Edits',
    description: 'Every photo is carefully color-graded and edited to match ethnic tones and event mood.',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#D4AF37]" />,
    title: 'Reliable Service',
    description: 'Punctual, responsive, and trusted by 500+ families across the UK.',
  },
];

export default function PricingJustification() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#FFF8E1] via-[#FAF3DC] to-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] via-[#800000] to-[#D4AF37]" />
      
      {/* Floating decorative elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -right-32 -top-32 w-64 h-64 rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-[#800000]/10 blur-xl pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -left-32 bottom-0 w-72 h-72 rounded-full bg-gradient-to-br from-[#800000]/10 to-[#D4AF37]/10 blur-xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4 rounded-full lg:mt-0 mt-[-35px]" />
            <h2 className="text-2xl md:text-5xl lg:text-4xl font-bold text-[#800000] tracking-tight lg:mt-0">
              Why Our Prices Reflect True Value
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          </motion.div>
          
          <motion.p
            className="text-[#5D4037] mt-6 text-sm md:text-xl lg:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            More than just photography — it&apos;s cultural storytelling with heart and heritage.
          </motion.p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-white rounded-3xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              <div className="h-full bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-3xl border border-[#D4AF37]/30 shadow-[0_10px_30px_rgba(128,0,0,0.08)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(128,0,0,0.15)] hover:border-[#D4AF37]/50 hover:translate-y-[-5px]">
                <div className="absolute -top-6 left-8 bg-gradient-to-br from-[#800000] to-[#A52A2A] p-4 rounded-full border-4 border-white shadow-lg group-hover:rotate-[10deg] transition-transform duration-500">
                  {item.icon}
                </div>
                <div className="pt-6 pl-4">
                  <h3 className="lg:text-2xl text-lg font-bold text-[#800000] mb-4 font-serif tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[#5D4037] lg:text-lg text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-[#D4AF37]/20 to-[#800000]/20 rounded-full backdrop-blur-sm border border-[#D4AF37]/30 lg:mt-0 mt-[-25px] lg:mb-0 mb-[-30px]">
            <span className="text-[#5D4037] font-medium italic">&apos;Preserving traditions one frame at a time&apos;</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}