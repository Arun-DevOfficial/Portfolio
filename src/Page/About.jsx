import Wb from "../assets/images/icon-dev.svg";
import wd from "../assets/images/icon-design.svg";
import ps from "../assets/images/icon-app.svg";
import Fl from "../assets/images/icon-quote.svg";
import ClientOne from "../assets/images/avatar-4.png";
import ClientTwo from "../assets/images/avatar-3.png";
import CompanyOne from "../assets/images/logo-1-color.png";
import CompanyTwo from "../assets/images/logo-2-color.png";
import CompanyThree from "../assets/images/logo-3-color.png";
import CompanyFour from "../assets/images/logo-4-color.png";

export default function About() {
  return (
    <>
      <section className="flex flex-col gap-6">
        <h1 className="font-bold text-4xl">About Me</h1>
        <div className="bg-[#FEC562] h-1 rounded-full w-20"></div>
        <p className="font-medium text-light-gray-70">
          I'm a full-stack developer (MERN) and mentor based in Cuddalore, Tamil
          Nadu. With a passion for creating efficient and visually appealing web
          applications, I specialize in the MERN stack (MongoDB, Express.js,
          React, Node.js). I excel at transforming complex requirements into
          seamless, user-friendly interfaces. Additionally,
        </p>
        <p className="font-medium text-light-gray-70">
          I am dedicated to mentoring aspiring developers, providing guidance
          through code reviews, pair programming, and personalized coaching
          sessions to help them grow in their careers.
        </p>
        {/* Navigate Pages*/}
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-[28px]">What I'm Doing</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#222224] rounded-xl p-4 flex gap-4 items-start border-l border-jet min-w-fit shadow-md">
              <img src={Wb} alt="Web Development Icon" className="w-10 h-10" />
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-[24px]">Web Development</h1>
                <p className="font-medium text-light-gray-70">
                  Modern, high-quality web applications using MERN stack.
                </p>
              </div>
            </div>
            <div className="bg-[#222224] rounded-xl p-4 flex gap-4 items-start border-l border-jet min-w-fit shadow-md">
              <img src={Fl} alt="Tutoring Icon" className="w-10 h-10" />
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-[24px]">Tutoring</h1>
                <p className="font-medium text-light-gray-70">
                  Personalized tutoring to master web development skills.
                </p>
              </div>
            </div>
            <div className="bg-[#222224] rounded-xl p-4 flex gap-4 items-start border-l border-jet min-w-fit shadow-md">
              <img src={ps} alt="Freelancing Icon" className="w-10 h-10" />
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-[24px]">Freelancing</h1>
                <p className="font-medium text-light-gray-70">
                  Professional freelance services for web projects.
                </p>
              </div>
            </div>
            <div className="bg-[#222224] rounded-xl p-4 flex gap-4 items-start border-l border-jet min-w-fit shadow-md">
              <img src={wd} alt="Web Design Icon" className="w-10 h-10" />
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-[24px]">Web Design</h1>
                <p className="font-medium text-light-gray-70">
                  Creating visually appealing and user-friendly interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="flex flex-col gap-10">
          <h1 className="font-bold text-fs-3">Testimonials</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#222224] relative rounded-xl p-7 flex gap-4 items-start border-l border-jet min-w-fit shadow-md text-center">
              <div className="bg-[#373738] border-t border-jet p-2 absolute -top-5 left-10 rounded-xl">
                <img
                  src={ClientOne}
                  alt="Testimonial 1"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-lg font-semibold">Daniel Lewis</h1>
                <p className="text-fs-8 text-light-gray-70 font-medium">
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done.
                </p>
              </div>
            </div>
            <div className="bg-[#222224] relative rounded-xl p-4 flex gap-4 items-start border-l border-jet min-w-fit shadow-md text-center">
              <div className="bg-[#373738] border-t border-jet p-2 absolute -top-5 left-10 rounded-xl">
                <img
                  src={ClientTwo}
                  alt="Testimonial 1"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-lg font-semibold">Jessica Miller</h1>
                <p className="text-fs-8 text-light-gray-70 font-medium">
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Clients */}
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-fs-3">Clients</h1>
          <div className="flex justify-around items-center">
            <img src={CompanyOne} className="w-32"/>
            <img src={CompanyTwo} className="w-32"/>
            <img src={CompanyThree} className="w-32"/>
            <img src={CompanyFour} className="w-32"/>
          </div>
        </div>
      </section>
    </>
  );
}
