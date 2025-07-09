


//     'use client';

// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';
// import { db } from '../../admin/Firebase/config';
// import { collection, getDocs } from 'firebase/firestore';

// export default function VideoDetailsPage() {
//   const [video, setVideo] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { metaTitle } = useParams();

//   useEffect(() => {
//     const fetchVideo = async () => {
//       const snapshot = await getDocs(collection(db, 'videos'));
//       const matched = snapshot.docs
//         .map(doc => ({ id: doc.id, ...doc.data() }))
//         .find(v => v.metaTitle?.toLowerCase() === metaTitle?.toLowerCase());

//       if (matched) {
//         setVideo(matched);
//       }
//       setLoading(false);
//     };

//     fetchVideo();
//   }, [metaTitle]);

//   if (loading) return <p className="text-center py-10">Loading...</p>;
//   if (!video) return <p className="text-center py-10">Video not found.</p>;

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10">
//       <div className="aspect-video mb-6 rounded-lg overflow-hidden shadow-lg">
//         <iframe
//           src={`https://www.youtube.com/embed/${video.videoId}?rel=0&autoplay=1`}
//           title={video.title}
//           className="w-full h-full"
//           allow="autoplay; encrypted-media"
//           allowFullScreen
//         />
//       </div>

//       <h1 className="text-3xl font-bold mb-4 text-[#6A1B1A]">{video.title}</h1>

//       <div className="space-y-2 text-gray-700">
//         <p><strong>Author:</strong> {video.author || 'Unknown'}</p>
//         <p><strong>Date:</strong> {video.publishedDate || 'N/A'}</p>
//         <p><strong>Duration:</strong> {video.duration || 'N/A'}</p>
//         <p><strong>Category:</strong> {video.category || 'N/A'}</p>
//         <p><strong>Description:</strong> {video.description || 'No description available.'}</p>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';
// import { db } from '../../admin/Firebase/config'; // adjusted path
// import { collection, getDocs } from 'firebase/firestore';

// export default function VideoDetailsPage() {
//   const [video, setVideo] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { metaTitle } = useParams();

//   useEffect(() => {
//     const fetchVideo = async () => {
//       const snapshot = await getDocs(collection(db, 'videos'));
//       const matched = snapshot.docs
//         .map(doc => ({ id: doc.id, ...doc.data() }))
//         .find(v => v.metaTitle?.toLowerCase() === metaTitle?.toLowerCase());

//       if (matched) {
//         setVideo(matched);
//       }
//       setLoading(false);
//     };

//     fetchVideo();
//   }, [metaTitle]);

//   if (loading) return <p className="text-center py-10">Loading...</p>;
//   if (!video) return <p className="text-center py-10">Video not found.</p>;

//   return (
//     <div className="max-w-3xl mx-auto px-6 py-12 space-y-6 text-gray-800">
//       {/* Title */}
//       <h1 className="text-4xl font-bold text-[#6A1B1A] text-center">{video.title}</h1>

//       {/* Video */}
//       <div className="aspect-video rounded-lg overflow-hidden shadow-md">
//         <iframe
//           src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
//           title={video.title}
//           className="w-full h-full"
//           allow="autoplay; encrypted-media"
//           allowFullScreen
//         />
//       </div>

//       {/* Info section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div>
//           <p><strong>Date:</strong> {video.publishedDate || 'N/A'}</p>
//         </div>
//         <div>
//           <p><strong>Time:</strong> {video.duration || 'N/A'}</p>
//         </div>
//         <div>
//           <p><strong>Location:</strong> {video.location || 'N/A'}</p>
//         </div>
//         <div>
//           <p><strong>Author:</strong> {video.author || 'Unknown'}</p>
//         </div>
//         <div className="sm:col-span-2">
//           <p><strong>Category:</strong> {video.category || 'N/A'}</p>
//         </div>
//       </div>

//       {/* Description */}
//       <div>
//         <h2 className="text-2xl font-semibold mt-8 mb-2">Description</h2>
//         <p className="leading-relaxed">{video.description || 'No description available.'}</p>
//       </div>
//     </div>
//   );
// }



'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { db } from '../../admin/Firebase/config'; // Adjust path as needed
import { collection, getDocs } from 'firebase/firestore';

export default function VideoDetailsPage() {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const { metaTitle } = useParams();

  useEffect(() => {
    const fetchVideo = async () => {
      const snapshot = await getDocs(collection(db, 'videos'));
      const matched = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .find(v => v.metaTitle?.toLowerCase() === metaTitle?.toLowerCase());

      if (matched) {
        setVideo(matched);
      }
      setLoading(false);
    };

    fetchVideo();
  }, [metaTitle]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!video) return <p className="text-center py-10">Video not found.</p>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-6 text-gray-800">
      {/* Title */}
      <h1 className="text-4xl font-bold text-[#6A1B1A] text-center">{video.title}</h1>

      {/* Video */}
      <div className="aspect-video rounded-lg overflow-hidden shadow-md">
        <iframe
          src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
          title={video.title}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p><strong>Date:</strong> {video.publishedDate || 'N/A'}</p>
        </div>
        <div>
          <p><strong>Time:</strong> {video.duration || 'N/A'}</p>
        </div>
        <div>
          <p><strong>Location:</strong> {video.location || 'N/A'}</p>
        </div>
        <div>
          <p><strong>Author:</strong> {video.author || 'Unknown'}</p>
        </div>
        <div className="sm:col-span-2">
          <p><strong>Category:</strong> {video.category || 'N/A'}</p>
        </div>
      </div>

      {/* Description: Enquiry Details */}
      <div>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Enquiry Details</h2>
        <div className="space-y-2">
          {video.description
            ? video.description.split('\n').map((line, idx) => (
                <p key={idx} className="text-gray-700">{line}</p>
              ))
            : <p className="text-gray-500">No description available.</p>
          }
        </div>
      </div>
    </div>
  );
}
