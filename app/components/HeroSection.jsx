
'use client';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../admin/Firebase/config';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const fetchHeroImages = async () => {
      const snapshot = await getDocs(collection(db, 'heroImages'));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const sorted = data.sort((a, b) => a.priority - b.priority);
      setImages(sorted);
    };
    fetchHeroImages();
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      const snapshot = await getDocs(collection(db, 'reviews'));
      const data = snapshot.docs.map(doc => {
        const d = doc.data();
        return {
          id: doc.id,
          name: d.name || 'Anonymous',
          text: d.comment || d.review || d.message || 'No review provided.',
          rating: d.rating || 5
        };
      });
      setReviews(data);
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, 5000);

    const reviewInterval = setInterval(() => {
      setCurrentReviewIndex(prev => (prev + 1) % reviews.length);
    }, 6000);

    return () => {
      clearInterval(imgInterval);
      clearInterval(reviewInterval);
    };
  }, [images, reviews]);

  const currentReview = reviews[currentReviewIndex];

  return (
    <section id="HeroSection" className="relative bg-[#F9F5EC] flex flex-col lg:flex-row items-start px-6 pb-20 lg:mt-[-23px] mt-[-23px] overflow-hidden">
      {/* Left Text Block */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-12 lg:pr-10">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl mt-[-17px] lg:text-5xl font-bold text-[#800000] mb-4 leading-tight"
        >
          Capture Your Culture{" "}
          <span className="text-[#D4AF37] lg:ml-45 lg:text-5xl italic inline-block">Dhoti</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs text-[#5D4037] font-[Palatino] mb-8 max-w-lg mx-auto lg:text-lg lg:mx-0 space-y-3"
        >
          <p>
            Our mission is to beautifully preserve the essence of your cultural moments whether it&apos;s a radiant South Asian wedding, an intimate family portrait session, or a vibrant traditional festival.
             Specializing in cultural photography, we artfully blend heritage storytelling with modern techniques to capture images that reflect the richness of your background and the joy of the present moment.
             With deep experience in both traditional and contemporary photography styles, we create timeless visuals that honor your customs, rituals, and family legacy celebrating the vibrant colors, emotions, and beauty of South Asian traditions through every frame.
           </p>
        </motion.div>

        {/* Review + Buttons side by side */}
        {currentReview && (
          <div className="flex flex-col sm:flex-row items-start justify-start gap-6">
            {/* Review Box (left) */}
            <div className="bg-gradient-to-br from-white via-[#f9f5ec] to-[#f0e9dc] border border-[#e4dcd1] rounded-3xl shadow-xl p-3 h-32 w-full lg:p-5 lg:h-40 max-w-[260px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col justify-between h-full"
                >
                  <p className="text-gray-700 italic text-xs lg:text-sm leading-snug line-clamp-3">
                    “{currentReview.text}”
                  </p>
                  <div className="mt-4">
                    <p className="font-bold text-[#5D4037] lg:text-sm text-xs">{currentReview.name}</p>
                    <div className="flex space-x-[2px]">
                      {Array.from({ length: 5 }).map((_, i) => {
                        const isFilled = i < currentReview.rating;
                        return (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={isFilled ? '#D4AF37' : '#FFFFFF'}
                            stroke={isFilled ? 'none' : 'black'}
                            className={isFilled ? 'w-5 h-5' : 'w-4 h-4'}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.3 5.8 22l1.2-7.86-5-4.87 7.1-1.01L12 2z"
                            />
                          </svg>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Buttons (right of review box) */}
            <div className="flex flex-col gap-3 mt-1">
              <Link href="#ContactSection">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-3 bg-[#D4AF37] text-white ml-14 lg:ml-0 text-sm lg:text-base font-semibold rounded-full shadow-md hover:bg-[#c19b2c]"
                >
                  Book Your Session
                </motion.button>
              </Link>
              <Link href="#GallerySection">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 ml-14 lg:ml-0 bg-white border border-[#D4AF37] text-[#5D4037] text-sm lg:text-base font-semibold rounded-full shadow-md hover:bg-[#f5f0e4]"
                >
                  See Our Gallery
                </motion.button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Right Image Side */}
      <div className="w-full lg:w-130 lg:h-[660px] flex justify-center items-center mt-10 lg:mt-4">
        <div className="relative w-[450px] h-[350px] md:w-[420px] md:h-[480px] xl:w-[580px] xl:h-[680px] 2xl:w-[460px] 2xl:h-[580px]">
          <AnimatePresence mode="wait">
            {images.map((img, idx) =>
              idx === currentImageIndex ? (
                <motion.div
                  key={img.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >

                  <Image
                  src={img.url}
                  alt={img.alt || `Hero Image ${img.priority}`}
                  fill
                  sizes="(max-width: 768px) 450px,
                    (max-width: 1024px) 420px,
                   (max-width: 1280px) 580px,
                   460px"
                   className="object-cover"
                  style={{ borderRadius: '50% / 40%', objectPosition: 'center top' }}
                  priority
                  />

                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          {/* Stand Design */}
          <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-5 h-24 bg-[#D4AF37] rounded-full shadow-lg" />
          <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-5 h-24 bg-[#D4AF37] rounded-full shadow-lg" />
          <motion.div
            className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#5D4037] rounded-t-md z-10 shadow"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="absolute bottom-[-28px] left-1/2 transform -translate-x-1/2 w-20 h-8 bg-gradient-to-b from-[#5D4037] to-[#3E2723] rounded-full shadow-md" />
          <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-48 h-6 bg-[#4E342E] shadow-xl [clip-path:polygon(8%_0%,92%_0%,100%_100%,0%_100%)]" />
        </div>
      </div>
    </section>
  );
}
