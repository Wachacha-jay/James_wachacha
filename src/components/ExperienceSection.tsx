import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Download, Mail, Phone, MapPin, Globe } from 'lucide-react';

const ExperienceSection = () => {
  const [showFullCV, setShowFullCV] = useState(false);

  const cvPreview = {
    name: "JAMES WACHACHA",
    title: "Data Scientist & Analytics Specialist",
    contact: {
      phone: "+254 729215235",
      email: "jameswachacha@gmail.com",
      location: "Nairobi, Kenya",
      portfolio: "https://wachacha-jay.github.io/James_wachacha/"
    },
    summary: "Highly analytical and results-driven Data Scientist with a Bachelor's degree in Mathematics and a strong foundation in Applied Data Science, eager to apply foundational experience in data analytics, problem-solving, and process improvement to a dynamic finance environment.",
    keySkills: [
      "Python (Pandas, NumPy, SciPy)",
      "Machine Learning & Deep Learning",
      "Power BI & Tableau",
      "SQL & Databases",
      "Statistical Analysis",
      "TensorFlow & PyTorch"
    ],
    currentRole: {
      title: "Data Scientist / MEARL Support",
      company: "Being Africa (NGO)",
      period: "Jan 2025 – Present",
      type: "Part-time"
    }
  };

  const fullExperience = [
    {
      title: 'Data Scientist / MEARL Support',
      company: 'Being Africa (NGO - Non-Communicable Diseases Focus)',
      period: 'Jan 2025 – Part-time',
      description: 'Managed comprehensive data collection, quality assurance, and reporting for Non-Communicable Disease (NCD) programs, ensuring accurate and timely insights for MEARL activities.',
      achievements: [
        'Spearheaded NCD survey data collection using Kobo Collect, tracking real-time entries and resolving inconsistencies to maintain high data accuracy and completeness',
        'Conducted daily check-ins with field teams and provided virtual guidance on Kobo data entry, ensuring 100% on-time data submissions',
        'Cleaned, aggregated, and analyzed NCD program data using Python (Pandas) and Excel, generating weekly analytical reports and visual dashboards (Power BI, Tableau) with actionable recommendations',
        'Ensured 100% adherence to confidentiality and data protection protocols, safeguarding sensitive health information'
      ]
    },
    {
      title: 'Data Analyst / Data Scientist',
      company: 'Bulwark Industries - Gypsum and Gypsum Products Manufacturers and Distributors',
      period: 'Jan 2023 – Dec 2024',
      location: 'Nairobi, Kenya',
      description: 'Transformed raw operational and market data into strategic insights, driving product optimization and cost efficiency.',
      achievements: [
        'Automated monthly financial forecasting reports (Excel/Power BI), improving budget allocation accuracy by 30% and enabling 15% cost savings in raw material procurement',
        'Analyzed 10+ product lines using Python (Pandas, NumPy) and SQL, identifying underperforming SKUs and recommending improvements that boosted sales by 18%',
        'Built interactive Power BI dashboards tracking sales, inventory, and customer satisfaction metrics, adopted company-wide for real-time decision-making',
        'Presented findings to executives through story-driven visualizations (Dash, Matplotlib)'
      ]
    },
    {
      title: 'Software Engineer / Data Analyst',
      company: 'TZAN Telcom - WIFI and Internet Service Providers',
      period: 'Sep 2022 – Sep 2024',
      location: 'Nairobi, Kenya',
      description: 'Drove data-informed network optimization and customer experience improvements through full-stack data solutions.',
      achievements: [
        'Analyzed 100k+ client data usage records (Python, SQL) to identify network congestion patterns',
        'Migrated legacy client records to a SQL-based management system (PostgreSQL), improving query speeds by 40% and enabling automated invoicing',
        'Designed a financial documentation pipeline (Python + AWS S3), reducing billing errors by 25% and saving 10+ hours/month in manual reconciliation',
        'Built real-time usage anomaly detection (Pandas, Scikit-learn), reducing outage frequency by 20%'
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
      title: "Automated Bank Reconciliation & Discrepancy Resolution System",
      description: "Python-based system to automate reconciliation of bank statements with internal transaction logs, reducing manual effort by 70%",
      tools: "Python (Pandas), Excel, SQL, Jupyter Notebook"
    },
    {
      title: "Nairobi Real Estate Price Predictor",
      description: "Machine learning model to predict property prices and analyze market trends with Flask web deployment",
      tools: "Python (Pandas, Scikit-learn), Flask, Beautiful Soup, Matplotlib/Plotly"
    },
    {
      title: "Stock Volatility Predictor",
      description: "AI-powered tool using ARCH/GARCH models to forecast stock price volatility with FastAPI backend",
      tools: "Python (Pandas, ARCH/GARCH), FastAPI, Alpha Vantage API, Plotly"
    }
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