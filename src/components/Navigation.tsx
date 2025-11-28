
import { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const Navigation = ({ activeSection, onSectionClick }: NavigationProps) => {
  const navItems = ['Home', 'Expertise', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className="w-full sticky top-4 z-50 px-4">
      <div className="container mx-auto bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl shadow-primary/5">
        <div className="flex flex-col md:flex-row items-center py-4 px-6">
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
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${isActive
                      ? 'text-primary bg-white/10'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
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
