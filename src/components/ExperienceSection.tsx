import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Download, Mail, Phone, MapPin, Globe } from 'lucide-react';

const ExperienceSection = () => {
  const [showFullCV, setShowFullCV] = useState(false);

  const cvPreview = {
    name: "JAMES WACHACHA",
    title: "Machine Learning Specialist & AI Engineer",
    contact: {
      phone: "+254 729215235",
      email: "jameswachacha@gmail.com",
      location: "Nairobi, Kenya",
      portfolio: "https://wachacha-jay.github.io/James_wachacha/"
    },
    summary: "Machine Learning Specialist and AI Engineer with 2+ years of proven experience in developing and deploying scalable AI solutions. Expert in Python, TensorFlow, PyTorch, and scikit-learn with demonstrated success in transforming business challenges into production-ready machine learning systems. Delivered measurable results including 30% improvement in forecasting accuracy and 18% sales optimization through data-driven solutions.",
    keySkills: [
      "Python (TensorFlow, PyTorch, scikit-learn)",
      "Machine Learning & Deep Learning",
      "NLP & Computer Vision",
      "Data Engineering & MLOps",
      "Statistical Analysis & Modeling",
      "Power BI & Advanced Analytics"
    ],
    currentRole: {
      title: "Senior Data Analyst / ML Engineer",
      company: "Bulwark Industries",
      period: "Jan 2023 – Present",
      type: "Full-time"
    }
  };

  const fullExperience = [
    {
      title: 'Senior Data Analyst / Machine Learning Engineer',
      company: 'Bulwark Industries - Leading Gypsum Products Manufacturer',
      period: 'January 2023 – Present',
      location: 'Nairobi, Kenya',
      description: 'Lead machine learning initiatives and advanced analytics for manufacturing optimization, predictive maintenance, and business intelligence across 10+ product lines.',
      achievements: [
        'Developed and deployed machine learning models for demand forecasting using Python (TensorFlow, scikit-learn), achieving 30% improvement in forecast accuracy and enabling $150K+ annual cost savings through optimized inventory management',
        'Built end-to-end MLOps pipeline for production quality prediction using computer vision (OpenCV, PyTorch), reducing defect rates by 25% and improving manufacturing efficiency',
        'Designed automated financial forecasting system with Power BI integration, processing 50K+ transactions monthly and improving budget allocation accuracy by 35%',
        'Implemented NLP-powered customer sentiment analysis on 10K+ customer feedback records, identifying key satisfaction drivers and contributing to 18% increase in customer retention',
        'Created real-time production monitoring dashboards using Python (Pandas, NumPy) and SQL, enabling predictive maintenance and reducing equipment downtime by 20%',
        'Led cross-functional data science initiatives, presenting machine learning insights to C-level executives and driving data-driven strategic decisions'
      ]
    },
    {
      title: 'Software Engineer / Data Analyst',
      company: 'TZAN Telcom',
      period: 'September 2022 – September 2023',
      location: 'Nairobi, Kenya',
      description: 'Developed data engineering solutions and analytics systems for telecommunications operations, focusing on financial automation, network optimization, and system modernization.',
      achievements: [
        'Designed financial documentation pipeline using Python and AWS S3, reducing billing errors by 25% and saving over 10 hours per month in manual reconciliation',
        'Analyzed over 100,000 client data usage records with Python and SQL to identify network congestion patterns and optimize network performance',
        'Migrated legacy client records to SQL-based management system (PostgreSQL), improving query speeds by 40% and enabling automated invoicing',
        'Built real-time usage anomaly detection system using Pandas and Scikit-learn, reducing outage frequency by 20% through proactive monitoring'
      ]
    },
    {
      title: 'Data Scientist / Analytics Consultant',
      company: 'Freelance & Contract Projects',
      period: 'September 2022 – December 2022',
      location: 'Remote',
      description: 'Delivered specialized machine learning and data science solutions for multiple clients across telecommunications and healthcare sectors.',
      achievements: [
        'Developed deep learning models for network anomaly detection processing 100K+ data points, improving system reliability by 20% for telecommunications client',
        'Built automated data pipeline using Python and PostgreSQL for healthcare data management, reducing manual processing time by 70%',
        'Created customer segmentation models using unsupervised learning (K-means, DBSCAN), enabling targeted marketing strategies with 15% improved conversion rates',
        'Implemented real-time fraud detection system using ensemble methods (Random Forest, XGBoost), achieving 95% accuracy in fraud identification'
      ]
    }
  ];

  const education = [
    {
      degree: "BACHELOR OF SCIENCE IN MATHEMATICS",
      institution: "University of Embu",
      year: "Graduated: September 2018"
    },
    {
      degree: "SOFTWARE ENGINEERING",
      institution: "ALX Africa",
      year: "Finished 2024"
    },
    {
      degree: "APPLIED DATA SCIENCE AND DEEP LEARNING",
      institution: "Worldquant University",
      year: "Finished: February 2025",
      majors: "Data Science and Machine Learning"
    }
  ];

  const keyProjects = [
    {
      title: "Production Quality Prediction System",
      description: "Computer vision ML model for real-time gypsum product quality assessment, reducing defect rates by 25% through automated visual inspection",
      tools: "Python (PyTorch, OpenCV, scikit-learn), MLOps, Computer Vision, REST API"
    },
    {
      title: "Demand Forecasting & Inventory Optimization",
      description: "Time series forecasting models for inventory management across 10+ product lines, achieving 30% improvement in forecast accuracy",
      tools: "Python (TensorFlow, ARIMA, Prophet), SQL, Power BI, Statistical Modeling"
    },
    {
      title: "Customer Sentiment Analysis Engine",
      description: "NLP-powered system for analyzing customer feedback and reviews, improving customer retention by 18% through actionable insights",
      tools: "Python (NLTK, spaCy, Transformers), NLP, Sentiment Analysis, Data Visualization"
    },
    {
      title: "Coder Companion - AI Development Assistant",
      description: "Multi-agent AI system built with LangGraph for automated code generation and project development workflows",
      tools: "Python (LangGraph, LangChain), Multi-Agent Systems, AI Automation, Code Generation"
    }
  ];

  const experiences = [
    {
      title: 'Senior Data Analyst / Machine Learning Engineer',
      company: 'Bulwark Industries',
      period: '2023 - Present',
      description: 'Leading machine learning initiatives in manufacturing optimization, developing computer vision models for quality control, and implementing predictive analytics solutions that drive operational efficiency and cost savings.'
    },
    {
      title: 'Software Engineer / Data Analyst',
      company: 'TZAN Telcom',
      period: '2022 - 2023',
      description: 'Developed data engineering solutions and analytics systems for telecommunications operations, focusing on financial automation, network optimization, and system modernization.'
    },
    {
      title: 'Data Scientist / Analytics Consultant',
      company: 'Freelance & Contract Projects',
      period: '2022 - 2023',
      description: 'Delivered specialized AI and machine learning solutions for telecommunications and healthcare clients, including network anomaly detection, fraud prevention systems, and automated data pipelines.'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Professional Experience</h2>
        
        {/* CV Preview Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-white">{cvPreview.name}</CardTitle>
                  <p className="text-blue-400 font-semibold mt-1">{cvPreview.title}</p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setShowFullCV(!showFullCV)}
                  className="border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm"
                >
                  {showFullCV ? (
                    <>
                      <ChevronUp className="mr-2 h-4 w-4" />
                      Hide Full CV
                    </>
                  ) : (
                    <>
                      <ChevronDown className="mr-2 h-4 w-4" />
                      View Full CV
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {!showFullCV ? (
                /* CV Preview */
                <div className="space-y-6">
                  {/* Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-white/80">
                      <Phone className="mr-2 h-4 w-4 text-blue-400" />
                      {cvPreview.contact.phone}
                    </div>
                    <div className="flex items-center text-white/80">
                      <Mail className="mr-2 h-4 w-4 text-blue-400" />
                      {cvPreview.contact.email}
                    </div>
                    <div className="flex items-center text-white/80">
                      <MapPin className="mr-2 h-4 w-4 text-blue-400" />
                      {cvPreview.contact.location}
                    </div>
                    <div className="flex items-center text-white/80">
                      <Globe className="mr-2 h-4 w-4 text-blue-400" />
                      <a href={cvPreview.contact.portfolio} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                        Portfolio
                      </a>
                    </div>
                  </div>

                  {/* Current Role */}
                  <div className="border-l-4 border-blue-400 pl-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-white">{cvPreview.currentRole.title}</h4>
                      <Badge variant="secondary" className="text-xs">{cvPreview.currentRole.type}</Badge>
                    </div>
                    <p className="text-blue-400 text-sm">{cvPreview.currentRole.company}</p>
                    <p className="text-white/60 text-sm">{cvPreview.currentRole.period}</p>
                  </div>

                  {/* Summary */}
                  <div>
                    <h4 className="font-semibold text-white mb-2">Professional Summary</h4>
                    <p className="text-white/80 text-sm leading-relaxed">{cvPreview.summary}</p>
                  </div>

                  {/* Key Skills */}
                  <div>
                    <h4 className="font-semibold text-white mb-3">Key Technical Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {cvPreview.keySkills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="border-white/20 text-white">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <Button
                      onClick={() => setShowFullCV(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      View Complete Resume
                    </Button>
                  </div>
                </div>
              ) : (
                /* Full CV Content */
                <div className="space-y-8 max-h-[80vh] overflow-y-auto pr-4">
                  {/* Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm pb-4 border-b border-white/10">
                    <div className="flex items-center text-white/80">
                      <Phone className="mr-2 h-4 w-4 text-blue-400" />
                      {cvPreview.contact.phone}
                    </div>
                    <div className="flex items-center text-white/80">
                      <Mail className="mr-2 h-4 w-4 text-blue-400" />
                      {cvPreview.contact.email}
                    </div>
                    <div className="flex items-center text-white/80">
                      <MapPin className="mr-2 h-4 w-4 text-blue-400" />
                      {cvPreview.contact.location}
                    </div>
                    <div className="flex items-center text-white/80">
                      <Globe className="mr-2 h-4 w-4 text-blue-400" />
                      <a href={cvPreview.contact.portfolio} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                        Portfolio
                      </a>
                    </div>
                  </div>

                  {/* Professional Summary */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Professional Summary</h3>
                    <p className="text-white/80 leading-relaxed">{cvPreview.summary}</p>
                  </div>

                  {/* Work Experience */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Work Experience</h3>
                    <div className="space-y-6">
                      {fullExperience.map((exp, index) => (
                        <div key={index} className="border-l-4 border-blue-400 pl-6">
                          <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                          <p className="text-blue-400 font-medium">{exp.company}</p>
                          <p className="text-white/60 text-sm mb-2">{exp.period}</p>
                          <p className="text-white/80 text-sm mb-3">{exp.description}</p>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-white/70 text-sm flex items-start">
                                <span className="text-blue-400 mr-2">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Projects */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Featured Projects</h3>
                    <div className="space-y-4">
                      {keyProjects.map((project, index) => (
                        <div key={index} className="bg-white/5 rounded-lg p-4">
                          <h4 className="font-semibold text-white mb-2">{project.title}</h4>
                          <p className="text-white/80 text-sm mb-2">{project.description}</p>
                          <p className="text-blue-400 text-xs">
                            <strong>Tools:</strong> {project.tools}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Education</h3>
                    <div className="space-y-3">
                      {education.map((edu, index) => (
                        <div key={index} className="border-l-4 border-blue-400 pl-4">
                          <h4 className="font-semibold text-white">{edu.degree}</h4>
                          <p className="text-blue-400 text-sm">{edu.institution}</p>
                          <p className="text-white/60 text-sm">{edu.year}</p>
                          {edu.majors && (
                            <p className="text-white/70 text-sm">Majors: {edu.majors}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Section */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-white mb-2">Data Analysis & Manipulation</h5>
                        <p className="text-white/80">Python (Pandas, NumPy, SciPy), SQL (SQL Server, MySQL, PostgreSQL), Microsoft Excel, Google Sheets</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-2">Business Intelligence & Visualization</h5>
                        <p className="text-white/80">Microsoft Power BI, Tableau, Matplotlib, Seaborn, Plotly</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-2">Machine Learning & AI</h5>
                        <p className="text-white/80">Statistical Analysis, Regression, Classification, Clustering, TensorFlow, Keras, PyTorch</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-2">Process Improvement & Automation</h5>
                        <p className="text-white/80">Data Pipelines, FastAPI, Flask, Automation Scripting, LangChain, LangGraph</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
