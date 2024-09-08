import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">© {currentYear} Utsab Pant. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/utsabpanta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/utsab-p-00415b71"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:utsabpant@utsabpant.com"
              className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
