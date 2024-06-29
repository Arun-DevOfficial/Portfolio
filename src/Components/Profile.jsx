import {
  MdOutlineMailOutline,
  MdPhone,
  MdCalendarToday,
  MdLocationOn,
} from "react-icons/md";
import Avatar from "../assets/my-avatar.png";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

export default function Profile() {
  return (
    <aside className="bg-[#1e1e1f] max-w-sm rounded-xl border border-white/20 shadow-md text-white p-6 sm:p-8 md:p-10 sticky top-32">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-[#383839] p-[1px] rounded-3xl h-36 w-36">
            <img
              src={Avatar}
              alt="Arun Kumar"
              className="rounded-3xl h-full w-full object-cover cursor-default"
            />
          </div>
          <h1 className="text-2xl font-bold">Arun Kumar</h1>
          <p className="text-sm font-medium bg-[#2b2b2c] rounded-lg px-4 py-2">
            Web Developer
          </p>
        </div>
        <div className="bg-[#2b2b2c] h-[2px] w-11/12"></div>
        <div className="flex flex-col gap-8 w-full">
          <div className="flex items-center gap-4 px-4 w-full">
            <div className="bg-[#202022] rounded-xl shadow-lg p-2 border-l border-jet">
              <MdOutlineMailOutline className="text-2xl text-orange-yellow-crayola/70" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-xs font-medium text-light-gray">Email</p>
              <p className="text-xs text-light-gray-70 my-[2px]">
                dev.arunengineer@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4 w-full">
            <div className="bg-[#202022] rounded-xl shadow-lg p-2 border-l border-jet">
              <MdPhone className="text-2xl text-orange-yellow-crayola/70" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-xs font-medium text-light-gray">Phone</p>
              <p className="text-xs text-light-gray-70 my-[2px]">
                +(91) 6369-546516
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4 w-full">
            <div className="bg-[#202022] rounded-xl shadow-lg p-2 border-l border-jet">
              <MdCalendarToday className="text-2xl text-orange-yellow-crayola/70" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-xs font-medium text-light-gray">Birthday</p>
              <p className="text-xs text-light-gray-70 my-[2px]">
                Mar 25, 2001
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4 w-full">
            <div className="bg-[#202022] rounded-xl shadow-lg p-2 border-l border-jet">
              <MdLocationOn className="text-2xl text-orange-yellow-crayola/70" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-xs font-medium text-light-gray">Location</p>
              <p className="text-xs text-light-gray-70 my-[2px]">
                Sacramento, California, USA
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-3 items-center">
            <FaGithub size={20} className="text-slate-300" />
            <TiSocialLinkedinCircular size={27} className="text-slate-300" />
            <FaFacebook size={20} className="text-slate-300" />
          </div>
        </div>
      </div>
    </aside>
  );
}
