import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import ExpertiseSection from '@/components/ExpertiseSection';
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

  // Scroll listener removed as we are switching to tab-based navigation

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

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection onSectionClick={setActiveSection} />;
      case 'expertise':
        return <ExpertiseSection />;
      case 'projects':
        return (
          <ProjectsSection
            projects={projects}
            onAddProject={handleAddProject}
            onDeleteProject={handleDeleteProject}
          />
        );
      case 'experience':
        return <ExperienceSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection onSectionClick={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation activeSection={activeSection} onSectionClick={setActiveSection} />

      <main className="flex-grow container mx-auto px-6 py-8 animate-in fade-in duration-500">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2025 James Wachacha Portfolio.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

