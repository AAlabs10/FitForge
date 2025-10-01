import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Section - Image with Overlay Text */}
          <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="guy.jpg" // Replace with your image
              alt="Man working out in gym"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay for text readability, if needed */}
            {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}

            {/* "30 YEARS OF EXPERIENCE" Text Overlay */}
            <div className="absolute left-0 bottom-1/2 translate-y-1/2 p-4 sm:p-6 bg-white bg-opacity-90 text-gray-800 text-3xl sm:text-4xl md:text-5xl font-extrabold shadow-lg rotate-[-3deg] origin-bottom-left">
              30 YEARS OF EXPERIENCE
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-4 relative inline-block">
              <span className="absolute left-0 bottom-full w-16 h-1 bg-red-600 mb-2"></span> {/* Red underline above text */}
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Learn More About Us
              </h2>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy
              eirmod tempor invidunt ut labore et dolore accusam et justo duo dolores et
              ea rebum. Stet clita kasd gubergren, no sea takisa nectus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit ame consete est. Lorem ipsumdolor sit
              amet. Lorem ipsum dolor sit ame consete est, consectetur sadipscing elitr,
              sed diam nonummy eirmod tempor.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;