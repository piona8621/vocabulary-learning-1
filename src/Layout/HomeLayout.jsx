import { Outlet } from "react-router-dom";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import About from "../Components/About";
import Success from "../Components/Success";
import FeaturedLessons from "../Components/FeaturedLessons";
import ProgressSection from "../Components/ProgressSection";
import { Helmet } from "react-helmet-async";





const HomeLayout = () => {
  return (
    <div className="">
      <Helmet>
        <title>Lingo Bingo | Home</title>
      </Helmet>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Success></Success>
      <FeaturedLessons></FeaturedLessons>
      <ProgressSection></ProgressSection>
      

      
        <Outlet></Outlet>
      
   <Footer></Footer>
    </div>
    
  );
};

export default HomeLayout;