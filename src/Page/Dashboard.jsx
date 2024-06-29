import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <div className="relative container-fluid bg-[#1e1e1f] w-full max-w-4xl rounded-2xl border border-white/20 shadow-md text-white p-4 sm:p-6 md:p-8 overflow-hidden">
        <header className="absolute top-0 right-0 w-7/12 p-4 bg-[#28282a] rounded-bl-3xl border-b border-l border-jet">
          <Navbar />
        </header>
        <Outlet />
      </div>
    </>
  );
}
