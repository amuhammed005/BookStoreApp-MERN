import news1 from "../../assets/news/news-1.png";
import news2 from "../../assets/news/news-2.png";
import news3 from "../../assets/news/news-3.png";
import news4 from "../../assets/news/news-4.png";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const news = [
  {
    id: 1,
    title: "Global Climate Summit Calls for Urgent Action",
    description:
      "World leaders gather at the Global Climate Summit to discuss urgent strategies to combat climate change, focusing on reducing carbon emissions and fostering renewable energy solutions.",
    image: news1,
  },
  {
    id: 2,
    title: "Breakthrough in AI Technology Announced",
    description:
      "A major breakthrough in artificial intelligence has been announced by researchers, with new advancements promising to revolutionize industries from healthcare to finance.",
    image: news2,
  },
  {
    id: 3,
    title: "New Space Mission Aims to Explore Distant Galaxies",
    description:
      "NASA has unveiled plans for a new space mission that will aim to explore distant galaxies, with hopes of uncovering insights into the origins of the universe.",
    image: news3,
  },
  {
    id: 4,
    title: "Stock Markets Reach Record Highs Amid Economic Recovery",
    description:
      "Global stock markets have reached record highs as signs of economic recovery continue to emerge following the challenges posed by the global pandemic.",
    image: news4,
  },
  {
    id: 5,
    title: "Innovative New Smartphone Released by Leading Tech Company",
    description:
      "A leading tech company has released its latest smartphone model, featuring cutting-edge technology, improved battery life, and a sleek new design.",
    image: news2,
  },
];

const News = () => {
  return (
    <div className="py-16">
      <h1 className="text-3xl font-semibold mb-8">Latest News</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        loop={true} // Infinite loop for continuous sliding
        autoplay={{
          delay: 2000, // Time in ms for each slide to stay
          disableOnInteraction: false, // The autoplay won't stop if the user interacts
        }}
        speed={800} // Time for each slide to transition
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]} // Include Autoplay module
        className="mySwiper"
      >
        {news.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-12">
              {/* Content */}
              <div>
                <Link to="/">
                  <h3 className="text-lg font-medium hover:text-blue-500 mb-5">
                    {item.title}
                  </h3>
                </Link>
                <div className="bg-primary h-1 w-28 mb-4"></div>
                <p className="mb-6">{item.description}</p>
              </div>

              <div className="flex-shrink-0">
                <img
                  className="w-full object-cover"
                  src={item.image}
                  alt="NewsCardImg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;

// import news1 from "../../assets/news/news-1.png";
// import news2 from "../../assets/news/news-2.png";
// import news3 from "../../assets/news/news-3.png";
// import news4 from "../../assets/news/news-4.png";

// import { Link } from "react-router-dom";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Pagination, Navigation } from "swiper/modules";

// const news = [
//   {
//     id: 1,
//     title: "Global Climate Summit Calls for Urgent Action",
//     description:
//       "World leaders gather at the Global Climate Summit to discuss urgent strategies to combat climate change, focusing on reducing carbon emissions and fostering renewable energy solutions.",
//     image: news1,
//   },
//   {
//     id: 2,
//     title: "Breakthrough in AI Technology Announced",
//     description:
//       "A major breakthrough in artificial intelligence has been announced by researchers, with new advancements promising to revolutionize industries from healthcare to finance.",
//     image: news2,
//   },
//   {
//     id: 3,
//     title: "New Space Mission Aims to Explore Distant Galaxies",
//     description:
//       "NASA has unveiled plans for a new space mission that will aim to explore distant galaxies, with hopes of uncovering insights into the origins of the universe.",
//     image: news3,
//   },
//   {
//     id: 4,
//     title: "Stock Markets Reach Record Highs Amid Economic Recovery",
//     description:
//       "Global stock markets have reached record highs as signs of economic recovery continue to emerge following the challenges posed by the global pandemic.",
//     image: news4,
//   },
//   {
//     id: 5,
//     title: "Innovative New Smartphone Released by Leading Tech Company",
//     description:
//       "A leading tech company has released its latest smartphone model, featuring cutting-edge technology, improved battery life, and a sleek new design.",
//     image: news2,
//   },
// ];

// const News = () => {
//   return (
//     <div className="py-16">
//       <h1 className="text-3xl font-semibold mb-8">Latest News</h1>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         navigation={true}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 2,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         {news.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-12">
//               {/* Content */}
//               <div>
//                 <Link to="/">
//                   <h3 className="text-lg font-medium hover:text-blue-500 mb-5">
//                     {item.title}
//                   </h3>
//                 </Link>
//                 <div className="bg-primary h-1 w-28 mb-4"></div>
//                 <p className="mb-6">{item.description}</p>
//               </div>

//               <div className="flex-shrink-0">
//                 <img
//                   className="w-full object-cover "
//                   src={item.image}
//                   alt={item.title}
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default News;
