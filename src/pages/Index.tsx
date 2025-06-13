import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Database, BarChart3, Brain, Code2, TrendingUp, Award, Plus, Edit, Trash2, Phone, MapPin } from 'lucide-react';
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
  date?: string;
  results?: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showAddProject, setShowAddProject] = useState(false);
  const [activeTab, setActiveTab] = useState<'machine-learning' | 'deep-learning' | 'ai-automation'>('machine-learning');
  const [projects, setProjects] = useState<Project[]>([
    {
      title: 'Crop Disease Classification',
      description: 'Developed a deep learning model using ResNet architecture to automatically classify plant diseases from leaf images. Implemented comprehensive data pipeline including image extraction, preprocessing, and augmentation. Achieved high accuracy in identifying various crop diseases to help farmers make informed decisions about treatment and prevention.',
      tech: ['Python', 'PyTorch', 'ResNet', 'OpenCV', 'PIL', 'Data Augmentation', 'Transfer Learning'],
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop',
      github: '#',
      demo: '#',
      category: 'deep-learning',
      date: 'February 5, 2025',
      results: 'Achieved 94% classification accuracy across 10 disease categories'
    },
    {
      title: 'Sentiment Analysis & Text Classification',
      description: 'Built an advanced NLP system for analyzing customer feedback and social media sentiment. Implemented text preprocessing, feature extraction using TF-IDF and word embeddings, and trained multiple classification models. Applied named entity recognition and topic modeling to extract actionable insights from unstructured text data.',
      tech: ['Python', 'NLTK', 'spaCy', 'Transformers', 'scikit-learn', 'BERT', 'TF-IDF', 'Word2Vec'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
      github: '#',
      demo: '#',
      category: 'deep-learning',
      date: 'January 28, 2025',
      results: 'Processing 10K+ texts with 91% sentiment accuracy'
    },
    {
      title: 'Stock Volatility Predictor',
      description: 'Built a FastAPI-powered web application that enables users to analyze and forecast stock price volatility using advanced statistical models. Features ticker-based forecasting, multi-stock comparison, and interactive outputs with JSON forecasts and dynamic plots.',
      tech: ['Python', 'FastAPI', 'ARCH Models', 'SQLite3', 'AlphaVantage API', 'Plotly'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop',
      github: '#',
      demo: '#',
      category: 'machine-learning',
      date: 'January 22, 2025',
      results: 'Achieved 92% forecast accuracy'
    },
    {
      title: 'Real Estate Predictor Nairobi',
      description: 'A machine learning-powered Flask web application that predicts property prices in Nairobi based on user inputs and compares them with market trends. Dataset collected through web scraping of Nairobi property listings.',
      tech: ['Flask', 'Python', 'BeautifulSoup', 'Linear Regression'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop',
      github: '#',
      demo: '#',
      category: 'machine-learning',
      date: 'December 24, 2024'
    },
    {
      title: 'Credit Card Customer Segmentation',
      description: 'Performed customer segmentation on credit card user data using K-Means clustering to identify distinct spending patterns and behaviors. Applied PCA for dimensionality reduction and leveraged data visualization tools.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'K-Means', 'PCA', 'Matplotlib', 'Seaborn', 'Plotly'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      github: '#',
      demo: '#',
      category: 'machine-learning',
      date: 'January 30, 2025'
    },
    {
      title: 'Business Analysis & Forecasting',
      description: 'Comprehensive business analysis project to segment businesses based on purchasing behavior and evaluate product performance. Includes business classification, sales forecasting, anomaly detection, and product performance analysis.',
      tech: ['Python', 'Pandas', 'Excel', 'ARIMA Model', 'Power BI'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      github: '#',
      demo: '#',
      category: 'ai-automation',
      date: 'December 10, 2024'
    },
    {
      title: 'Power BI Business Dashboards',
      description: 'Specialized in transforming complex datasets into actionable business insights through interactive Power BI dashboards. Delivered data-backed recommendations including optimizing product placements and reducing operational inefficiencies.',
      tech: ['Power BI', 'DAX', 'Power Query', 'Excel', 'Data Modeling'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      github: '#',
      demo: '#',
      category: 'ai-automation',
      date: 'December 14, 2024'
    },
    {
      title: 'Agricultural Analysis Kenya',
      description: 'Comprehensive data analysis of agricultural practices across Kenya\'s counties using Python. Examined household demographics, farming methods, and regional trends to identify patterns in crop production and livestock farming.',
      tech: ['Python', 'Power Query', 'Matplotlib', 'Seaborn', 'Pandas'],
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&h=300&fit=crop',
      github: '#',
      demo: '#',
      category: 'machine-learning',
      date: 'December 7, 2024'
    },
    {
      title: 'Data Analysis with Excel',
      description: 'Conducted comprehensive market research on job trends using Microsoft Excel\'s advanced toolkit. Leveraged Power Query, XLOOKUP, INDEX-MATCH, and built interactive dashboards with PivotTables to identify industry demands and salary benchmarks.',
      tech: ['Excel', 'Power Query', 'PivotTables', 'XLOOKUP', 'INDEX-MATCH'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      github: '#',
      demo: '#',
      category: 'ai-automation',
      date: 'February 11, 2024'
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
    { name: 'Machine Learning', level: 92, icon: Brain },
    { name: 'Data Analysis', level: 95, icon: BarChart3 },
    { name: 'Power BI', level: 90, icon: TrendingUp },
    { name: 'SQL', level: 88, icon: Database },
    { name: 'FastAPI/Flask', level: 85, icon: Code2 },
    { name: 'Excel Advanced', level: 92, icon: BarChart3 },
    { name: 'Statistical Modeling', level: 88, icon: Brain },
  ];

  const experiences = [
    {
      title: 'Data Scientist & Analytics Specialist',
      company: 'Freelance Projects',
      period: '2024 - Present',
      description: 'Specialized in building ML-powered applications, business intelligence dashboards, and statistical models. Delivered solutions across finance, real estate, and agriculture sectors with measurable business impact.'
    },
    {
      title: 'Business Intelligence Analyst',
      company: 'Various Consulting Projects',
      period: '2023 - 2024',
      description: 'Designed interactive Power BI dashboards and performed advanced data analysis. Optimized business operations through data-driven insights and automated reporting solutions.'
    },
    {
      title: 'Data Analyst',
      company: 'Market Research Projects',
      period: '2022 - 2023',
      description: 'Conducted comprehensive market analysis using Excel and Python. Specialized in agricultural data analysis and job market trends research for strategic decision making.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">James Wachacha</h1>
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
                        {project.date && (
                          <div className="absolute bottom-2 left-2">
                            <Badge className="bg-black/60 text-white text-xs">
                              {project.date}
                            </Badge>
                          </div>
                        )}
                      </div>
                      <CardHeader>
                        <CardTitle className="text-white">{project.title}</CardTitle>
                        <CardDescription className="text-white/70">
                          {project.description}
                        </CardDescription>
                        {project.results && (
                          <p className="text-green-400 text-sm font-semibold mt-2">
                            🎯 {project.results}
                          </p>
                        )}
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
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/80 text-lg mb-8">
              I'm always interested in discussing new opportunities, collaborations, 
              or data science challenges. Let's talk!
            </p>
            
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

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2025 James Wachacha Portfolio. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
