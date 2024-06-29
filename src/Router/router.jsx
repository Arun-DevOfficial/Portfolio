import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import Dashboard from "../Page/Dashboard";
import About from "../Page/About";
import Resume from "../Page/Resume";
import Portfolio from "../Page/Portfolio";
import Blog from "../Page/Blog";
import Contact from "../Page/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/about",
            element: <About />,
          },
          {
            path: "/dashboard/resume",
            element: <Resume />,
          },
          {
            path: "/dashboard/portfolio",
            element: <Portfolio />,
          },
          {
            path: "/dashboard/blog",
            element: <Blog />,
          },
          {
            path: "/dashboard/contact",
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);

export default router;
