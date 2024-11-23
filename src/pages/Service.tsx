import ServiceCard from "../components/ServiceCard";

const Service = () => {
  return (
    <div className="bg-white p-4">
      <div className="flex flex-col items-center justify-between">
        <div className="bg-[#17BC3D] p-3 text-white rounded-3xl w-48 text-center text-lg mt-8">
          <p>Services</p>
        </div>
        <div className="my-5 text-center">
          <h3 className="text-4xl md:my-7">
            Get more information about what we provide to our clients
          </h3>
          <p className="my-4 text-center text-xl ">
            MoveSmart offers reliable and efficient moving services for both
            residential and commercial needs. <br /> From packing and loading to
            transportation and storage, we ensure a seamless experience. <br />{" "}
            Trust us to handle your move with care, professionalism, and
            attention to detail.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:ml-12 gap-y-6 px-4">
        <ServiceCard
          heading="Ticket Booking"
          info="Book tickets for buses or other transport options quickly and easily through our platform."
        />
        <ServiceCard
          heading="Real-Time Bus Tracking"
          info="Track buses in real-time for a seamless travel experience."
        />
        <ServiceCard
          heading="Schedule Management"
          info="Manage your schedules effortlessly with our tools."
        />
        <ServiceCard
          heading="Customer Support"
          info="Get round-the-clock assistance for all your transport needs."
        />
        <ServiceCard
          heading="Affordable Pricing"
          info="Enjoy affordable travel options tailored to your budget."
        />
        <ServiceCard
          heading="Flexible Scheduling"
          info="Choose from a variety of schedules that suit your timing."
        />
      </div>
    </div>
  );
};

export default Service;
