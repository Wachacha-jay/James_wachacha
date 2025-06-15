
import { Phone, Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Let's Connect</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/80 text-lg mb-8">
            I'm always interested in discussing new opportunities, collaborations, 
            or data science challenges. Let's talk!
          </p>
          
          {/* Prominent Get In Touch Button */}
          <div className="mb-12">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" asChild>
              <a href="mailto:jameswachacha@gmail.com">
                <Mail className="w-6 h-6 mr-3" />
                Get In Touch
              </a>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-white/70 break-words">+254729215235</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-white/70 break-all text-sm">jameswachacha@gmail.com</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-white/70">Nairobi, Kenya</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href="mailto:jameswachacha@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
              <a href="https://www.linkedin.com/in/james-wachacha" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
              <a href="https://github.com/wachacha-jay" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
