

// 'use client';

// import { useEffect, useState } from "react";
// import { HiArrowUp, HiOutlineHome } from "react-icons/hi";

// export default function ScrollToTopButton() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     setIsAnimating(true);
//     setTimeout(() => {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       setIsAnimating(false);
//     }, 150);
//   };

//   return (
//     isVisible && (
//       <div className="fixed bottom-4 right-4 z-50">
//         <button
//           onClick={scrollToTop}
//           aria-label="Scroll to top"
//           className={`flex items-center gap-1
//             bg-gradient-to-r from-blue-600 to-indigo-600 
//             text-white rounded-lg px-3 py-2 shadow-md border border-white
//             transition-all duration-300 hover:scale-105 ${
//               isAnimating ? "translate-y-[-4px]" : ""
//             }`}
//         >
//           <HiArrowUp className="text-base" />
//           <HiOutlineHome className="text-lg" />
//         </button>
//       </div>
//     )
//   );
// }

'use client';

import { useEffect, useState } from "react";
import { HiArrowUp, HiOutlineHome } from "react-icons/hi2";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`
            flex flex-col sm:flex-row items-center justify-center
            bg-gradient-to-br from-pink-500 to-red-500
            text-white rounded-lg
            px-2 py-2 sm:px-3 sm:py-2
            shadow-md border border-white
            animate-pulse
            hover:scale-105 transition-transform duration-300
          `}
        >
          <HiOutlineHome className="text-sm sm:text-base mb-1 sm:mb-0 sm:mr-1" />
          <HiArrowUp className="text-sm sm:text-base" />
        </button>
      </div>
    )
  );
}
