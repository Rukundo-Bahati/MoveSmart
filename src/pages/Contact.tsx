import img from '../assets/pic.png'

const Contact = () => {
  return (
    <div className="bg-[#17BC3D] md:flex items-center justify-between p-6">
      {/* Left Section */}
      <div className="flex flex-col justify-between items-center">
        <div className="text-[#17BC3D] p-3 bg-white rounded-3xl w-48 text-center text-lg mt-4">
          <p>Contact Us</p>
        </div>
        <h3 className="text-2xl text-white mt-4 font-semibold my-4">
          Any insights? Feel free to reach us
        </h3>
        <p className="text-lg text-white my-4">We’d love to hear from you!</p>
        <img src={img} alt="" className='w-full' />
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center mr-4">

          <form className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 w-96 h-full text-xl">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Company Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your company"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="email"
                placeholder="Enter your email"
              />
        
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border resize-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your message"
              />
        
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-[#17BC3D] hover:bg-green-700 w-full duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
               Submit a request
              </button>
             
            </div>
          </form>

      </div>
    </div>
  );
};

export default Contact;
