
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onSectionClick: (sectionId: string) => void;
}

const HeroSection = ({ onSectionClick }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black"></div>
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>
      <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          <div className="animate-fade-in space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new projects
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white leading-tight">
              James Wachacha
              <span className="block text-2xl md:text-4xl lg:text-5xl mt-2 font-light text-white/80">
                Data Scientist & <span className="text-primary">Machine Learning Engineer</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              Crafting intelligent solutions from complex data. Specializing in predictive modeling,
              machine learning pipelines, and strategic business analytics.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                onClick={() => onSectionClick('projects')}
                className="bg-primary hover:bg-yellow-500 text-black px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
              >
                View Selected Works
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-full backdrop-blur-sm transition-all duration-300"
              >
                <a href="mailto:jameswachacha@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>

            {/* Tech Stack / Stats */}
            <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-white/5 mt-16">
              {[
                { label: "Experience", value: "3+ Years" },
                { label: "Projects", value: "50+" },
                { label: "Clients", value: "20+" },
                { label: "Availability", value: "Open" }
              ].map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-sm text-white/40 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
