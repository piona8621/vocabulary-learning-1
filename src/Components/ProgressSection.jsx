// function ProgressSection() {
//   return (
//     <section className="bg-gradient-to-tr from-blue-400 to-blue-300 py-16 mb-10" data-aos= "fade-left"
//     data-aos-easing="ease-out-cubic"
//     data-aos-duration="2000">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold mb-8">Track Your Progress</h2>
//         <p className="text-lg text-gray-700 mb-6">
//           Earn badges and track your learning milestones as you progress.
//         </p>
//         <div className="flex justify-center space-x-6       ">
//           <div className=" bg-gradient-to-tr from-white to-blue-600 p-8 rounded-lg  animate__animated animate__fadeInLeft animate__infinite	infinite animate__slow ">
//             <h3 className="text-2xl font-bold bg-gradient-to-tr from-white to-blue-200 rounded-lg  ">Beginner Badge</h3>
//           </div>
//           <div className=" bg-gradient-to-tr from-white to-blue-600 p-8 rounded-lg animate__animated animate__fadeInDown animate__infinite	infinite animate__slow">
//             <h3 className="text-2xl font-bold bg-gradient-to-tr from-white to-blue-200 rounded-lg">Intermediate Badge</h3>
//           </div>
//           <div className=" bg-gradient-to-tr from-white to-blue-600 p-8 rounded-lg  animate__animated animate__fadeInRight animate__infinite	infinite animate__slow">
//             <h3 className="text-2xl font-bold bg-gradient-to-tr from-white to-blue-200 rounded-lg">Expert Badge</h3>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProgressSection;



function ProgressSection() {
  return (
    <section
      className="bg-gradient-to-tr from-blue-400 to-blue-300 py-16 mb-10"
      data-aos="fade-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Track Your Progress</h2>
        <p className="text-lg text-gray-700 mb-6">
          Earn badges and track your learning milestones as you progress.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-tr from-white to-blue-600 p-8 rounded-lg animate__animated animate__fadeInLeft animate__infinite animate__slow">
            <h3 className="text-2xl font-bold bg-gradient-to-tr from-white to-blue-200 rounded-lg">
              Beginner Badge
            </h3>
          </div>
          <div className="bg-gradient-to-tr from-white to-blue-600 p-8 rounded-lg animate__animated animate__fadeInDown animate__infinite animate__slow">
            <h3 className="text-2xl font-bold bg-gradient-to-tr from-white to-blue-200 rounded-lg">
              Intermediate Badge
            </h3>
          </div>
          <div className="bg-gradient-to-tr from-white to-blue-600 p-8 rounded-lg animate__animated animate__fadeInRight animate__infinite animate__slow">
            <h3 className="text-2xl font-bold bg-gradient-to-tr from-white to-blue-200 rounded-lg">
              Expert Badge
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgressSection;

