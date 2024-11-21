import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FrequentlyAs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Yitegere?",
      answer: "Yitegere is a smart system for booking buses, selecting seats, and making payments easily."
    },
    {
      question: "How do I update my billing information?",
      answer: "You can update billing information in the 'Billing' section of your account settings."
    },
    {
      question: "How can Yitegere help me get easy Transport?",
      answer: "It provides real-time bus schedules, seat availability, and simplifies booking and payments."
    },
    {
      question: "You have Free trial?",
      answer: "Yes, Yitegere offers users free access to explore its features before booking."
    },
    {
      question: "Who founded Yitegere?",
      answer: "Yitegere was developed to modernize and enhance Rwanda's transportation system."
    },
    {
      question: "Who can use Yitegere?",
      answer: "Regular commuters, tourists, business travelers, and anyone planning bus travel can use it."
    },
    {
      question: "What integrations does Yitegere offer?",
      answer: "It integrates with bus operators to provide real-time schedules, seat availability, and payment confirmations."
    },
    {
      question: "Who owns the Yitegere company?",
      answer: "Yitegere is owned and managed by stakeholders aiming to modernize Rwanda’s transportation."
    }
  ];
  

  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
              Frequently asked questions
            </h2>
            <p className="text-center text-slate-600 my-2">
              We have put together some commonly asked questions
            </p>
          </div>
          <div className="accordion-group grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 ${
                  activeIndex === index
                    ? "bg-indigo-50 border-indigo-600"
                    : ""
                }`}
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                >
                  <h5>{item.question}</h5>
                  <FiChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`accordion-content w-full overflow-hidden transition-max-height duration-500 ${
                    activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <p className="text-base text-gray-900 font-normal leading-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrequentlyAs;
