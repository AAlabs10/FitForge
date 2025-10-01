import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/1200x/76/c7/6a/76c76a7a19d36104ad013fe959f5f8ef.jpg)' }}>
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}

      {/* Content */}
      <div className="relative z-10 text-white text-center p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Best Fitness Center Near You
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;