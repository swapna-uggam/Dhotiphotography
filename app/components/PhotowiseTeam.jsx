

// import Image from 'next/image';

// const team = [
//   {
//     name: 'Ava Thompson',
//     experience: '14 Years Experience',
//     photo: '/cam1.jpg',
//   },
//   {
//     name: 'Liam Carter',
//     experience: '5 Years Experience',
//     photo: '/cam2.jpg',
//   },
//   {
//     name: 'Sophia Lee',
//     experience: '6 Years Experience',
//     photo: '/cam3.jpg',
//   },
//   {
//     name: 'Noah Patel',
//     experience: '10 Years Experience',
//     photo: '/cam4.jpg',
//   },
//   {
//     name: 'Isla Martinez',
//     experience: '16 Years Experience',
//     photo: '/cam5.jpg',
//   },
// ];

// export default function PhotowiseTeam() {
//   return (
//     <section className="py-20 bg-gray-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 text-center ">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-gray-800">
//           Meet the Photowise Team
//         </h2>

//         <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
//           {team.map((member, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center space-y-2"
//             >
//               <div className="w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 lg:w-36 lg:h-48 xl:w-40 xl:h-52 overflow-hidden rounded-full border-4 border-gray-200 shadow-lg">
//                 <Image
//                   src={member.photo}
//                   alt={member.name}
//                   width={160}
//                   height={200}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//               <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
//                 {member.name}
//               </h3>
//               <p className="text-xs sm:text-sm md:text-base text-gray-500">
//                 {member.experience}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';
import Image from 'next/image';

const team = [
  {
    name: 'Ava Thompson',
    experience: '14 Years Experience',
    photo: '/cam1.jpg',
  },
  {
    name: 'Liam Carter',
    experience: '5 Years Experience',
    photo: '/cam2.jpg',
  },
  {
    name: 'Sophia Lee',
    experience: '6 Years Experience',
    photo: '/cam3.jpg',
  },
  {
    name: 'Noah Patel',
    experience: '10 Years Experience',
    photo: '/cam4.jpg',
  },
  {
    name: 'Isla Martinez',
    experience: '16 Years Experience',
    photo: '/cam5.jpg',
  },
];

export default function PhotowiseTeam() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center ">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-gray-800">
          Meet the Photowise Team
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="relative w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 lg:w-36 lg:h-48 xl:w-40 xl:h-52 overflow-hidden rounded-full border-4 border-gray-200 shadow-lg">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 160px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-500">
                {member.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
