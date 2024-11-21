import img from "../assets/landingimg.png"
import AboutCard from "../components/AboutCard";

const About = () => {
  return (
    <div className="bg-white p-4 mb-0">
        <div className="flex flex-col items-center justify-between my-5">
      <div className="bg-[#17BC3D] p-3 text-white rounded-3xl w-48 text-center text-lg">
        <p>About</p>
      </div>
      </div>

      <div className="lg:flex justify-between">
        <img src={img} alt="" />
        <div className="flex flex-col my-4">
          <p className="text-2xl md:my-3 md:leading-relaxed">At Yitegere, we’re revolutionizing the way people travel in Rwanda. Our platform is built to simplify transportation by providing a seamless, efficient, and reliable way to book and manage your journeys. Whether you’re commuting for work, traveling for leisure, or managing corporate transportation, Yitegere is here to make every trip easier and more enjoyable.</p>
          <div className="md:flex gap-6">
          <AboutCard title="Our Vision" info="To become the leading smart transportation solution in Rwanda, connecting people to reliable and eco-friendly travel options." bg="bg-green-600" color="text-white" rotate="-rotate-12" />
          <AboutCard title="Our Mission" info="To empower travelers by delivering:Real-time tracking for convenience.Hassle-free booking experiences, Multiple secure payment options." bg="text-white" color="text-black" rotate="rotate-12" />
          </div>
        </div>
    
        </div>
    </div>
  )
}

export default About
