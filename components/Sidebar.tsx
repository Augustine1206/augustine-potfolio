import React from 'react';
import { USER_INFO, NAV_LINKS } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside 
        className={`
          fixed top-0 bottom-0 left-0 w-72 bg-light flex flex-col items-center text-center p-8 overflow-y-auto z-50 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:left-0 border-r border-gray-200
        `}
      >
        <div className="mb-8 w-full">
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-md transition-transform hover:scale-105">
            <img 
              src={USER_INFO.avatar} 
              alt={USER_INFO.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-serif text-2xl font-bold mb-2 text-dark hover:text-primary transition-colors">
            <a href="#home">{USER_INFO.name}</a>
          </h1>
          <p className="text-primary text-xs tracking-widest uppercase mb-6 font-medium">
            <span className="text-gray-400">in</span> {USER_INFO.location}
          </p>
        </div>

        <nav className="w-full mb-auto">
          <ul className="space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block text-gray-600 hover:text-primary text-sm tracking-widest uppercase transition-colors font-medium border-b border-transparent hover:border-primary pb-1 mx-auto w-max"
                  onClick={(e) => {
                     // Ensure sidebar closes on mobile
                     if (window.innerWidth < 1024) toggleSidebar();
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p>Made with React & Tailwind</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;