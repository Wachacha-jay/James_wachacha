import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Download, Mail, Phone, MapPin, Globe } from 'lucide-react';
import jsPDF from 'jspdf';

const ExperienceSection = () => {
  const [showFullCV, setShowFullCV] = useState(false);

  const downloadResume = () => {
    const doc = new jsPDF();
    
    // Set font and title
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('JAMES WACHACHA NGARUIYA', 20, 20);
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('Data Scientist', 20, 30);
    
    // Contact information
    doc.setFontSize(10);
    doc.text('Phone: +254 729215235 | Email: jameswachacha@gmail.com', 20, 40);
    doc.text('Location: Nairobi, Kenya | Portfolio: https://wachacha-jay.github.io/James_wachacha/', 20, 47);
    
    // Professional Summary
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('PROFESSIONAL SUMMARY', 20, 60);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    
    const summaryLines = doc.splitTextToSize(cvPreview.summary, 170);
    let yPosition = 70;
    summaryLines.forEach((line: string) => {
      doc.text(line, 20, yPosition);
      yPosition += 5;
    });
    
    // Work Experience
    yPosition += 10;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('WORK EXPERIENCE', 20, yPosition);
    yPosition += 10;
    
    fullExperience.forEach((exp) => {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(exp.title, 20, yPosition);
      yPosition += 6;
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text(exp.company, 20, yPosition);
      yPosition += 5;
      doc.text(exp.period, 20, yPosition);
      yPosition += 8;
      
      exp.achievements.forEach((achievement) => {
        const achievementLines = doc.splitTextToSize(`• ${achievement}`, 165);
        achievementLines.forEach((line: string) => {
          if (yPosition > 270) {
            doc.addPage();
            yPosition = 20;
          }
          doc.text(line, 25, yPosition);
          yPosition += 5;
        });
      });
      yPosition += 5;
    });
    
    // Add new page for projects and education
    doc.addPage();
    yPosition = 20;
    
    // Featured Projects
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('FEATURED PROJECTS', 20, yPosition);
    yPosition += 10;
    
    keyProjects.forEach((project) => {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(project.title, 20, yPosition);
      yPosition += 6;
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      const descLines = doc.splitTextToSize(project.description, 170);
      descLines.forEach((line: string) => {
        doc.text(line, 20, yPosition);
        yPosition += 5;
      });
      
      doc.setFont('helvetica', 'italic');
      doc.text(`Tools: ${project.tools}`, 20, yPosition);
      yPosition += 10;
    });
    
    // Education
    yPosition += 5;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('EDUCATION', 20, yPosition);
    yPosition += 10;
    
    education.forEach((edu) => {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(edu.degree, 20, yPosition);
      yPosition += 6;
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text(edu.institution, 20, yPosition);
      yPosition += 5;
      doc.text(edu.year, 20, yPosition);
      yPosition += 8;
    });
    
    // Technical Skills
    yPosition += 5;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('TECHNICAL SKILLS', 20, yPosition);
    yPosition += 10;
    
    const skills = [
      'GenAI/NLP & Machine Learning: Computer vision, NLP (BERT, GPT), sentiment analysis, NER, text classification, Agentic AI Workflows (LangChain, LangGraph), RAG techniques, Deep Learning (TensorFlow, Keras, PyTorch)',
      'Data Analysis & Manipulation: Python (Pandas, NumPy, SciPy), SQL (SQL Server, MySQL, PostgreSQL), Microsoft Excel, Google Sheets',
      'Business Intelligence & Visualization: Microsoft Power BI, Tableau, Matplotlib, Seaborn, Plotly',
      'Process Improvement & Automation: Data Pipelines, Fast API, Flask, automation scripting',
      'Core Competencies: Problem-Solving Skills, Analytical Mind, Organized, Results-Driven, Self-Starter, Interpersonal and Communication Skills, Collaboration'
    ];
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    skills.forEach((skill) => {
      const skillLines = doc.splitTextToSize(skill, 170);
      skillLines.forEach((line: string) => {
        doc.text(line, 20, yPosition);
        yPosition += 5;
      });
      yPosition += 2;
    });
    
    // Save the PDF
    doc.save('James_Wachacha_Resume.pdf');
  };

  const cvPreview = {
    name: "JAMES WACHACHA NGARUIYA",
    title: "Data Scientist",
    contact: {
      phone: "+254 729215235",
      email: "jameswachacha@gmail.com",
      location: "Nairobi, Kenya",
      portfolio: "https://wachacha-jay.github.io/James_wachacha/"
    },
    summary: "Highly analytical and results-driven Data Scientist with a Bachelor's degree in Mathematics and a strong foundation in Applied Data Science, eager to apply foundational experience in data analytics, problem-solving, and process improvement. I have a proven ability to collaborate effectively with cross-functional teams and deliver impactful insights. I'm a self-starter with a proactive approach to identifying and resolving discrepancies in large datasets.",
    keySkills: [
      "GenAI/NLP & Machine Learning",
      "Data Analysis & Manipulation (Python, SQL)",
      "Business Intelligence & Visualization",
      "Process Improvement & Automation",
      "Deep Learning (TensorFlow, PyTorch)",
      "LangChain & Agentic AI Workflows"
    ],
    currentRole: {
      title: "Data Scientist / Analyst",
      company: "Bulwark Industries",
      period: "Jan 2023 – Till date",
      type: "Full-time"
    }
  };

  const fullExperience = [
    {
      title: 'Data Scientist / Analyst',
      company: 'Bulwark Industries',
      period: 'Jan 2023 – Till date',
      location: 'Nairobi, Kenya',
      description: 'Leading data analytics and machine learning initiatives for manufacturing optimization and business intelligence.',
      achievements: [
        'Customer Segmentation & Sales Optimization with NLP: Leveraged Natural Language Processing (NLP) to analyze unstructured customer feedback, reviews, and support interactions. This enabled the identification of distinct customer segments, which resulted in a 25% increase in sales conversion rates for targeted segments and a 10% reduction in sales cycle length.',
        'Automated Reporting & Forecasting: Developed and automated monthly financial forecasting reports using Excel and Power BI. This improved budget allocation accuracy by 30% and led to a 15% reduction in raw material procurement costs by streamlining data and KPI processes.',
        'Data Analysis: Performed statistical analysis on over 10 product lines using Python and SQL to identify underperforming SKUs, leading to an 18% boost in sales.',
        'Dashboard Development: Designed and implemented interactive Power BI dashboards for tracking sales, inventory, and customer satisfaction, which facilitated company-wide, real-time decision-making.'
      ]
    },
    {
      title: 'Data Scientist / MEARL Support',
      company: 'Being Africa (NGO - Non-Communicable Diseases Focus)',
      period: 'Jan 2025 – Parttime',
      location: 'Nairobi, Kenya',
      description: 'Managed comprehensive data collection, quality assurance, and reporting for Noncommunicable Disease (NCD) programs ensuring accurate and timely insights for MEARL activities.',
      achievements: [
        'Spearheaded NCD survey data collection using Kobo Collect, tracking real-time entries and resolving inconsistencies to maintain high data accuracy and completeness.',
        'Conducted daily check-ins with field teams and provided virtual guidance on Kobo data entry, ensuring 100% on-time data submissions.',
        'Cleaned, aggregated, and analyzed NCD program data using Python (Pandas) and Excel, generating weekly analytical reports and visual dashboards (Power BI, Tableau) with actionable recommendations.',
        'Ensured 100% adherence to confidentiality and data protection protocols, safeguarding sensitive health information and contributing to knowledge management efforts.'
      ]
    },
    {
      title: 'Software Engineer / Data Analyst',
      company: 'TZAN Telcom',
      period: 'Sep 2022 - Sep 2023',
      location: 'Nairobi, Kenya',
      description: 'Developed data engineering solutions and analytics systems for telecommunications operations, focusing on financial automation, network optimization, and system modernization.',
      achievements: [
        'Financial Documentation Pipeline: Designed a financial documentation pipeline using Python and AWS S3, reducing billing errors by 25% and saving over 10 hours per month in manual reconciliation.',
        'Network Optimization: Analyzed over 100,000 client data usage records with Python and SQL to identify network congestion patterns.',
        'Data Migration: Migrated legacy client records to a SQL-based management system (PostgreSQL), which improved query speeds by 40% and enabled automated invoicing.',
        'Anomaly Detection: Built a real-time usage anomaly detection system using Pandas and Scikit-learn, reducing outage frequency by 20%.'
      ]
    }
  ];

  const education = [
    {
      degree: "APPLIED DATA SCIENCE AND DEEP LEARNING",
      institution: "Worldquant University",
      year: "Finished: February 2025"
    },
    {
      degree: "SOFTWARE ENGINEERING",
      institution: "ALX Africa",
      year: "Finished 2024"
    },
    {
      degree: "BACHELOR OF SCIENCE IN MATHEMATICS",
      institution: "University of Embu",
      year: "Graduated: September 2018"
    }
  ];

  const keyProjects = [
    {
      title: "Credit Scoring Application (End-to-End ML Pipeline)",
      description: "Designed and deployed an end-to-end credit scoring system for a FinTech client to evaluate loan applicants using alternative credit signals. Engineered features from structured and unstructured data, achieving 25% improvement in prediction accuracy. Built and compared ML models with XGBoost selected for production. Implemented explainable AI (SHAP, LIME) for model interpretability. Deployed as REST API using Flask + Docker on AWS EC2 with automated training pipelines using Airflow and MLflow for experiment tracking. Reduced default rates by 15% within the first 3 months.",
      tools: "Python, Scikit-learn, Flask, SQL, AWS, Docker, XGBoost, SHAP, LIME, Airflow, MLflow"
    },
    {
      title: "AI-Powered Customer Insight & Feedback System for LMICs",
      description: "Designed and built an AI-enabled system for automating the collection, analysis, and reporting of customer/community feedback in low- and middle-income countries. Designed LLM-based workflow using LangChain and Python to process unstructured feedback from various sources (SMS, social media, call center transcripts). Used NLP techniques like sentiment analysis and NER to extract key entities and emotions. Employed prompt engineering to generate summary reports and actionable insights. Deployed using Flask and Docker to provide REST API for easy integration.",
      tools: "Python, LangChain, NLP, Sentiment Analysis, NER, Flask, Docker, Prompt Engineering"
    },
    {
      title: "Automated Bank Reconciliation & Discrepancy Resolution System",
      description: "Developed a Python-based system to automate the reconciliation of simulated bank statements with internal transaction logs, identifying and flagging discrepancies for further investigation. Designed data pipeline to ingest simulated bank statements and internal transaction data from various formats. Implemented algorithms using Pandas to match transactions based on multiple criteria, identifying perfectly matched, partially matched, and unmatched transactions. Created discrepancy reporting module that categorized unreconciled items and suggested potential causes. Significantly improved efficiency, reducing hypothetical manual reconciliation time by 70%.",
      tools: "Python (Pandas), Excel, SQL, Jupyter Notebook"
    }
  ];

  const experiences = [
    {
      title: 'Data Scientist / Analyst',
      company: 'Bulwark Industries',
      period: '2023 - Present',
      description: 'Leading data analytics and machine learning initiatives for manufacturing optimization and business intelligence. Leveraging NLP for customer segmentation, developing automated forecasting systems, and creating interactive dashboards for real-time decision-making.'
    },
    {
      title: 'Data Scientist / MEARL Support',
      company: 'Being Africa (NGO)',
      period: '2025 - Present',
      description: 'Managing comprehensive data collection, quality assurance, and reporting for Noncommunicable Disease programs. Spearheading NCD survey data collection, conducting analysis using Python and Excel, and generating visual dashboards with actionable recommendations.'
    },
    {
      title: 'Software Engineer / Data Analyst',
      company: 'TZAN Telcom',
      period: '2022 - 2023',
      description: 'Developed data engineering solutions and analytics systems for telecommunications operations, focusing on financial automation, network optimization, and system modernization.'
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
                      onClick={downloadResume}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Complete Resume
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
