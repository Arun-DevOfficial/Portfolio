import Data from "../Json/Portfolio.json";

export default function Portfolio() {
  return (
    <>
      <section className="flex flex-col gap-5">
        <div>
          <h1 className="font-bold text-4xl">Portfolio</h1>
          <div className="bg-[#FEC562] h-1 rounded-full w-20 my-3"></div>
        </div>
        {/* <div className="flex gap-4">
          <button className="text-white font-medium text-fs-8 hover:text-light-gray-70">
            All
          </button>
          <button className="text-white font-medium text-fs-8 hover:text-light-gray-70">
            Web Apps
          </button>
          <button className="text-white font-medium text-fs-8 hover:text-light-gray-70">
            Design
          </button>
          <button className="text-white font-medium text-fs-8 hover:text-light-gray-70">
            Applications
          </button>
        </div> */}
        {/* Present of project */}
        <div className="grid grid-cols-3 gap-6">
          {Data.Portfolio.categories.map((item) => (
            <>
              {item.items.map((item, index) => (
                <>
                  <div key={index}>
                    <div className="relative">
                      <img src={item.image_url} className="rounded-xl hover:scale-105 transition-all duration-150" />
                    </div>
                    <div className="p-2 my-2">
                      <h1 className="font-medium">{item.name}</h1>
                      <p className="text-fs-8 text-light-gray-70">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </>
          ))}
        </div>
      </section>
    </>
  );
}
