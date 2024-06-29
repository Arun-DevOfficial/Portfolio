import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div className="container bg-[#28282a] flex gap-3 justify-evenly">
        <Link
          className={`font-semibold ${
            currentPath === "/dashboard/about" ? "text-[#fec562]" : ""
          } hover:text-light-gray-70 font-semibold`}
          to="/dashboard/about"
        >
          About
        </Link>
        <Link
          className={`font-semibold ${
            currentPath === "/dashboard/resume" ? "text-[#fec562]" : ""
          } hover:text-light-gray-70 font-semibold`}
          to="/dashboard/resume"
        >
          Resume
        </Link>
        <Link
          className={`font-semibold ${
            currentPath === "/dashboard/portfolio" ? "text-[#fec562]" : ""
          } hover:text-light-gray-70 font-semibold`}
          to="/dashboard/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className={`font-semibold ${
            currentPath === "/dashboard/blog" ? "text-[#fec562]" : ""
          } hover:text-light-gray-70 font-semibold`}
          to="/dashboard/blog"
        >
          Blog
        </Link>
        <Link
          className={`font-semibold ${
            currentPath === "/dashboard/contact" ? "text-[#fec562]" : ""
          } hover:text-light-gray-70 font-semibold`}
          to="/dashboard/contact"
        >
          Contact
        </Link>
      </div>
    </>
  );
}
