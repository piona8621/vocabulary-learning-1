import React from 'react';
import image from'../assets/undraw_learning_sketching_nd4f.svg';
import image1 from '../assets/khowledge.svg';
import image2 from '../assets/tutorial.svg'
import image3 from '../assets/englishsvg.svg'
import Marquee from 'react-fast-marquee';
const Banner = () => {
  return (
    <div >
    <div    className="carousel mx-auto mt-10 animate__animated animate__fadeInRight">
  <div id="item1" className="carousel-item w-full">
    <img
      src={image}
      className="mx-auto" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src={image1}
      className="mx-auto" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src={image2}
      className="mx-auto" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src={image3}
      className="mx-auto" />
  </div>
</div>

</div>
  );
  
};

export default Banner;














