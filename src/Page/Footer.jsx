// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-sm">
          {/* Contact Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <p className="mb-2">Phone: 09015723473</p>
            <p className="mb-2">Email: Adetoyeseadeniran25@gmail.com</p>
            <p className="mb-2">Location: Abere, Osogobo, NIGERIA</p>
          </div>

          {/* Course Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Course</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-300">Fitness</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-300">Body Building</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-300">Yoga & Meditation</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-300">Registration</a></li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Link</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-300">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-300">Courses</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-300">About</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-300">Schedules</a></li>
            </ul>
          </div>

          {/* Follow Up On Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Up On</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                {/* Facebook Icon SVG */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                {/* Twitter Icon SVG */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.532A8.318 8.318 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 014 9.055v.05a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.188a11.644 11.644 0 006.29 1.84z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                {/* Instagram Icon SVG */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.717.01 3.655.043 2.15.076 3.328.94 4.291 1.983.957 1.042 1.817 2.124 1.905 4.238.036.943.047 1.218.047 3.659s-.011 2.717-.047 3.659c-.088 2.114-.948 3.196-1.905 4.238-.963 1.043-2.14 1.907-4.29 1.983-.938.036-1.229.048-3.659.048s-2.717-.011-3.659-.048c-2.148-.076-3.328-.94-4.29-1.983C2.81 20.32 1.95 19.238 1.86 17.124c-.036-.943-.048-1.218-.048-3.659s.011-2.717.048-3.659c.089-2.114.949-3.196 1.906-4.238.962-1.043 2.14-1.907 4.289-1.983.939-.036 1.229-.048 3.66-.048zm0 1.242c-2.43 0-2.717.01-3.655.043-2.072.074-2.847.604-3.41 1.233-.563.629-1.093 1.35-1.157 3.327-.035.929-.045 1.196-.045 3.606s.01 2.677.045 3.606c.064 1.977.594 2.748 1.157 3.327.563.629 1.34.887 3.41 1.233.938.035 1.21.046 3.605.046s2.677-.011 3.606-.046c1.977-.064 2.748-.594 3.327-1.157.629-.563 1.35-1.34 1.233-3.41-.035-.93-.046-1.21-.046-3.605s.011-2.677.046-3.606c.064-1.977-.594-2.748-1.157-3.327-.629-.563-1.34-.887-3.41-1.233-.938-.035-1.21-.046-3.605-.046zm0 2.242c2.43 0 2.717.01 3.655.043 2.15.076 3.328.94 4.291 1.983.957 1.042 1.817 2.124 1.905 4.238.036.943.047 1.218.047 3.659s-.011 2.717-.047 3.659c-.088 2.114-.948 3.196-1.905 4.238-.963 1.043-2.14 1.907-4.29 1.983-.938.036-1.229.048-3.659.048s-2.717-.011-3.659-.048c-2.148-.076-3.328-.94-4.29-1.983C2.81 20.32 1.95 19.238 1.86 17.124c-.036-.943-.048-1.218-.048-3.659s.011-2.717.048-3.659c.089-2.114.949-3.196 1.906-4.238.962-1.043 2.14-1.907 4.289-1.983.939-.036 1.229-.048 3.66-.048zm0 2.242c2.43 0 2.717.01 3.655.043 2.15.076 3.328.94 4.291 1.983.957 1.042 1.817 2.124 1.905 4.238.036.943.047 1.218.047 3.659s-.011 2.717-.047 3.659c-.088 2.114-.948 3.196-1.905 4.238-.963 1.043-2.14 1.907-4.29 1.983-.938.036-1.229.048-3.659.048s-2.717-.011-3.659-.048c-2.148-.076-3.328-.94-4.29-1.983C2.81 20.32 1.95 19.238 1.86 17.124c-.036-.943-.048-1.218-.048-3.659s.011-2.717.048-3.659c.089-2.114.949-3.196 1.906-4.238.962-1.043 2.14-1.907 4.289-1.983.939-.036 1.229-.048 3.66-.048z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
          <p>Copyright 2025. Designed by <span>&#x2764;</span>. Adeniran Adetoye.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;