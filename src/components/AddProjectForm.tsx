import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
}

interface AddProjectFormProps {
  onAddProject: (project: Project) => void;
  onCancel: () => void;
  selectedCategory: string;
}

const AddProjectForm = ({ onAddProject, onCancel, selectedCategory }: AddProjectFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    github: '',
    demo: ''
  });
  const [techStack, setTechStack] = useState<string[]>([]);
  const [currentTech, setCurrentTech] = useState('');

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

  const handleAddTech = () => {
    if (currentTech.trim() && !techStack.includes(currentTech.trim())) {
      setTechStack([...techStack, currentTech.trim()]);
      setCurrentTech('');
    }
  };

  const handleRemoveTech = (techToRemove: string) => {
    setTechStack(techStack.filter(tech => tech !== techToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.description && techStack.length > 0) {
      onAddProject({
        ...formData,
        tech: techStack
      });
    }
  };

  return (
    <Card className="bg-white/5 backdrop-blur-lg border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          Add New {getCategoryDisplayName(selectedCategory)} Project
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onCancel}
            className="text-white/60 hover:text-white"
          >
            <X className="w-4 h-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white/80 text-sm mb-2">Project Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50"
              placeholder="Enter project title"
              required
            />
          </div>

          <div>
            <label className="block text-white/80 text-sm mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 h-24 resize-none"
              placeholder="Describe your project"
              required
            />
          </div>

          <div>
            <label className="block text-white/80 text-sm mb-2">Technologies</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={currentTech}
                onChange={(e) => setCurrentTech(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTech())}
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50"
                placeholder="Add technology"
              />
              <Button type="button" onClick={handleAddTech} size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-blue-600/20 text-blue-300">
                  {tech}
                  <button
                    type="button"
                    onClick={() => handleRemoveTech(tech)}
                    className="ml-1 hover:text-red-400"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-white/80 text-sm mb-2">Image URL</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/80 text-sm mb-2">GitHub URL</label>
              <input
                type="url"
                value={formData.github}
                onChange={(e) => setFormData({...formData, github: e.target.value})}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50"
                placeholder="https://github.com/..."
              />
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-2">Demo URL</label>
              <input
                type="url"
                value={formData.demo}
                onChange={(e) => setFormData({...formData, demo: e.target.value})}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50"
                placeholder="https://demo.com"
              />
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Add Project
            </Button>
            <Button type="button" variant="outline" onClick={onCancel} className="border-white/30 text-white hover:bg-white/10">
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddProjectForm;
