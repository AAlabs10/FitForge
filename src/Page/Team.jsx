import React from 'react';

const teamMembers = [
  {
    name: 'Sarah Clerk',
    title: 'Fitness Trainer and CEO',
    imageUrl: 'https://images.unsplash.com/photo-1596489391168-e4b0c2a2b0e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpdG5lc3MlMjB0cmFpbmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60', // Example image
  },
  {
    name: 'Nora F.',
    title: 'Fitness Trainer',
    imageUrl: 'https://images.unsplash.com/photo-1571019624545-aca13038a7c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZpdG5lc3MlMjB0cmFpbmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60', // Example image
  },
  {
    name: 'David Smith',
    title: 'Fitness Trainer',
    imageUrl: 'https://images.unsplash.com/photo-1552671569-87c10b80985a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZpdG5lc3MlMjB0cmFpbmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60', // Example image
  },
  {
    name: 'Jesika Parrnendaj',
    title: 'Fitness Trainer',
    imageUrl: 'https://images.unsplash.com/photo-1579758509374-290ac9a3a936?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGZpdG5lc3MlMjB0cmFpbmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60', // Example image
  },
];

const Team = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="relative inline-block pb-2">
            <h2 className="text-4xl font-bold text-gray-800 relative z-10">Our Team</h2>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-red-500 rounded"></span>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy
            eirmod tempor invidunt ut labore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-full h-64 overflow-hidden rounded-lg mb-4 shadow-lg">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-red-500">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;