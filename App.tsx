import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex font-sans text-gray-600 antialiased selection:bg-primary selection:text-white">
      {/* Mobile Toggle Button */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <button
          onClick={toggleSidebar}
          className="bg-white p-2 rounded shadow text-dark hover:text-primary transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 transition-all duration-300">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />

        {/* Footer for main content */}
        <footer className="py-12 text-center text-sm text-gray-400 bg-white">
          <p>
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Augustine Asante
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
