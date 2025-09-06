
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
                I am a Machine Learning Specialist and AI Engineer with a strong passion for data-driven problem solving and building impactful AI solutions. With expertise in Python, TensorFlow, PyTorch, and scikit-learn, I design, develop, and deploy machine learning and deep learning models for real-world applications, ranging from NLP and computer vision to predictive analytics.
              </p>
              <p className="text-white/80 text-lg mb-6">
                I thrive at the intersection of theory and application—taking business challenges, analyzing data, and transforming them into scalable, production-ready AI systems. My experience spans the full pipeline: data preprocessing, feature engineering, model training, evaluation, deployment, and optimization for performance and scalability.
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
