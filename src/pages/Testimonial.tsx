import { Swiper, SwiperSlide } from "swiper/react";
import Counter from "../components/Counter";
import TestimonialCard from "../components/TestimonialCard";


interface CounterType {
  icon: JSX.Element;
  heading: string;
  text: string;
}

interface TestimonialType {
  name: string;
  review: string;
  rating: number;
  role: string; // Add role for the person
  imageUrl: string; // Add imageUrl for the profile picture
}

interface TestimonialProps {
  counters: CounterType[];
  testimonials: TestimonialType[];
}

const Testimonial = ({ counters, testimonials }: TestimonialProps) => {
  return (
    <div>
      <h1 className="font-semibold text-4xl my-9 text-center">Loved by Travellers around Rwanda</h1>

      {/* Render Counters */}
      <div className="lg:flex justify-between items-center my-5 px-10">
        {counters.map((counter, index) => (
          <Counter 
            key={index}
            icon={counter.icon}
            heading={counter.heading}
            text={counter.text}
          />
        ))}
      </div>

      {/* Swiper for Testimonial Cards */}
      <div className="my-10 px-10">
        <Swiper
          spaceBetween={50} // Space between slides
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true} // Loop the slides
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                name={testimonial.name}
                review={testimonial.review}
                rating={testimonial.rating}
                role={testimonial.role} 
                imageUrl={testimonial.imageUrl} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
