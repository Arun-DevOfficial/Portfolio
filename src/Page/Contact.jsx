import { FaTelegramPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      {/* Google Maps iframe */}
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66208.13871516123!2d79.53165441170692!3d11.781937353727047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54af5a3b3e8267%3A0xb41239c6f2ec332f!2sPanruti%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1719671925873!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="rounded-xl"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Contact form */}
      <div className="flex flex-col gap-9">
      <h1 className="text-3xl font-bold">Contact Form</h1>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-transparent border border-jet p-4 rounded-xl font-medium text-gray-800 flex-grow focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="JohnDoe@gmail.com"
            className="bg-transparent border border-jet p-4 rounded-xl font-medium text-gray-800 flex-grow focus:outline-none focus:border-blue-500"
          />
        </div>
        <textarea
          placeholder="Your Message"
          rows="5"
          className="bg-transparent border border-jet p-4 rounded-xl font-medium focus:outline-none resize-none"
        ></textarea>
        <button className="bg-[#1e1e1f] border border-jet shadow-xl flex items-center justify-center hover:bg-[#1e1e1f] text-yellow-500 font-medium py-3 px-6 rounded-xl transition-colors duration-300">
          <FaTelegramPlane className="mr-2" />
          Send Message
        </button>
      </div>
    </div>
  );
}
