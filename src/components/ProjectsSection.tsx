import { useState } from 'react';
import { Plus, Github, ExternalLink, Trash2 } from 'lucide-react';
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

interface ProjectsSectionProps {
  projects: Project[];
  onAddProject: (project: Omit<Project, 'category'>) => void;
  onDeleteProject: (index: number, category: string) => void;
}

const ProjectsSection = ({ projects, onAddProject, onDeleteProject }: ProjectsSectionProps) => {
  const [showAddProject, setShowAddProject] = useState(false);
  const [activeTab, setActiveTab] = useState<'machine-learning' | 'deep-learning' | 'ai-automation'>('machine-learning');
  const fallbackImage =
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop";

  const handleAddProject = (newProject: Omit<Project, 'category'>) => {
    onAddProject(newProject);
    setShowAddProject(false);
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

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          <Button
            onClick={() => setShowAddProject(true)}
            className="bg-primary hover:bg-yellow-600 text-black font-semibold"
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
          <TabsList className="grid w-full grid-cols-3 bg-white/5 mb-8 border border-white/10">
            <TabsTrigger
              value="machine-learning"
              className="data-[state=active]:bg-primary data-[state=active]:text-black text-white/70"
            >
              Machine Learning
            </TabsTrigger>
            <TabsTrigger
              value="deep-learning"
              className="data-[state=active]:bg-primary data-[state=active]:text-black text-white/70"
            >
              Deep Learning
            </TabsTrigger>
            <TabsTrigger
              value="ai-automation"
              className="data-[state=active]:bg-primary data-[state=active]:text-black text-white/70"
            >
              AI Automation
            </TabsTrigger>
          </TabsList>

          {['machine-learning', 'deep-learning', 'ai-automation'].map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getProjectsByCategory(category).map((project, index) => (
                  <Card key={`${category}-${index}`} className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image || fallbackImage}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                        onError={e => {
                          // @ts-ignore
                          e.target.onerror = null;
                          // @ts-ignore
                          e.target.src = fallbackImage;
                        }}
                      />
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => onDeleteProject(projects.findIndex(p => p === project), category)}
                          className="bg-red-600/80 hover:bg-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      {project.date && (
                        <div className="absolute bottom-2 left-2">
                          <Badge className="bg-black/80 text-primary border border-primary/20 text-xs">
                            {project.date}
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      <CardDescription className="text-white/70">
                        {project.description}
                      </CardDescription>
                      {project.results && (
                        <p className="text-primary text-sm font-semibold mt-2">
                          🎯 {project.results}
                        </p>
                      )}
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border border-primary/20">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {project.github && (
                          <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-primary hover:border-primary/50" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-1" />
                              Project
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button size="sm" className="bg-primary hover:bg-yellow-600 text-black font-medium" asChild>
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
  );
};

export default ProjectsSection;
