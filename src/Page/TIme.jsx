import React from 'react';

function Time() {
  return (
    <div className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Satisfied Trainee */}
          <div className="flex flex-col items-center text-center">
            <svg className="h-12 w-12 text-white mb-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <div className="text-4xl font-bold mb-1">5345</div>
            <div className="text-lg">Satisfied Trainee</div>
          </div>

          {/* Courses Completed */}
          <div className="flex flex-col items-center text-center">
            <svg className="h-12 w-12 text-white mb-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM10 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM14 4.5a1.5 1.5 0 10-3 0v11a1.5 1.5 0 003 0v-11z" />
            </svg>
            <div className="text-4xl font-bold mb-1">345</div>
            <div className="text-lg">Courses Completed</div>
          </div>

          {/* Trainers */}
          <div className="flex flex-col items-center text-center">
            <svg className="h-12 w-12 text-white mb-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <div className="text-4xl font-bold mb-1">13</div>
            <div className="text-lg">Trainers</div>
          </div>

          {/* Awards Won */}
          <div className="flex flex-col items-center text-center">
            <svg className="h-12 w-12 text-white mb-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div className="text-4xl font-bold mb-1">45</div>
            <div className="text-lg">Awards Won</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Time;