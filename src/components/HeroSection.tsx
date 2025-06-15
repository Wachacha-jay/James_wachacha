
import { ChevronDown, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onSectionClick: (sectionId: string) => void;
}

const HeroSection = ({ onSectionClick }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            James Wachacha
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {" "}Data Scientist
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Transforming complex datasets into actionable business insights through 
            machine learning, statistical modeling, and advanced analytics solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onSectionClick('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <a href="mailto:jameswachacha@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/60 w-8 h-8" />
      </div>
    </section>
  );
};

export default HeroSection;
