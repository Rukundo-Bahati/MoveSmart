import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-[#17BC3D] p-4">
      <div className="flex gap-2 text-white justify-between items-center px-4 py-2">
        <Link to="/" className="text-white font-bold text-2xl">
          Yitegere
        </Link>
        <Link to="/" className="text-white text-xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
          Home
        </Link>
        <Link to="/service"className="text-white text-xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
          Service
        </Link>
        <Link to="/booking" className="text-white text-xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
          Booking
        </Link>
        <Link to="/about" className="text-white text-xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
          About
        </Link>
        <Link to="/contact" className="text-white text-xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
          Contact
        </Link>

        <a
          href="#_"
          className="relative inline-flex items-center justify-center p-5 w-48 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-green-600 duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
            Get Our App
          </span>
        </a>
      </div>
    </div>
  );
};

export default Nav;
