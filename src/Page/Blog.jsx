import Data from "../Json/Blog.json";

export default function Blog() {
  return (
    <>
      <section className="flex flex-col gap-5">
        <div>
          <h1 className="font-bold text-4xl">Blog</h1>
          <div className="bg-[#FEC562] h-1 rounded-full w-20 my-3"></div>
        </div>
        {/* Blog content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Data.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e1e1f] rounded-xl shadow-lg overflow-hidden border border-jet"
            >
              <div className="relative">
                <img
                  src={item.blog_image}
                  alt={item.blog_title}
                  className="w-full h-64 object-cover transition-transform transform hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h1 className="font-medium text-xl mb-2 text-white transition-colors group-hover:text-orange-500">
                  {item.blog_title}
                </h1>
                <p className="text-sm text-gray-400 mb-4">{item.blog_date}</p>
                <p className="text-gray-300">{item.blog_description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
