import { Button } from '@/components/ui/button';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image / Visual Column */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              {/* Placeholder for profile image - using a gradient/pattern for now if no image */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
                <span className="text-white/20 text-6xl font-bold">JW</span>
              </div>
              {/* <img 
                src="/path/to/profile-image.jpg" 
                alt="James Wachacha" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" 
              /> */}
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Data Scientist & <span className="text-primary">Machine Learning Engineer</span>
            </h3>

            <p className="text-white/70 text-lg leading-relaxed">
              I am a highly analytical and results-driven Data Scientist with a strong foundation in Applied Data Science and Mathematics.
              My passion lies in transforming complex datasets into actionable insights that drive business growth and operational efficiency.
            </p>

            <p className="text-white/70 text-lg leading-relaxed">
              With expertise in Machine Learning, Natural Language Processing (NLP), and Agentic AI workflows, I build intelligent systems
              that solve real-world problems. From predictive modeling to automated reporting pipelines, I enjoy tackling challenges
              that require a blend of technical depth and strategic thinking.
            </p>

            <div className="pt-6 flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-yellow-600 text-black font-semibold">
                <FileText className="mr-2 h-4 w-4" />
                Download CV
              </Button>

              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10 hover:text-primary hover:border-primary/50" asChild>
                  <a href="https://github.com/wachacha-jay" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10 hover:text-primary hover:border-primary/50" asChild>
                  <a href="https://www.linkedin.com/in/james-wachacha" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10 hover:text-primary hover:border-primary/50" asChild>
                  <a href="mailto:jameswachacha@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
