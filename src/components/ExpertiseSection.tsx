
import { Brain, TrendingUp, Shield, Users, Lightbulb, BarChart3, Code2, Eye, MessageCircleCode, Cloud } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExpertiseSection = () => {
    const skills = [
        { name: 'Python', level: 95, icon: Code2 },
        { name: 'Machine Learning', level: 92, icon: Brain },
        { name: 'Computer Vision', level: 89, icon: Eye },
        { name: 'NLP', level: 90, icon: MessageCircleCode },
        { name: 'PyTorch / TensorFlow', level: 87, icon: Code2 },
        { name: 'Business Analytics', level: 91, icon: BarChart3 },
        { name: 'Data Analysis', level: 95, icon: BarChart3 },
        { name: 'Statistical Modeling', level: 88, icon: Brain },
        { name: 'Cloud (AWS/Azure)', level: 75, icon: Cloud },
    ];

    const applications = [
        {
            icon: TrendingUp,
            title: "Financial Risk Assessment",
            problem: "Banks struggle with accurate credit scoring and loan default prediction",
            solution: "Built ML models using ensemble methods and deep learning to predict credit scores with 94% accuracy",
            impact: "Reduced loan defaults by 23% and improved approval speed by 60%",
            technologies: ["Python", "XGBoost", "LSTM", "Flask API"],
        },
        {
            icon: Shield,
            title: "Healthcare Diagnostics",
            problem: "Early disease detection requires analyzing complex medical imaging data",
            solution: "Developed CNN models for crop disease classification that can be adapted for medical imaging",
            impact: "Achieved 96% accuracy in image classification, enabling faster diagnostic decisions",
            technologies: ["PyTorch", "ResNet", "Computer Vision"],
        },
        {
            icon: Users,
            title: "Customer Behavior Analytics",
            problem: "E-commerce businesses need to understand customer segments for targeted marketing",
            solution: "Created unsupervised learning models using K-means clustering and PCA for customer segmentation",
            impact: "Increased marketing ROI by 35% through personalized campaigns",
            technologies: ["Scikit-learn", "K-means", "PCA", "Power BI"],
        },
        {
            icon: BarChart3,
            title: "Supply Chain Optimization",
            problem: "Agricultural businesses face uncertainty in crop yield and market demand forecasting",
            solution: "Built time series forecasting models using ARIMA and LSTM for agricultural planning",
            impact: "Improved crop yield prediction accuracy by 28% and reduced waste by 15%",
            technologies: ["ARIMA", "LSTM", "Time Series"],
        },
        {
            icon: Brain,
            title: "Automated Research Intelligence",
            problem: "Researchers spend 40% of their time on literature review and gap identification",
            solution: "Developed AI agents using LangGraph to automate research paper analysis and gap detection",
            impact: "Reduced literature review time by 70% while identifying 3x more research gaps",
            technologies: ["LangChain", "LLMs", "NLP"],
        },
        {
            icon: Lightbulb,
            title: "Real Estate Market Intelligence",
            problem: "Property investors lack accurate pricing models for emerging markets like Nairobi",
            solution: "Created web scraping and ML pipeline to predict property prices with market trend analysis",
            impact: "Enabled data-driven investment decisions with 89% price prediction accuracy",
            technologies: ["Web Scraping", "Linear Regression", "Flask"],
        }
    ];

    return (
        <section id="expertise" className="py-20 bg-black min-h-screen">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Professional Expertise</h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        A comprehensive overview of my technical capabilities and their practical applications in solving real-world business challenges.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold text-primary mb-10 border-l-4 border-primary pl-4">Core Competencies</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {skills.map((skill) => (
                            <div key={skill.name} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                        <skill.icon className="w-6 h-6" />
                                    </div>
                                    <span className="font-semibold text-white/90">{skill.level}%</span>
                                </div>
                                <h4 className="text-white font-medium">{skill.name}</h4>
                                <div className="w-full bg-white/10 rounded-full h-1.5 mt-4">
                                    <div
                                        className="bg-primary h-1.5 rounded-full"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Applications Grid */}
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-10 border-l-4 border-primary pl-4">Applied Solutions</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {applications.map((app, index) => {
                            const IconComponent = app.icon;
                            return (
                                <Card key={index} className="bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300 group h-full">
                                    <CardContent className="p-8 flex flex-col h-full">
                                        <div className="mb-6">
                                            <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-8 h-8" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">{app.title}</h3>
                                        </div>

                                        <div className="space-y-4 flex-grow">
                                            <div>
                                                <h4 className="text-xs uppercase tracking-wider text-white/40 mb-1">Challenge</h4>
                                                <p className="text-white/70 text-sm leading-relaxed">{app.problem}</p>
                                            </div>

                                            <div>
                                                <h4 className="text-xs uppercase tracking-wider text-white/40 mb-1">Solution</h4>
                                                <p className="text-white/70 text-sm leading-relaxed">{app.solution}</p>
                                            </div>

                                            <div>
                                                <h4 className="text-xs uppercase tracking-wider text-white/40 mb-1">Impact</h4>
                                                <p className="text-primary text-sm font-medium">{app.impact}</p>
                                            </div>
                                        </div>

                                        <div className="pt-6 mt-6 border-t border-white/10">
                                            <div className="flex flex-wrap gap-2">
                                                {app.technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded border border-white/5"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExpertiseSection;
