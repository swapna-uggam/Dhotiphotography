// 'use client';

// import { useEffect, useState } from 'react';
// import { db } from '../Firebase/config';
// import {
//   collection,
//   addDoc,
//   getDocs,
//   deleteDoc,
//   doc,
//   updateDoc,
// } from 'firebase/firestore';

// export default function HeroImagesPage() {
//   const [priority, setPriority] = useState('');
//   const [url, setUrl] = useState('');
//   const [images, setImages] = useState([]);
//   const [editingId, setEditingId] = useState(null);

//   const fetchImages = async () => {
//     const snapshot = await getDocs(collection(db, 'heroImages'));
//     const fetched = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     setImages(fetched.sort((a, b) => a.priority - b.priority));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!url || !priority) return alert('Please fill all fields');
//     try {
//       if (editingId) {
//         await updateDoc(doc(db, 'heroImages', editingId), {
//           url,
//           priority: Number(priority),
//         });
//         setEditingId(null);
//       } else {
//         await addDoc(collection(db, 'heroImages'), {
//           url,
//           priority: Number(priority),
//         });
//       }
//       setUrl('');
//       setPriority('');
//       fetchImages();
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!confirm('Are you sure?')) return;
//     await deleteDoc(doc(db, 'heroImages', id));
//     fetchImages();
//   };

//   const handleEdit = (image) => {
//     setUrl(image.url);
//     setPriority(image.priority);
//     setEditingId(image.id);
//   };

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left Side: Form */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4">
//             {editingId ? 'Edit Hero Image' : 'Add Hero Image'}
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-700 mb-1">Priority</label>
//               <input
//                 type="number"
//                 value={priority}
//                 onChange={(e) => setPriority(e.target.value)}
//                 className="w-full border rounded p-2"
//                 placeholder="e.g., 1"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1">Image URL</label>
//               <input
//                 type="text"
//                 value={url}
//                 onChange={(e) => setUrl(e.target.value)}
//                 className="w-full border rounded p-2"
//                 placeholder="https://example.com/image.jpg"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//             >
//               {editingId ? 'Update Image' : 'Add Image'}
//             </button>
//           </form>
//         </div>

//         {/* Right Side: Images */}
//         <div className="lg:col-span-2">
//           <h2 className="text-2xl font-semibold mb-4">📸 Uploaded Hero Images</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
//             {images.map((image) => (
//               <div
//                 key={image.id}
//                 className="bg-white p-3 rounded shadow-sm border flex flex-col"
//               >
//                 <img
//                   src={image.url}
//                   alt={`Hero ${image.priority}`}
//                   className="w-full h-32 object-cover rounded mb-2"
//                 />
//                 <p className="text-sm text-gray-600 mb-1">
//                   Priority: <span className="font-semibold">{image.priority}</span>
//                 </p>
//                 <div className="flex gap-2 mt-auto">
//                   <button
//                     onClick={() => handleEdit(image)}
//                     className="text-blue-600 hover:underline"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(image.id)}
//                     className="text-red-600 hover:underline"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//             {images.length === 0 && (
//               <p className="text-gray-500 col-span-full">No images uploaded yet.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';
// import { db } from '../Firebase/config';
// import {
//   collection,
//   addDoc,
//   getDocs,
//   deleteDoc,
//   doc,
//   updateDoc,
// } from 'firebase/firestore';

// export default function HeroImagesPage() {
//   const [priority, setPriority] = useState('');
//   const [url, setUrl] = useState('');
//   const [images, setImages] = useState([]);
//   const [editingId, setEditingId] = useState(null);

//   const fetchImages = async () => {
//     try {
//       const snapshot = await getDocs(collection(db, 'heroImages'));
//       const fetched = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setImages(fetched.sort((a, b) => a.priority - b.priority));
//     } catch (error) {
//       console.error('Failed to fetch images:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!url || !priority) return alert('Please fill all fields');
//     try {
//       if (editingId) {
//         await updateDoc(doc(db, 'heroImages', editingId), {
//           url,
//           priority: Number(priority),
//         });
//         setEditingId(null);
//       } else {
//         await addDoc(collection(db, 'heroImages'), {
//           url,
//           priority: Number(priority),
//         });
//       }
//       setUrl('');
//       setPriority('');
//       fetchImages();
//     } catch (error) {
//       console.error('Error saving image:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!confirm('Are you sure you want to delete this image?')) return;
//     try {
//       await deleteDoc(doc(db, 'heroImages', id));
//       fetchImages();
//     } catch (error) {
//       console.error('Error deleting image:', error);
//     }
//   };

//   const handleEdit = (image) => {
//     setUrl(image.url);
//     setPriority(image.priority);
//     setEditingId(image.id);
//   };

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left: Form */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4">
//             {editingId ? 'Edit Hero Image' : 'Add Hero Image'}
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-700 mb-1">Priority</label>
//               <input
//                 type="number"
//                 value={priority}
//                 onChange={(e) => setPriority(e.target.value)}
//                 className="w-full border rounded p-2"
//                 placeholder="e.g., 1"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1">Image URL</label>
//               <input
//                 type="text"
//                 value={url}
//                 onChange={(e) => setUrl(e.target.value)}
//                 className="w-full border rounded p-2"
//                 placeholder="https://example.com/image.jpg"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//             >
//               {editingId ? 'Update Image' : 'Add Image'}
//             </button>
//           </form>
//         </div>

//         {/* Right: Image Cards */}
//         <div className="lg:col-span-2">
//           <h2 className="text-2xl font-semibold mb-4">📸 Uploaded Hero Images</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
//             {images.map((image) => (
//               <div
//                 key={image.id}
//                 className="bg-white p-3 rounded shadow-sm border flex flex-col"
//               >
//                 <img
//                   src={image.url}
//                   alt={`Hero ${image.priority}`}
//                   className="w-full h-32 object-cover rounded mb-2"
//                 />
//                 <p className="text-sm text-gray-600 mb-1">
//                   Priority: <span className="font-semibold">{image.priority}</span>
//                 </p>
//                 <div className="flex gap-2 mt-auto">
//                   <button
//                     onClick={() => handleEdit(image)}
//                     className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm transition"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(image.id)}
//                     className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm transition"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//             {images.length === 0 && (
//               <p className="text-gray-500 col-span-full">No images uploaded yet.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import { db } from '../Firebase/config';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import Image from 'next/image';

export default function HeroImagesPage() {
  const [priority, setPriority] = useState('');
  const [url, setUrl] = useState('');
  const [images, setImages] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Fetch images from Firestore
  const fetchImages = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'heroImages'));
      const fetched = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImages(fetched.sort((a, b) => a.priority - b.priority));
    } catch (error) {
      console.error('Failed to fetch images:', error);
    }
  };

  // Add or Update image
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url || !priority) return alert('Please fill all fields');

    try {
      if (editingId) {
        await updateDoc(doc(db, 'heroImages', editingId), {
          url,
          priority: Number(priority),
        });
        setEditingId(null);
      } else {
        await addDoc(collection(db, 'heroImages'), {
          url,
          priority: Number(priority),
        });
      }
      setUrl('');
      setPriority('');
      fetchImages();
    } catch (error) {
      console.error('Error saving image:', error);
    }
  };

  // Delete image
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this image?')) return;
    try {
      await deleteDoc(doc(db, 'heroImages', id));
      fetchImages();
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  // Edit image
  const handleEdit = (image) => {
    setUrl(image.url);
    setPriority(image.priority);
    setEditingId(image.id);
  };

  // Load images on first render
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            {editingId ? 'Edit Hero Image' : 'Add Hero Image'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Priority</label>
              <input
                type="number"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="e.g., 1"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Image URL</label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              {editingId ? 'Update Image' : 'Add Image'}
            </button>
          </form>
        </div>

        {/* Image Grid Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">📸 Uploaded Hero Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="bg-white p-3 rounded shadow-sm border flex flex-col"
              >
                <Image
                  src={image.url}
                  alt={`Hero ${image.priority}`}
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <p className="text-sm text-gray-600 mb-1">
                  Priority: <span className="font-semibold">{image.priority}</span>
                </p>
                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => handleEdit(image)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(image.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            {images.length === 0 && (
              <p className="text-gray-500 col-span-full">No images uploaded yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
