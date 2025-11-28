import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const Navigation = ({ activeSection, onSectionClick }: NavigationProps) => {
  const navItems = ['Home', 'About', 'Expertise', 'Projects', 'Experience', 'Contact'];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onSectionClick(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full sticky top-4 z-50 px-4">
      <div className="container mx-auto bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl shadow-primary/5">
        <div className="flex flex-col md:flex-row items-center py-4 px-6 justify-between relative">

          <div className="w-full md:w-auto flex justify-between items-center">
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold text-primary">Proffesional Portfolio</h1>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-none">
            <div className="flex flex-wrap justify-center gap-2">
              {navItems.map((item) => {
                const id = item.toLowerCase();
                const isActive = activeSection === id;
                return (
                  <button
                    key={item}
                    onClick={() => handleNavClick(id)}
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

          {/* Mobile Navigation Dropdown */}
          {isMobileMenuOpen && (
            <div className="w-full md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-2 animate-in slide-in-from-top-5 duration-200">
              {navItems.map((item) => {
                const id = item.toLowerCase();
                const isActive = activeSection === id;
                return (
                  <button
                    key={item}
                    onClick={() => handleNavClick(id)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${isActive
                      ? 'text-primary bg-white/10'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          )}

          <div className="hidden md:block flex-1"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
