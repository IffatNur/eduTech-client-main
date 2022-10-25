import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CheckOut from "../components/CheckOut/CheckOut";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://edutech-server.vercel.app/courses"),
      },
      {
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`https://edutech-server.vercel.app/courses/${params.id}`),
      },
      {
        path: "/courses/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(`https://edutech-server.vercel.app/courses/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
    ],
  },
]);