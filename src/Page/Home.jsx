import { Outlet } from "react-router-dom";
import Profile from "../Components/Profile";

export default function Home() {
  return (
    <>
      <section className="bg-[#121212] min-h-screen">
        <div className="flex gap-7 justify-center items-center min-h-screen">
          <Profile />
          <Outlet />
        </div>
      </section>
    </>
  );
}
