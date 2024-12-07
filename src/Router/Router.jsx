import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

import Login from "../pages/Login";
import Register from "../pages/Register";

import LetsLearn from "../pages/LetsLearn";
import Lesson from "../pages/Lesson";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import Tutorials from "../pages/Tutorials.JSX";
import AboutUs from "../pages/AboutUs";
import ForgotPassword from "../pages/ForgotPassword";
import NotFoundPage from "../pages/NotFoundPage";





const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/learning",
    element: <LetsLearn></LetsLearn>,
  },
  {
    path: '/lesson/:lesson_no',
    element:<PrivateRoute>
      <Lesson></Lesson>
    </PrivateRoute>,
  },
{
  path: "/tutorials",
  element: <PrivateRoute>
    <Tutorials></Tutorials>
  </PrivateRoute>,
},  

{
  path: "/about",
  element: <AboutUs></AboutUs>,
},
{
  path: "/login",
  element: <Login></Login>
},
{
   path: "/forgot-password",
   element: <ForgotPassword></ForgotPassword>,
},
{
  path: '/register',
  element: <Register></Register>
},
{
  path: "/my-profile",
  element: <MyProfile></MyProfile>
},
{
   path: "/update-profile",
   element: <UpdateProfile></UpdateProfile>,
},
{
  path: "*",
  element: <NotFoundPage></NotFoundPage>,
}

])





export default Router;