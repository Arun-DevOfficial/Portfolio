import { Outlet } from "react-router-dom";
import Profile from "../Components/Profile";

export default function Home() {
  return (
    <>
      <section className="bg-[#121212] min-h-screen p-12">
        <div className="flex flex-col lg:flex-row gap-7 justify-center items-start min-h-screen">
          <Profile />
          <Outlet />
        </div>
      </section>
    </>
  );
}
