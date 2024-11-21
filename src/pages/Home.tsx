import { FaSackDollar, FaUsers } from "react-icons/fa6";
import img from "../assets/landingimg.png";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Testimonial from "./Testimonial";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import FrequentlyAs from "./FrequentlyAs";
import Mobile from "../components/Mobile";
import Footer from "./Footer";

const Home = () => {

  const countersData = [
    {
      icon: <FaUsers size={50} color="blue" />,
      heading: "2,000,000+",
      text: "happy and collaborated companies that we worked with",
    },
    {
      icon: <BsFillBookmarkCheckFill size={50} color="orange" />,
      heading: "4.8/5+",
      text: "average satisfaction rating from 5,000+ reviews on G2, Capterra, Trustpilot & more.",
    },
    {
      icon: <FaSackDollar size={50} color="green" />,
      heading: "10+ million",
      text: "it helped more than 10 million transporters allover the country",
    },
  ];

  const testimonials = [
    {
      name: "John Allendane",
      review: "I love how it is very attractive for all companies for both the big companies and also small companies which make it widely used",
      rating: 5,
      role: "Alx founder",
      imageUrl: "https://picsum.photos/seed/picsum/200/300"
    },
    {
      name: "Lisa Batitto",
      review: "I’m having a lot of work and care with this yiteg ere which makes it very intuitive for me and daily workers.....",
      rating: 4,
      role: "Hinga Founder and coordinator",
      imageUrl: "https://picsum.photos/seed/picsum/200/300"
    },
    {
      name: "Nicolai Grut",
      review:"I’m having a lot of work and care with this yiteg ere which makes it very intuitive for me and daily workers.....",
      rating: 4,
      role: "Accountant at Umurava",
      imageUrl: "https://picsum.photos/seed/picsum/200/300"
    },
    // Add more testimonials as needed
  ];
  

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
    <Contact />
    <Testimonial counters={countersData} testimonials={testimonials} />
    <FrequentlyAs />
    <Mobile />
    <Footer />
    </div>
  );
};

export default Home;
