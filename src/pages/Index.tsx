
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';

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

// Modified to always prepend Vite's BASE_URL in production & dev
const cleanImagePath = (relativePath: string) => {
  // Ignore external links
  if (
    !relativePath ||
    relativePath.startsWith('http://') ||
    relativePath.startsWith('https://')
  ) {
    return relativePath;
  }
  // Remove any accidental leading/trailing slashes for safety
  let base = import.meta.env.BASE_URL || '/';
  if (!base.endsWith('/')) base += '/';
  // Remove leading slash from the relativePath (if present)
  let path = relativePath.replace(/^\/+/, '');
  const finalPath = `${base}${path}`.replace(/\/{2,}/g, '/');
  return finalPath;
};

const baseProjects: Project[] = [
  {
    title: 'Crop Disease Classification',
    description: 'Developed a deep learning model using ResNet architecture to automatically classify plant diseases from leaf images. Implemented comprehensive data pipeline including image extraction, preprocessing, and augmentation. Achieved high accuracy in identifying various crop diseases to help farmers make informed decisions about treatment and prevention.',
    tech: ['Python', 'PyTorch', 'ResNet', 'OpenCV', 'PIL', 'Data Augmentation', 'Transfer Learning'],
    image: '/images/projects/machine-learning/crop-disease-classification.jpg',
    github: 'https://github.com/Wachacha-jay/Computer_vision_Image_classification',
    demo: '#',
    category: 'deep-learning',
    date: 'February 5, 2025',
    results: 'Achieved 94% classification accuracy across 10 disease categories'
  },
  {
    title: 'Sentiment Analysis & Text Classification',
    description: 'Built an advanced NLP system for analyzing customer feedback and social media sentiment. Implemented text preprocessing, feature extraction using TF-IDF and word embeddings, and trained multiple classification models. Applied named entity recognition and topic modeling to extract actionable insights from unstructured text data.',
    tech: ['Python', 'NLTK', 'spaCy', 'Transformers', 'scikit-learn', 'BERT', 'TF-IDF', 'Word2Vec'],
    image: '/images/projects/deep-learning/sentiment-analysis.jpg',
    github: 'https://github.com/Wachacha-jay/Natural_language_processing',
    demo: '#',
    category: 'deep-learning',
    date: 'January 28, 2025',
    results: 'Processing 10K+ texts with 91% sentiment accuracy'
  },
  {
    title: 'Stock Volatility Predictor',
    description: 'Built a FastAPI-powered web application that enables users to analyze and forecast stock price volatility using advanced statistical models. Features ticker-based forecasting, multi-stock comparison, and interactive outputs with JSON forecasts and dynamic plots.',
    tech: ['Python', 'FastAPI', 'ARCH Models', 'SQLite3', 'AlphaVantage API', 'Plotly'],
    image: '/images/projects/machine-learning/stock-volatility.jpg',
    github: 'https://github.com/Wachacha-jay/Stock_volatility',
    demo: '#',
    category: 'machine-learning',
    date: 'January 22, 2025',
    results: 'Achieved 92% forecast accuracy'
  },
  {
    title: 'Real Estate Predictor Nairobi',
    description: 'A machine learning-powered Flask web application that predicts property prices in Nairobi based on user inputs and compares them with market trends. Dataset collected through web scraping of Nairobi property listings.',
    tech: ['Flask', 'Python', 'BeautifulSoup', 'Linear Regression'],
    image: '/images/projects/machine-learning/real-estate-predictor.jpg',
    github: 'https://github.com/Wachacha-jay/Real-Estate-price-predictor',
    demo: '#',
    category: 'machine-learning',
    date: 'December 24, 2024'
  },
  {
    title: 'Credit Card Customer Segmentation',
    description: 'Performed customer segmentation on credit card user data using K-Means clustering to identify distinct spending patterns and behaviors. Applied PCA for dimensionality reduction and leveraged data visualization tools.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'K-Means', 'PCA', 'Matplotlib', 'Seaborn', 'Plotly'],
    image: '/images/projects/machine-learning/customer-segmentation.jpg',
    github: 'https://github.com/Wachacha-jay/K-means_customer_segmentation',
    demo: '#',
    category: 'machine-learning',
    date: 'January 30, 2025'
  },
  {
    title: 'Business Analysis & Forecasting',
    description: 'Comprehensive business analysis project to segment businesses based on purchasing behavior and evaluate product performance. Includes business classification, sales forecasting, anomaly detection, and product performance analysis.',
    tech: ['Python', 'Pandas', 'Excel', 'ARIMA Model', 'Power BI'],
    image: '/images/projects/machine-learning/business-analysis.jpg',
    github: 'https://github.com/Wachacha-jay/Market_Analysis',
    demo: '#',
    category: 'machine-learning',
    date: 'December 10, 2024'
  },
  {
    title: 'Power BI Business Dashboards',
    description: 'Specialized in transforming complex datasets into actionable business insights through interactive Power BI dashboards. Delivered data-backed recommendations including optimizing product placements and reducing operational inefficiencies.',
    tech: ['Power BI', 'DAX', 'Power Query', 'Excel', 'Data Modeling'],
    image: '/images/projects/machine-learning/power-bi-dashboards.jpg',
    github: 'https://github.com/Wachacha-jay/powerBI_Projects',
    demo: '#',
    category: 'machine-learning',
    date: 'December 14, 2024'
  },
  {
    title: 'Agricultural Analysis Kenya',
    description: 'Comprehensive data analysis of agricultural practices across Kenya\'s counties using Python. Examined household demographics, farming methods, and regional trends to identify patterns in crop production and livestock farming.',
    tech: ['Python', 'Power Query', 'Matplotlib', 'Seaborn', 'Pandas'],
    image: '/images/projects/machine-learning/agricultural-analysis.jpg',
    github: 'https://github.com/Wachacha-jay/kilimo',
    demo: '#',
    category: 'machine-learning',
    date: 'December 7, 2024'
  },
  {
    title: 'Data Analysis with Excel',
    description: 'Conducted comprehensive market research on job trends using Microsoft Excel\'s advanced toolkit. Leveraged Power Query, XLOOKUP, INDEX-MATCH, and built interactive dashboards with PivotTables to identify industry demands and salary benchmarks.',
    tech: ['Excel', 'Power Query', 'PivotTables', 'XLOOKUP', 'INDEX-MATCH'],
    image: '/images/projects/machine-learning/excel-analysis.jpg',
    github: 'https://github.com/Wachacha-jay/Excel-data-analytics',
    demo: '#',
    category: 'machine-learning',
    date: 'February 11, 2024'
  },
  {
    title: 'Literature Synthesis & Gap Identifier Agent',
    description: 'Built an intelligent agentic system for automated literature review and research gap identification focused on Non-Communicable Diseases (NCDs) in Kenya. The system automatically scrapes research papers from arXiv, processes academic literature using advanced NLP, and identifies knowledge gaps in NCD research to guide future studies.',
    tech: ['Python', 'LangChain', 'LangGraph', 'Groq LLM', 'arXiv API', 'Scrapy', 'NLP', 'Research Analytics'],
    image: '/images/projects/ai-automation/literature-synthesis-agent.jpg',
    github: 'https://github.com/Wachacha-jay/NCD_Gap_finder_Agent',
    demo: '#',
    category: 'ai-automation',
    date: 'February 10, 2025',
    results: 'Automated analysis of 500+ research papers, identified 15 key research gaps'
  },
  {
    title: 'Career Navigator Agent',
    description: 'An intelligent agentic system designed to help people throughout their entire job search journey. The application provides personalized career guidance, job matching, resume optimization, interview preparation, and market insights. Built with modern AI technologies and containerized for scalable deployment.',
    tech: ['LangGraph', 'LangChain', 'Flask', 'Docker', 'Python', 'AI Agents', 'Career Analytics'],
    image: '/images/projects/ai-automation/career-navigator-agent.jpg',
    github: 'https://github.com/Wachacha-jay/Career_navigator_Agent',
    demo: '#',
    category: 'ai-automation',
    date: 'February 12, 2025',
    results: 'Streamlined job search process with 85% user satisfaction rate'
  }
];

const processImages = (projects: Project[]) =>
  projects.map((p) => {
    const imgPath = cleanImagePath(p.image);
    console.log('[DEBUG] Project:', p.title, '| Image:', imgPath);
    return {
      ...p,
      image: imgPath
    }
  });

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [projects, setProjects] = useState<Project[]>(() => processImages(baseProjects));

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
      category: 'machine-learning', // Will be set by ProjectsSection
      image: cleanImagePath(newProject.image),
    };
    setProjects((prevProjects) => [...prevProjects, projectWithCategory]);
  };

  const handleDeleteProject = (index: number, category: string) => {
    setProjects(projects.filter((project, i) => !(i === index && project.category === category)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation activeSection={activeSection} onSectionClick={scrollToSection} />
      <HeroSection onSectionClick={scrollToSection} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection 
        projects={projects} 
        onAddProject={handleAddProject} 
        onDeleteProject={handleDeleteProject} 
      />
      <ExperienceSection />
      <ContactSection />

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

