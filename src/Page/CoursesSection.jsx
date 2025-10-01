import React from 'react';

const CoursesSection = () => {
  const courses = [
    {
      title: 'Fitness',
      description: 'Lorem ipsum dolor sit amet, consectetur thedinisadipiscing elit, sedsed diam nonummy eirmod tempor invidunt ut labore.',
      imageUrl: 'https://i.pinimg.com/736x/21/68/f1/2168f1a8ce9f4e98867aae74d0030d37.jpg', // Replace with your image
    },
    {
      title: 'Body Building',
      description: 'Lorem ipsum dolor sit amet, consectetur thedinisadipiscing elit, sedsed diam nonummy eirmod tempor invidunt ut labore.',
      imageUrl: 'https://i.pinimg.com/736x/8e/83/da/8e83dabe710f32747cc52428980d12d8.jpg', // Replace with your image
    },
    {
      title: 'Yoga & Meditation',
      description: 'Lorem ipsum dolor sit amet, consectetur thedinisadipiscing elit, sedsed diam nonummy eirmod tempor invidunt ut labore.',
      imageUrl: 'https://i.pinimg.com/736x/ce/6f/5c/ce6f5c3ed0855cfc932b16af6b61889e.jpg', // Replace with your image
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            Our Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur sadipscing elit, sed diam nonumy
            eirmod tempor invidunt ut labore.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={course.imageUrl} alt={course.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 leading-relaxed">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;