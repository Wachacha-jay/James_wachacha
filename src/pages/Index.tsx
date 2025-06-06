import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Database, BarChart3, Brain, Code2, TrendingUp, Award, Plus, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AddProjectForm from '@/components/AddProjectForm';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  category: 'machine-learning' | 'deep-learning' | 'ai-automation';
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showAddProject, setShowAddProject] = useState(false);
  const [activeTab, setActiveTab] = useState<'machine-learning' | 'deep-learning' | 'ai-automation'>('machine-learning');
  const [projects, setProjects] = useState<Project[]>([
    {
      title: 'Customer Churn Prediction',
      description: 'Built a machine learning model to predict customer churn with 94% accuracy using ensemble methods.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      github: '#',
      demo: '#',
      category: 'machine-learning'
    },
    {
      title: 'Sales Forecasting Dashboard',
      description: 'Interactive dashboard for sales forecasting using time series analysis and ARIMA models.',
      tech: ['Python', 'Streamlit', 'Plotly', 'ARIMA'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      github: '#',
      demo: '#',
      category: 'machine-learning'
    },
    {
      title: 'Neural Network Image Classifier',
      description: 'Deep learning model for image classification with 98% accuracy on CIFAR-10 dataset.',
      tech: ['Python', 'TensorFlow', 'Keras', 'CNN'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
      github: '#',
      demo: '#',
      category: 'deep-learning'
    },
    {
      title: 'Document Processing Bot',
      description: 'Automated document processing system using NLP and OCR for business workflows.',
      tech: ['Python', 'Tesseract', 'spaCy', 'RPA'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      github: '#',
      demo: '#',
      category: 'ai-automation'
    }
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddProject = (newProject: Omit<Project, 'category'>) => {
    const projectWithCategory: Project = {
      ...newProject,
      category: activeTab
    };
    setProjects([...projects, projectWithCategory]);
    setShowAddProject(false);
  };

  const handleDeleteProject = (index: number, category: string) => {
    setProjects(projects.filter((project, i) => !(i === index && project.category === category)));
  };

  const getProjectsByCategory = (category: string) => {
    return projects.filter(project => project.category === category);
  };

  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case 'machine-learning':
        return 'Machine Learning';
      case 'deep-learning':
        return 'Deep Learning';
      case 'ai-automation':
        return 'AI Automation';
      default:
        return category;
    }
  };

  const skills = [
    { name: 'Python', level: 95, icon: Code2 },
    { name: 'Machine Learning', level: 90, icon: Brain },
    { name: 'Data Analysis', level: 92, icon: BarChart3 },
    { name: 'SQL', level: 88, icon: Database },
    { name: 'Statistics', level: 85, icon: TrendingUp },
    { name: 'Deep Learning', level: 82, icon: Brain },
  ];

  const experiences = [
    {
      title: 'Senior Data Scientist',
      company: 'Tech Innovation Corp',
      period: '2022 - Present',
      description: 'Lead data science initiatives, developed ML models for customer analytics, and mentored junior data scientists.'
    },
    {
      title: 'Data Scientist',
      company: 'Analytics Solutions Inc',
      period: '2020 - 2022',
      description: 'Built predictive models, performed statistical analysis, and created data visualizations for business insights.'
    },
    {
      title: 'Data Analyst',
      company: 'StartUp Dynamics',
      period: '2018 - 2020',
      description: 'Analyzed business metrics, created automated reports, and supported data-driven decision making.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">DataScientist</h1>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-400' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Data Science
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {" "}Expert
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Transforming data into actionable insights with machine learning, 
              statistical analysis, and cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60 w-8 h-8" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-white/80 text-lg mb-6">
                  I'm a passionate data scientist with 5+ years of experience in extracting 
                  meaningful insights from complex datasets. My expertise spans machine learning, 
                  statistical modeling, and big data technologies.
                </p>
                <p className="text-white/80 text-lg mb-6">
                  I specialize in building end-to-end ML pipelines, from data preprocessing 
                  to model deployment, with a focus on delivering business value through 
                  data-driven solutions.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['PhD in Statistics', 'AWS Certified', 'Google Analytics Certified'].map((cert) => (
                    <Badge key={cert} variant="secondary" className="bg-blue-600/20 text-blue-300">
                      <Award className="w-4 h-4 mr-1" />
                      {cert}
                    </Badge>
                  ))}
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

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Technical Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
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

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
            <Button 
              onClick={() => setShowAddProject(true)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
          </div>

          {showAddProject && (
            <div className="mb-8">
              <AddProjectForm 
                onAddProject={handleAddProject}
                onCancel={() => setShowAddProject(false)}
                selectedCategory={activeTab}
              />
            </div>
          )}

          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/10 mb-8">
              <TabsTrigger 
                value="machine-learning" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white/70"
              >
                Machine Learning
              </TabsTrigger>
              <TabsTrigger 
                value="deep-learning"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white/70"
              >
                Deep Learning
              </TabsTrigger>
              <TabsTrigger 
                value="ai-automation"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white/70"
              >
                AI Automation
              </TabsTrigger>
            </TabsList>

            {['machine-learning', 'deep-learning', 'ai-automation'].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getProjectsByCategory(category).map((project, index) => (
                    <Card key={`${category}-${index}`} className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img 
                          src={project.image || 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop'} 
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDeleteProject(projects.findIndex(p => p === project), category)}
                            className="bg-red-600/80 hover:bg-red-600"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-white">{project.title}</CardTitle>
                        <CardDescription className="text-white/70">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-blue-600/20 text-blue-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          {project.github && (
                            <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-1" />
                                Code
                              </a>
                            </Button>
                          )}
                          {project.demo && (
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-1" />
                                Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {getProjectsByCategory(category).length === 0 && (
                    <div className="col-span-full text-center py-12">
                      <p className="text-white/60 text-lg">
                        No {getCategoryDisplayName(category).toLowerCase()} projects yet.
                      </p>
                      <p className="text-white/40 text-sm mt-2">
                        Click "Add Project" to add your first {getCategoryDisplayName(category).toLowerCase()} project.
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Professional Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="absolute left-2 top-4 w-0.5 h-full bg-blue-600/30"></div>
                  <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                    <p className="text-white/60 text-sm mb-3">{exp.period}</p>
                    <p className="text-white/80">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Let's Connect</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-white/80 text-lg mb-8">
              I'm always interested in discussing new opportunities, collaborations, 
              or data science challenges. Let's talk!
            </p>
            <div className="flex justify-center gap-6">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2024 Data Scientist Portfolio. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
