// 'use client';
// import { motion } from 'framer-motion';

// export default function VideoHighlight() {
//   return (
//     <section id="VideoHighlight" className="bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] py-20 px-6 mt-0 overflow-hidden">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {/* Left: Custom Video Shape */}
//         <motion.div
//           className="relative rounded-tl-[80px] rounded-br-[80px] overflow-hidden border-4 border-[#D4AF37] shadow-xl"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <div className="w-full overflow-hidden rounded-tl-[80px] rounded-br-[80px] border-4 border-[#D4AF37] shadow-xl">
//   <iframe
//     className="w-full h-[300px] md:h-[500px]"
//     src="https://www.youtube.com/embed/GNqKYcgqt4U"
//     title="Dhoti Function Video"
//     frameBorder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     allowFullScreen
//   ></iframe>
// </div>
// {/* <video
//             controls
//             className="w-full h-full object-cover"
//             poster="/images/video-thumbnail.jpg"
//           >
//             <source src="https://youtu.be/GNqKYcgqt4U" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video> */}


//         </motion.div>

//         {/* Right: Text Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center md:text-left"
//         >
//           <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-[#6A1B1A] mb-6 leading-tight">
//             Capture the Event Highlight
//           </h2>
//           <p className="text-[#4E342E] text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl mb-8">
//             Experience the vibrancy and emotion of traditional events through our curated highlight reels. Each frame tells a story, capturing smiles, rituals, and timeless moments.
//           </p>

//           <a
//             href="#gallery"
//             className="inline-block px-6 py-3 bg-[#D4AF37] text-white font-semibold rounded-lg shadow-md hover:bg-[#b5952f] transition"
//           >
//             Explore Gallery
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// 'use client';
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const videos = [
//   {
//     id: 1,
//     url: 'https://www.youtube.com/embed/GNqKYcgqt4U',
//     title: 'Dhoti Ceremony Highlights',
//   },
//   {
//     id: 2,
//     url: 'https://www.youtube.com/embed/zfXq6PGGYfs',
//     title: 'Traditional South Event',
//   },
//   {
//     id: 3,
//     url: 'https://www.youtube.com/embed/J_LV1sxGxj0',
//     title: 'Cultural Function Showcase',
//   },
// ];

// export default function VideoHighlight() {
//   const [current, setCurrent] = useState(0);
//   const currentVideo = videos[current];

//   const nextVideo = () => {
//     setCurrent((prev) => (prev + 1) % videos.length);
//   };

//   const prevVideo = () => {
//     setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
//   };

//   return (
//     <section
//       id="VideoHighlight"
//       className="bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] py-20 px-6 mt-0 overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Section Heading */}
//         <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#6A1B1A] mb-12">
//           Video Highlights
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Left: Custom Shaped Video */}
//           <motion.div
//             className="relative rounded-tl-[80px] rounded-br-[80px] overflow-hidden border-4 border-[#D4AF37] shadow-xl"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <div className="w-full overflow-hidden rounded-tl-[80px] rounded-br-[80px] border-4 border-[#D4AF37] shadow-xl">
//               <AnimatePresence mode="wait">
//                 <motion.iframe
//                   key={currentVideo.id}
//                   className="w-full h-[300px] md:h-[500px]"
//                   src={currentVideo.url}
//                   title={currentVideo.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.6 }}
//                 />
//               </AnimatePresence>
//             </div>
//           </motion.div>

//           {/* Right: Text and Controls */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center md:text-left"
//           >
//             <h3 className="text-xl md:text-2xl font-semibold text-[#8D6E63] mb-4">
//               {currentVideo.title}
//             </h3>
//             <p className="text-[#4E342E] text-xs md:text-sm lg:text-lg xl:text-xl mb-6">
//               Experience the vibrancy and emotion of traditional events through our curated highlight reels. Each frame tells a story, capturing smiles, rituals, and timeless moments.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start justify-center sm:justify-start">
//               <button
//                 onClick={prevVideo}
//                 className="px-5 py-2 bg-[#D4AF37] text-white rounded-full shadow hover:bg-[#b5952f] transition"
//               >
//                 ◀ Previous
//               </button>
//               <button
//                 onClick={nextVideo}
//                 className="px-5 py-2 bg-[#D4AF37] text-white rounded-full shadow hover:bg-[#b5952f] transition"
//               >
//                 Next ▶
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



// 'use client';
// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { db } from '../admin/Firebase/config'; // update path as needed
// import { collection, getDocs, query, orderBy } from 'firebase/firestore';

// export default function VideoHighlight() {
//   const [videos, setVideos] = useState([]);
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       const q = query(collection(db, 'videos'), orderBy('priority', 'asc'));
//       const snapshot = await getDocs(q);
//       const data = snapshot.docs.map(doc => ({
//         id: doc.id,
//         url: `https://www.youtube.com/embed/${doc.data().youtubeId}`,
//         title: doc.data().title,
//       }));
//       setVideos(data);
//     };
//     fetchVideos();
//   }, []);

//   const nextVideo = () => {
//     setCurrent((prev) => (prev + 1) % videos.length);
//   };

//   const prevVideo = () => {
//     setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
//   };

//   if (videos.length === 0) return null;

//   const currentVideo = videos[current];

//   return (
//     <section
//       id="VideoHighlight"
//       className="bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] py-20 px-6 mt-0 overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#6A1B1A] mb-12">
//           Video Highlights
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Left: Video */}
//           <motion.div
//             className="relative rounded-tl-[80px] rounded-br-[80px] overflow-hidden border-4 border-[#D4AF37] shadow-xl"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <div className="w-full overflow-hidden rounded-tl-[80px] rounded-br-[80px] border-4 border-[#D4AF37] shadow-xl">
//               <AnimatePresence mode="wait">
//                 <motion.iframe
//                   key={currentVideo.id}
//                   className="w-full h-[300px] md:h-[500px]"
//                   src={currentVideo.url}
//                   title={currentVideo.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.6 }}
//                 />
//               </AnimatePresence>
//             </div>
//           </motion.div>

//           {/* Right: Details & Controls */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center md:text-left"
//           >
//             <h3 className="text-xl md:text-2xl font-semibold text-[#8D6E63] mb-4">
//               {currentVideo.title}
//             </h3>
//             <p className="text-[#4E342E] text-xs md:text-sm lg:text-lg xl:text-xl mb-6">
//               Experience the vibrancy and emotion of traditional events through our curated highlight reels. Each frame tells a story, capturing smiles, rituals, and timeless moments.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start justify-center sm:justify-start">
//               <button
//                 onClick={prevVideo}
//                 className="px-5 py-2 bg-[#D4AF37] text-white rounded-full shadow hover:bg-[#b5952f] transition"
//               >
//                 ◀ Previous
//               </button>
//               <button
//                 onClick={nextVideo}
//                 className="px-5 py-2 bg-[#D4AF37] text-white rounded-full shadow hover:bg-[#b5952f] transition"
//               >
//                 Next ▶
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



// 'use client';
// import { useEffect, useState } from 'react';
// import { db } from '../admin/Firebase/config';
// import { collection, getDocs, query, orderBy } from 'firebase/firestore';
// import Link from 'next/link';

// export default function VideoHighlight() {
//   const [videos, setVideos] = useState([]);
//   const [current, setCurrent] = useState(0);
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       const q = query(collection(db, 'videos'), orderBy('priority', 'asc'));
//       const snapshot = await getDocs(q);
//       const data = snapshot.docs.map(doc => {
//         const vid = doc.data();
//         return {
//           id: doc.id,
//           videoId: vid.videoId,
//           title: vid.title,
//           metaTitle: vid.metaTitle,
//           publishedDate: vid.publishedDate,
//           thumbnail: `https://img.youtube.com/vi/${vid.videoId}/hqdefault.jpg`,
//         };
//       });
//       setVideos(data);
//     };

//     fetchVideos();
//     setHasMounted(true);
//   }, []);

//   if (!hasMounted || videos.length === 0) return null;

//   const currentVideo = videos[current];

//   const nextVideo = () => {
//     setCurrent((prev) => (prev + 1) % videos.length);
//   };

//   const prevVideo = () => {
//     setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
//   };

//   return (
//     <section
//       id="VideoHighlight"
//       className="bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] py-20 px-6"
//     >
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-center text-4xl font-bold text-[#6A1B1A] mb-12">
//           Video Highlights
//         </h2>

//         {/* Video display */}
//         <div className="flex flex-col md:flex-row gap-10 items-center">
//           {/* Thumbnail & Title */}
//           <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
//             <img
//               src={currentVideo.thumbnail}
//               alt={currentVideo.title}
//               className="w-full max-w-xl rounded-tl-[80px] rounded-br-[80px] border-4 border-[#D4AF37] shadow-xl"
//             />
//             <Link
//               href={`/videos/${currentVideo.metaTitle}`}
//               className="mt-4 text-xl font-semibold text-[#8D6E63] hover:underline text-center md:text-left"
//             >
//               {currentVideo.title}
//             </Link>
//             <p className="text-sm text-[#4E342E] mt-2">
//               Published: {currentVideo.publishedDate || 'N/A'}
//             </p>
//           </div>

//           {/* Controls */}
//           <div className="flex flex-col gap-4 justify-center w-full md:w-1/2 text-center md:text-left">
//             <p className="text-[#4E342E] text-sm md:text-base">
//               Dive into our video collection that showcases vibrant traditions, cultural heritage, and storytelling like no other.
//             </p>
//             <div className="flex gap-4 justify-center md:justify-start mt-6">
//               <button
//                 onClick={prevVideo}
//                 className="bg-[#D4AF37] text-white px-6 py-2 rounded-full shadow hover:bg-[#b5952f] transition"
//               >
//                 ◀ Previous
//               </button>
//               <button
//                 onClick={nextVideo}
//                 className="bg-[#D4AF37] text-white px-6 py-2 rounded-full shadow hover:bg-[#b5952f] transition"
//               >
//                 Next ▶
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Pagination Thumbnails */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-10">
//           {videos.map((video, idx) => (
//             <button
//               key={video.id}
//               onClick={() => setCurrent(idx)}
//               className={`border-2 rounded-md overflow-hidden transition ${
//                 idx === current ? 'border-[#D4AF37]' : 'border-transparent'
//               }`}
//             >
//               <img
//                 src={video.thumbnail}
//                 alt={video.title}
//                 className="w-full h-24 object-cover"
//               />
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import { db } from '../admin/Firebase/config';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import Link from 'next/link';

export default function VideoHighlight() {
  const [videos, setVideos] = useState([]);
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      const q = query(collection(db, 'videos'), orderBy('priority', 'asc'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => {
        const vid = doc.data();
        return {
          id: doc.id,
          videoId: vid.videoId,
          title: vid.title,
          metaTitle: vid.metaTitle,
        };
      });
      setVideos(data);
      setMounted(true);
    };

    fetchVideos();
  }, []);

  if (!mounted || videos.length === 0) return null;

  const currentVideo = videos[current];

  const goToVideo = index => {
    if (index >= 0 && index < videos.length) {
      setCurrent(index);
    }
  };

  return (
    <section
      id="VideoHighlight"
      className="bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] py-20 px-6 lg:mt-0 mt-[-5px]"
    >
      <div className="max-w-5xl mx-auto text-center mt-[-60px] lg:mt-0">
        <h2 className="text-2xl lg:text-4xl font-bold text-[#6A1B1A] mb-12">Video Highlights</h2>

        {/* YouTube Player */}
        <div className="relative aspect-video mb-6 rounded-tl-[50px] rounded-br-[50px] overflow-hidden border-4 border-[#D4AF37] shadow-lg">
          <iframe
            src={`https://www.youtube.com/embed/${currentVideo.videoId}?rel=0&autoplay=1`}
            title={currentVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Video Title */}
        <Link
          href={`/videos/${currentVideo.metaTitle}`}
          className="block text-2xl font-semibold text-[#8D6E63] hover:underline mb-4"
        >
          {currentVideo.title}
        </Link>

        {/* Pagination Controls */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
          {/* Prev */}
          <button
            onClick={() => goToVideo(current - 1)}
            disabled={current === 0}
            className="px-4 py-2 bg-[#D4AF37] text-white rounded-full shadow hover:bg-[#b5952f] disabled:opacity-50"
          >
            ◀
          </button>

          {/* Page Numbers */}
          {videos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToVideo(idx)}
              className={`w-10 h-10 rounded-full font-semibold ${
                idx === current
                  ? 'bg-[#D4AF37] text-white'
                  : 'bg-white border border-[#D4AF37] text-[#D4AF37] hover:bg-[#FFF3E0]'
              }`}
            >
              {idx + 1}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => goToVideo(current + 1)}
            disabled={current === videos.length - 1}
            className="px-4 py-2 bg-[#D4AF37] text-white rounded-full shadow hover:bg-[#b5952f] disabled:opacity-50"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
