// import { useNavigate } from "react-router-dom";
// import landingImg1 from "../assets/books-bg1.jpg";
// import landingImg2 from "../assets/books-bg2.jpg";
// import landingImg3 from "../assets/books-bg3.jpg";
// import landingImg4 from "../assets/books-bg4.avif";
// import { FaLongArrowAltRight } from "react-icons/fa";

// const LandingPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div
//       className="relative w-full h-screen bg-fixed bg-center bg-cover"
//       style={{ backgroundImage: `url(${landingImg1})` }}
//     >
//       {/* Overlay Content */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/60 text-white px-4">
//         <h1 className="font-castoro animate__animated animate__fadeInDown text-4xl md:text-[3.8rem] lg:text-[4.1rem] font-extrabold tracking-widest mb-12">
//           ADAM&apos;S BOOK SHOP
//         </h1>
//         <p className="animate__animated animate__fadeInUp animate__delay-1s text-justify text-lg md:text-xl leading-relaxed mb-12 max-w-3xl">
//           Welcome to Adam&apos;s Book Shop, your gateway to a world of stories,
//           knowledge, and imagination. Dive into a curated selection of books
//           that inspire and educate, from timeless classics to modern-day
//           masterpieces. There&apos;s a book for every mind and every soul.
//         </p>

//         <button
//           className="flex items-center justify-center animate__animated animate__fadeInUp animate__delay-2s mt-8 px-16 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl group"
//           onClick={() => navigate("/")}
//         >
//           Explore
//           <span className="ml-4 transform group-hover:translate-x-3 transition-transform duration-300">
//             <FaLongArrowAltRight className="font-extrabold" />
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import landingImg1 from "../assets/books-bg1.jpg";
import landingImg2 from "../assets/books-bg2.jpg";
import landingImg3 from "../assets/books-bg3.jpg";

const images = [landingImg1, landingImg2, landingImg3];

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-fixed bg-center bg-cover transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/60 text-white px-4">
        <h1 className="font-castoro animate__animated animate__fadeInDown text-4xl md:text-[3.8rem] lg:text-[4.1rem] font-extrabold tracking-widest mb-12">
          ADAM&apos;S BOOK SHOP
        </h1>
        <p className="animate__animated animate__fadeInUp animate__delay-1s text-justify text-lg md:text-xl leading-relaxed mb-12 max-w-3xl">
          Welcome to Adam&apos;s Book Shop, your gateway to a world of stories,
          knowledge, and imagination. Dive into a curated selection of books
          that inspire and educate, from timeless classics to modern-day
          masterpieces. There&apos;s a book for every mind and every soul.
        </p>

        <button
          className="flex items-center justify-center animate__animated animate__fadeInUp animate__delay-2s mt-8 px-16 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl group"
          onClick={() => navigate("/")}
        >
          Explore
          <span className="ml-4 transform group-hover:translate-x-3 transition-transform duration-300">
            <FaLongArrowAltRight className="font-extrabold" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
