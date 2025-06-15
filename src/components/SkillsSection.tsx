
import { Database, BarChart3, Brain, Code2, TrendingUp, Eye, MessageCircleCode } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { name: 'Python', level: 95, icon: Code2 },
    { name: 'Machine Learning', level: 92, icon: Brain },
    { name: 'Computer Vision', level: 89, icon: Eye },
    { name: 'Natural Language Processing', level: 90, icon: MessageCircleCode },
    { name: 'PyTorch / TensorFlow', level: 87, icon: Code2 },
    {
      name: 'Business Analytics (Excel Advanced, SQL, Power BI)',
      level: 91,
      icon: BarChart3
    },
    { name: 'Data Analysis', level: 95, icon: BarChart3 },
    { name: 'Statistical Modeling', level: 88, icon: Brain },
    // SQL, Excel, Power BI are now combined above and not repeated separately
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Technical Skills</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <skill.icon className="w-6 h-6 text-blue-400 mr-3" />
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="ml-auto text-blue-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

