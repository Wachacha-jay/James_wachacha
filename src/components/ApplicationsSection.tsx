import { Brain, TrendingUp, Shield, Users, Lightbulb, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ApplicationsSection = () => {
  const applications = [
    {
      icon: TrendingUp,
      title: "Financial Risk Assessment",
      problem: "Banks struggle with accurate credit scoring and loan default prediction",
      solution: "Built ML models using ensemble methods and deep learning to predict credit scores with 94% accuracy",
      impact: "Reduced loan defaults by 23% and improved approval speed by 60%",
      technologies: ["Python", "XGBoost", "LSTM", "Flask API"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Shield,
      title: "Healthcare Diagnostics",
      problem: "Early disease detection requires analyzing complex medical imaging data",
      solution: "Developed CNN models for crop disease classification that can be adapted for medical imaging",
      impact: "Achieved 96% accuracy in image classification, enabling faster diagnostic decisions",
      technologies: ["PyTorch", "ResNet", "Computer Vision", "Transfer Learning"],
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Customer Behavior Analytics",
      problem: "E-commerce businesses need to understand customer segments for targeted marketing",
      solution: "Created unsupervised learning models using K-means clustering and PCA for customer segmentation",
      impact: "Increased marketing ROI by 35% through personalized campaigns",
      technologies: ["Scikit-learn", "K-means", "PCA", "Power BI"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: BarChart3,
      title: "Supply Chain Optimization",
      problem: "Agricultural businesses face uncertainty in crop yield and market demand forecasting",
      solution: "Built time series forecasting models using ARIMA and LSTM for agricultural planning",
      impact: "Improved crop yield prediction accuracy by 28% and reduced waste by 15%",
      technologies: ["ARIMA", "LSTM", "Time Series", "Data Visualization"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Brain,
      title: "Automated Research Intelligence",
      problem: "Researchers spend 40% of their time on literature review and gap identification",
      solution: "Developed AI agents using LangGraph to automate research paper analysis and gap detection",
      impact: "Reduced literature review time by 70% while identifying 3x more research gaps",
      technologies: ["LangChain", "LLMs", "NLP", "Agent Architecture"],
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: Lightbulb,
      title: "Real Estate Market Intelligence",
      problem: "Property investors lack accurate pricing models for emerging markets like Nairobi",
      solution: "Created web scraping and ML pipeline to predict property prices with market trend analysis",
      impact: "Enabled data-driven investment decisions with 89% price prediction accuracy",
      technologies: ["Web Scraping", "Linear Regression", "Flask", "Market Analysis"],
      gradient: "from-teal-500 to-green-600"
    }
  ];

  return (
    <section id="applications" className="py-20 bg-gradient-to-br from-slate-900/50 to-blue-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Real-World Problem Solving</h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">
              How I apply data science, machine learning, and AI to solve complex challenges across industries
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {applications.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${app.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{app.title}</h3>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-red-300 font-medium mb-2">Challenge:</h4>
                        <p className="text-white/70 text-sm">{app.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-blue-300 font-medium mb-2">Solution:</h4>
                        <p className="text-white/70 text-sm">{app.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-green-300 font-medium mb-2">Impact:</h4>
                        <p className="text-white/70 text-sm font-medium">{app.impact}</p>
                      </div>
                      
                      <div className="pt-3 border-t border-white/10">
                        <div className="flex flex-wrap gap-2">
                          {app.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-white/60 text-sm">
              Each solution demonstrates the practical application of data science in solving real business challenges
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;