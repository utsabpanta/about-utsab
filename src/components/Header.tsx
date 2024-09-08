import React from 'react';
import profileImage from '../assets/profile.jpg';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 shadow-md mr-4">
            <img className="w-full h-full object-cover" src={profileImage} alt="Utsab Panta" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Utsab Pant</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            {['about', 'skills', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`text-gray-600 hover:text-blue-600 transition-colors text-lg ${
                    activeSection === section
                      ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                      : ''
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
