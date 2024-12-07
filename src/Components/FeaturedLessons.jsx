
// import eng from '../assets/learning.avif';
// import france from '../assets/Learn-French.webp';
// import spanish from '../assets/spanish.jpg';
// const FeaturedLessons = () => {
//   return (
//     <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-10' data-aos= "fade-up"
//     data-aos-easing="ease-out-cubic"
//     data-aos-duration="2000" >
//       {/* 1st one */}
//       <div className="card bg-gradient-to-tr from-white to-blue-600  shadow-xl">
//   <figure className="px-10 pt-10">
//     <img
//       src={eng}
//       alt="Shoes"
//       className="rounded-xl" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">Basic English Words</h2>
    
//     <div className="card-actions">
//       <button className="btn btn-primary">Learn More</button>
//     </div>
//   </div>
// </div>   
// {/* 2nd one */}

// <div className="card   bg-gradient-to-tr from-white to-blue-600  shadow-xl">
//   <figure className="px-10 pt-10">
//     <img
//       src={france}
//       alt="Shoes"
//       className="rounded-xl" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">Basic English Words</h2>
    
//     <div className="card-actions">
//       <button className="btn btn-primary">Learn More</button>
//     </div>
//   </div>
// </div>   

// {/* 3rd one */}

// <div className="card   bg-gradient-to-tr from-white to-blue-600  shadow-xl">
//   <figure className="px-10 pt-10">
//     <img
//       src={spanish}
//       alt="Shoes"
//       className="rounded-xl" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">Spanish Daily Expressions</h2>
    
//     <div className="card-actions">
//       <button className="btn btn-primary">Learn More</button>
//     </div>
//   </div>
// </div>   
//     </div>
//   );
// };

// export default FeaturedLessons;






import React from 'react';
import france from '../assets/Learn-French.webp';
import spanish from '../assets/spanish.jpg';

const FeaturedLessons = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 mt-10"  data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" >
      {/* 1st Lesson */}
      <div className="card  bg-gradient-to-tr from-white to-blue-600 shadow-xl animate__animated animate__fadeInLeft animate__infinite	infinite animate__slow ">
        <figure className="px-10 pt-10">
          <img
            src={france}
            alt="Basic English Words"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title">Basic English Words</h2>
          <div className="card-actions">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* 2nd Lesson */}
      <div className="card bg-gradient-to-tr from-white to-blue-600 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={france}
            alt="Learn French"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title">Learn French</h2>
          <div className="card-actions">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* 3rd Lesson */}
      <div className="card bg-gradient-to-tr from-white to-blue-600 shadow-xl animate__animated animate__fadeInRight animate__infinite	infinite animate__slow">
        <figure className="px-10 pt-10">
          <img
            src={spanish}
            alt="Spanish Daily Expressions"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title">Spanish Daily Expressions</h2>
          <div className="card-actions">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedLessons;
