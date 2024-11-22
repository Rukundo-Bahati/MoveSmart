import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#17BC3D] p-4 text-white text-center">
      <h1 className="font-bold text-4xl my-4">
        Subscribe to Get Special Price
      </h1>
      <p className="text-center my-5 text-xl">
        Don’t wanna miss something? Subscribe right now and get <br /> special
        promotion and monthly newsletter
      </p>

      <div className="p-3 bg-white rounded-md border border-slate-400 my-10 text-black flex items-center justify-between max-w-xl mx-auto">
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          className="border-none outline-none flex-grow p-2 text-xl"
          aria-label="Email address"
        />
        <button
          type="button"
          className="bg-[#17BC3D] p-2 rounded-md text-white hover:bg-green-700 duration-300"
        >
          Subscribe
        </button>
      </div>

      <div className="my-4 flex flex-col lg:flex-row items-center justify-between gap-4">
        <h2 className="font-semibold text-2xl">SmartBus</h2>
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
          <Link to={"/"} className="text-xl lg:text-base hover:underline">
            Home
          </Link>
          <Link to={"/services"} className="text-sm lg:text-base hover:underline">
            Services
          </Link>
          <Link to={"/about"} className="text-xl lg:text-base hover:underline">
            About Us
          </Link>
          <Link to={"/help"} className="text-sm lg:text-base hover:underline">
            Help
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={40} className="text-blue-500" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={40} className="text-red-600" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={40} />
          </a>
        </div>
      </div>

      {/* horizontal line */}
      <div className="border-t border-dark mb-4"></div>
      <p className="text-center m-4">copyright by S.Bus 2024 </p>
    </div>
  );
};

export default Footer;
