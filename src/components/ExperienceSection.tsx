
const ExperienceSection = () => {
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
  );
};

export default ExperienceSection;
