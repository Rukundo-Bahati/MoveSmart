import img from "../assets/landingimg.png";
import About from "./About";
import Service from "./Service";

const Home = () => {
  return (
    <div>
    <div className="bg-[#17BC3D] px-5 flex items-center">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-52 w-full">
        {/* Text Section */}
        <div className="text-white max-w-lg flex flex-col justify-between h-[55vh] md:mt-20">
          <div>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Discover Effortless Travel with Yitegere!
            </h3>
            <p className="text-xl md:text-2xl">
              Book, track, and manage your transportation needs in one seamless
              platform.
            </p>
          </div>
          <button className="rounded-3xl bg-white text-[#17BC3D] px-6 py-3 mt-auto w-full md:w-1/2 hover:shadow-md hover:shadow-white duration-300">
            Get Our Mobile App
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-auto">
          <img src={img} alt="Landing" className="w-full md:w-[400px] lg:w-[600px] xl:w-[800px]" />
        </div>
      </div>
    </div>
    <Service />
    <About />
    </div>
  );
};

export default Home;
