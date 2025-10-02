// ContactFormMap.js
import React from 'react';

function Location() {
  // A placeholder for location data you might fetch or define
const locationData = {
  name: "State Secretariat, Abere",
  address: "Abere, Osogbo, Osun State, Nigeria",
  coordinates: {
    lat: 7.73274,
    lng: 4.51614,
  },
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.090809502433!2d4.516139974045624!3d7.732740007037954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037897d63a3a8a7%3A0x8e2f6d51c9ddc7a4!2sOsun%20State%20Government%20Secretariat%2C%20Abere!5e0!3m2!1sen!2sng!4v1735756950000!5m2!1sen!2sng",
};


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">

        {/* Left Section: Get In Touch Form */}
        <div className="flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              <span className="relative inline-block">
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-red-600 z-0"></span> {/* Red underline */}
              </span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right Section: Location Info and Map */}
        <div className="flex flex-col">
          {/* Location Details (top right) */}
          <div className="bg-white p-4 mb-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900">{locationData.name}</h3>
            <p className="text-gray-600 text-sm">{locationData.address}</p>
            <div className="flex items-center text-red-600 text-sm mt-2">
              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${locationData.coordinates.lat},${locationData.coordinates.lng}`} target="_blank" rel="noopener noreferrer" className="hover:underline">Directions</a>
              <span className="mx-2 text-gray-400">|</span>
              <a href="#" className="hover:underline">View larger map</a>
            </div>
          </div>

          {/* Map Embed */}
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg flex-grow">
            <iframe
              src={locationData.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;