
import { Database, Award, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-white/80 text-lg mb-6">
                I'm a passionate data scientist specializing in building end-to-end machine learning 
                solutions and business intelligence dashboards. My expertise spans from statistical 
                modeling to web application development, with a focus on delivering measurable business value.
              </p>
              <p className="text-white/80 text-lg mb-6">
                With proven results including 92% forecast accuracy in stock volatility prediction 
                and 18% increase in retail sales optimization, I bridge the gap between complex 
                data and strategic decision-making across various industries.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Python Expert', 'ML Specialist', 'Power BI Certified'].map((cert) => (
                  <Badge key={cert} variant="secondary" className="bg-blue-600/20 text-blue-300">
                    <Award className="w-4 h-4 mr-1" />
                    {cert}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4 text-white/60">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Nairobi, Kenya
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <Database className="w-20 h-20 text-blue-400 mx-auto mb-4" />
                    <p className="text-white font-semibold">Data-Driven Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
