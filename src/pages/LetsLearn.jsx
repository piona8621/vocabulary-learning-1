
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Components/Navbar";

// const LetsLearn = () => {
//   const navigate = useNavigate();

//   const lessons = Array.from({ length: 10 }, (_, index) => `Lesson-${index + 1}`);

//   return (
//     <>
//     <Navbar></Navbar>
//     <div className="container mx-auto py-10">
      
//       <h1 className="text-4xl font-bold text-center mb-10">Let’s Learn</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
//         {lessons.map((lesson, index) => (
//           <div
//             key={index}
//             onClick={() => navigate(`/lesson/${index + 1}`)}
//             className="p-6 bg-blue-100 rounded-lg shadow-lg text-center cursor-pointer hover:bg-blue-200 transition duration-300"
//           >
//             <h2 className="text-xl font-semibold">{lesson}</h2>
//           </div>
//         ))}
//       </div>

//       <div className="mb-10">
//         <h2 className="text-3xl font-semibold text-center mb-6">Learn the Alphabet</h2>
//         <div className="flex justify-center">
//           <iframe
//             width="560"
//             height="315"
//             src="https://www.youtube.com/embed/h277lHqiFr4"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <button
//           onClick={() => navigate("/tutorials")}
//           className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
//         >
//           View More
//         </button>
//       </div>
//     </div>
  
//   </>
//   );
// };


// export default LetsLearn;





// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Components/Navbar";

// const LetsLearn = () => {
//   const navigate = useNavigate();

//   const lessons = Array.from({ length: 10 }, (_, index) => `Lesson-${index + 1}`);

//   return (
//     <>
//       <Navbar />

//       <div className="container mx-auto py-10 px-4">
//         <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">Let’s Learn</h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
//           {lessons.map((lesson, index) => (
//             <div
//               key={index}
//               onClick={() => navigate(`/lesson/${index + 1}`)}
//               className="p-6 bg-blue-100 rounded-lg shadow-lg text-center cursor-pointer hover:bg-blue-200 transition duration-300"
//             >
//               <h2 className="text-lg sm:text-xl font-semibold">{lesson}</h2>
//             </div>
//           ))}
//         </div>

//         <div className="mb-10">
//           <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Learn the Alphabet</h2>
//           <div className="flex justify-center">
//             <div className="w-full max-w-[560px] relative pb-[56.25%] h-0 overflow-hidden">
//               <iframe
//                 className="absolute top-0 left-0 w-full h-full"
//                 src="https://www.youtube.com/embed/h277lHqiFr4"
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center">
//           <button
//             onClick={() => navigate("/tutorials")}
//             className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
//           >
//             View More
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LetsLearn;




import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Helmet } from "react-helmet-async";

const LetsLearn = () => {
  const navigate = useNavigate();

  const lessons = Array.from({ length: 10 }, (_, index) => `Lesson-${index + 1}`);

  return (
    <>
      <Navbar />

      <div className="container mx-auto py-10 px-4">
        <Helmet>
          <title>Lingo Bingo | Let's Learn</title>
        </Helmet>
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">Let’s Learn</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
          {lessons.map((lesson, index) => (
            <div
              key={index}
              onClick={() => navigate(`/lesson/${index + 1}`)}
              className="p-6 bg-blue-100 rounded-lg shadow-lg text-center cursor-pointer hover:bg-blue-200 transition duration-300"
            >
              <h2 className="text-lg sm:text-xl font-semibold">{lesson}</h2>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Learn the Alphabet</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-xl aspect-w-16 aspect-h-9">
              <iframe
                className=" w-full lg:h-[300px] rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/h277lHqiFr4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate("/tutorials")}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default LetsLearn;
