
import { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const Navigation = ({ activeSection, onSectionClick }: NavigationProps) => {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className="w-full bg-black border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center py-4">
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-primary">Proffesional Portfolio</h1>
          </div>

          <div className="flex-none">
            <div className="flex flex-wrap justify-center gap-2">
              {navItems.map((item) => {
                const id = item.toLowerCase();
                const isActive = activeSection === id;
                return (
                  <button
                    key={item}
                    onClick={() => onSectionClick(id)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-t-lg border-b-2 ${isActive
                      ? 'text-primary border-primary bg-white/5'
                      : 'text-white/60 border-transparent hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden md:block flex-1"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
