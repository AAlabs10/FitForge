// ClassSchedules.js
import React from 'react';

function Class() {
  const classScheduleData = [
    {
      id: '01',
      time: 'Mon, 12:00 AM',
      title: 'Fitness Class',
      trainer: 'Nelson Mandela',
    },
    {
      id: '02',
      time: 'Mon, 12:00 AM',
      title: 'Yoga Fitness Class',
      trainer: 'Sara A.K',
    },
    {
      id: '03',
      time: 'Mon, 12:00 AM',
      title: 'Gym Class',
      trainer: 'David Smith',
    },
    {
      id: '04',
      time: 'Mon, 12:00 AM',
      title: 'Yoga Fitness Class',
      trainer: 'Amith Shah',
    },
    {
      id: '05',
      time: 'Mon, 12:00 AM',
      title: 'Classic Fitness',
      trainer: 'Ema Smith',
    },
    {
      id: '06',
      time: 'Mon, 12:00 AM',
      title: 'Yoga Fitness Class',
      trainer: 'Sneha Dey',
    },
    {
      id: '07',
      time: 'Mon, 12:00 AM',
      title: 'Gym Class',
      trainer: 'John Doe',
    },
    {
      id: '08',
      time: 'Mon, 12:00 AM',
      title: 'Fitness Class',
      trainer: 'Fahmi H.J.',
    },
  ];

  return (
    <section
      className="relative bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundImage: `url('https://via.placeholder.com/1920x1080/333333/ffffff?text=Gym+Background')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-80"></div> {/* Overlay for readability */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          <span className="relative inline-block">
            <span className="relative z-10">Class Schedules</span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-red-600 z-0"></span>
          </span>
        </h2>
        <p className="mt-2 text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do
          eiusmod tempor incididunt ut labore.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {classScheduleData.map((schedule) => (
            <div
              key={schedule.id}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-red-600 text-xl font-bold mb-2">
                {schedule.id}.
              </div>
              <p className="text-gray-300 text-sm mb-1">{schedule.time}</p>
              <h3 className="text-xl font-bold text-white mb-1">
                {schedule.title}
              </h3>
              <p className="text-gray-400 text-sm">{schedule.trainer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Class;