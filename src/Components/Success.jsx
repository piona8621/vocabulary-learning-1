

// const Success = () => {
//   return (
//     <div>
//       <section class=" bg-gradient-to-tr from-white to-blue-600 py-12">
//   <div class="container mx-auto text-center">
//     <h2 class="text-3xl font-bold text-blue-800 mb-8">Our Achievements</h2>
//     <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
//       <div class="bg-white p-6 rounded-lg shadow-lg">
//         <h3 class="text-4xl text-blue-800 font-bold">
//           <span class="count-up">500</span>
//         </h3>
//         <p>Active Users</p>
//       </div>
//       <div class="bg-white p-6 rounded-lg shadow-lg">
//         <h3 class="text-4xl text-blue-800 font-bold">
//           <span class="count-up">10</span>
//         </h3>
//         <p>Lessons</p>
//       </div>
//       <div class="bg-white p-6 rounded-lg shadow-lg">
//         <h3 class="text-4xl text-blue-800 font-bold">
//           <span class="count-up">200+</span>
//         </h3>
//         <p>Vocabulary Words</p>
//       </div>
//     </div>
//   </div>
// </section>

//     </div>
//   );
// };

// export default Success;    





// import React from "react";
// import CountUp from "react-countup";

// const Success = () => {
//   return (
//     <div data-aos= "fade-up"
//     data-aos-easing="ease-out-cubic"
//     data-aos-duration="1000">
//       <section className="bg-gradient-to-tr from-blue-200 to-blue-600 py-12 mb-10">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold text-blue-800 mb-8">Our Achievements</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-4xl text-blue-800 font-bold">
//                 <CountUp end={500} duration={2} />
//               </h3>
//               <p>Active Users</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-4xl text-blue-800 font-bold">
//                 <CountUp end={10} duration={1} />
//               </h3>
//               <p>Lessons</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-4xl text-blue-800 font-bold">
//                 <CountUp end={200} duration={1} />
//                 +
//               </h3>
//               <p>Vocabulary Words</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Success;



import React from "react";
import CountUp from "react-countup";

const Success = () => {
  return (
    <div   data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
      <section className="bg-gradient-to-tr from-blue-200 to-blue-600 py-12 mb-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 animate__animated animate__fadeInDown animate__infinite	infinite animate__slow">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-4xl text-blue-800 font-bold">
                <CountUp end={500} duration={2} />
              </h3>
              <p>Active Users</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-4xl text-blue-800 font-bold">
                <CountUp end={10} duration={1} />
              </h3>
              <p>Lessons</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-4xl text-blue-800 font-bold">
                <CountUp end={200} duration={1} />
                +
              </h3>
              <p>Vocabulary Words</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;





