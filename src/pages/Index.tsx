
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import { Project } from '@/types/project';
import { baseProjects } from '@/data/projects';
import { cleanImagePath } from '@/utils/imageUtils';

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

