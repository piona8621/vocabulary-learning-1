// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Tutorials = () => {
//   const navigate = useNavigate();

//   // Example YouTube video links
//   const videos = [
//     "https://www.youtube.com/embed/your-video-id-1",
//     "https://www.youtube.com/embed/your-video-id-2",
//     "https://www.youtube.com/embed/your-video-id-3",
//     "https://www.youtube.com/embed/your-video-id-4",
//     "https://www.youtube.com/embed/your-video-id-5",
//     "https://www.youtube.com/embed/your-video-id-6",
//   ];

//   return (
//     <div className="container mx-auto py-10">
//       {/* Page Title */}
//       <h1 className="text-4xl font-bold text-center mb-8">Tutorials</h1>

//       {/* YouTube Videos Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//         {videos.map((video, index) => (
//           <div key={index} className="aspect-w-16 aspect-h-9">
//             <iframe
//               src={video}
//               title={`Tutorial Video ${index + 1}`}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="w-full h-full rounded-lg shadow-md"
//             ></iframe>
//           </div>
//         ))}
//       </div>

//       {/* Navigate to Lessons Button */}
//       <div className="flex justify-center">
//         <button
//           onClick={() => navigate("/learning")}
//           className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
//         >
//           Learn Vocabularies
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Tutorials;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Components/Navbar";

// const Tutorials = () => {
//   const navigate = useNavigate();

//   // YouTube video links (shortened links converted to embed format)
//   const videos = [
//     "https://youtu.be/eZBP6il7uJE?si=uStk3hErzWnCZg69",
//     "https://youtu.be/0076Tmrm9P8?si=9zuoHlhoCes6f1xy",
//     "https://youtu.be/dzA7nL6cicY?si=hFjQsa65vxzckK3s",
//     "https://youtu.be/98pM_i_sklo?si=2yMF23-fOvLomVQV",
//     "https://youtu.be/b10C1L747pE?si=Sd3-PYEbNAp0B5Xg",
//     "https://youtu.be/V425hnGYuV0?si=a56z5siN-lQRDYep",
//   ];

//   // Convert shortened YouTube links to embed format
//   const convertToEmbedLink = (url) => {
//     const videoId = url.split("youtu.be/")[1].split("?")[0];
//     return `https://www.youtube.com/embed/${videoId}`;
//   };

//   return (
//     <>
//     <Navbar></Navbar>
//     <div className="container mx-auto py-10">
//       {/* Page Title */}
//       <h1 className="text-4xl font-bold text-center mb-8">Tutorials</h1>

//       {/* YouTube Videos Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//         {videos.map((video, index) => (
//           <div key={index} className="relative w-full pb-[56.25%] h-0">
//             <iframe
//               src={convertToEmbedLink(video)} // Convert link to embed format
//               title={`Tutorial Video ${index + 1}`}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
//             ></iframe>
//           </div>
//         ))}
//       </div>

//       {/* Navigate to Lessons Button */}
//       <div className="flex justify-center">
//         <button
//           onClick={() => navigate("/learning")}
//           className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
//         >
//           Learn Vocabularies
//         </button>
//       </div>
//     </div>
//   </>
//   );
// };

// export default Tutorials;





import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Helmet } from "react-helmet-async";

const Tutorials = () => {
  const navigate = useNavigate();

  // YouTube video links (shortened links converted to embed format)
  const videos = [
    "https://youtu.be/eZBP6il7uJE?si=uStk3hErzWnCZg69",
    "https://youtu.be/0076Tmrm9P8?si=9zuoHlhoCes6f1xy",
    "https://youtu.be/dzA7nL6cicY?si=hFjQsa65vxzckK3s",
    "https://youtu.be/98pM_i_sklo?si=2yMF23-fOvLomVQV",
    "https://youtu.be/b10C1L747pE?si=Sd3-PYEbNAp0B5Xg",
    "https://youtu.be/V425hnGYuV0?si=a56z5siN-lQRDYep",
    "https://youtu.be/gDArRgca88E?si=9BwViNuTZxaoBTa1",
    "https://youtu.be/pZR5Ox8duog?si=W6yvB76jfuKYXNMb",
  ];

  // Convert shortened YouTube links to embed format
  const convertToEmbedLink = (url) => {
    const videoId = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <>
      <Navbar />
      <Helmet>
        <title>Lingo Bingo | Tutorials</title>
      </Helmet>
      <div className="container mx-auto py-10 px-4">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Tutorials</h1>

        {/* YouTube Videos Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {videos.map((video, index) => (
            <div key={index} className="relative w-full pb-[56.25%] h-0">
              <iframe
                src={convertToEmbedLink(video)} // Convert link to embed format
                title={`Tutorial Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
              ></iframe>
            </div>
          ))}
        </div>

        {/* Navigate to Lessons Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate("/learning")}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
          >
            Learn Vocabularies
          </button>
        </div>
      </div>
    </>
  );
};

export default Tutorials;




