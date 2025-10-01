import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114153.jpg?t=st=1759337771~exp=1759341371~hmac=0aa9d028f756481a01c7e75a8bbafbe9d70f0386cdeb45ee1f1c9181ff14af63)' }}>
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