import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { Button } from '../components/ui/button';

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'React', 'WordPress', 'HTML/CSS'];

  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'Modern admin dashboard built with React and real-time analytics. Features include inventory management, sales tracking, and customer insights.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      liveUrl: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1676792519027-7c42006d7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjE4NTc3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'React',
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio site with smooth animations and modern design. Built with pure HTML, CSS, and JavaScript for optimal performance.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      liveUrl: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1758611971148-891783785fa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGRldmVsb3BtZW50JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTg5NDY1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'HTML/CSS',
    },
    {
      title: 'WordPress Custom Theme',
      description: 'Fully customized WordPress theme with Gutenberg block support. Includes custom post types, ACF integration, and WooCommerce compatibility.',
      techStack: ['WordPress', 'PHP', 'JavaScript', 'ACF'],
      liveUrl: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1722596627369-a743837c7176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JkcHJlc3MlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MTg5NDY1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'WordPress',
    },
    {
      title: 'Social Media App',
      description: 'Full-featured social media application with real-time messaging, post sharing, and user profiles built with React and Firebase.',
      techStack: ['React', 'Firebase', 'Material-UI', 'Redux'],
      liveUrl: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1676792519027-7c42006d7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjE4NTc3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'React',
    },
    {
      title: 'Landing Page Template',
      description: 'Conversion-optimized landing page template with responsive design and smooth scroll animations. Perfect for product launches.',
      techStack: ['HTML5', 'CSS3', 'JavaScript'],
      liveUrl: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1758611971148-891783785fa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGRldmVsb3BtZW50JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTg5NDY1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'HTML/CSS',
    },
    {
      title: 'Business Website',
      description: 'Corporate WordPress website with custom page builder, SEO optimization, and contact form integrations.',
      techStack: ['WordPress', 'PHP', 'Elementor', 'SEO'],
      liveUrl: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1722596627369-a743837c7176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JkcHJlc3MlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MTg5NDY1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'WordPress',
    },
    {
      title: 'Task Management App',
      description: 'Kanban-style task management application with drag-and-drop functionality, team collaboration, and deadline tracking.',
      techStack: ['React', 'TypeScript', 'DnD Kit', 'Tailwind'],
      liveUrl: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1676792519027-7c42006d7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjE4NTc3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'React',
    },
    {
      title: 'Restaurant Website',
      description: 'Interactive restaurant website with online menu, reservation system, and image gallery. Fully responsive and optimized.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      liveUrl: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1758611971148-891783785fa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGRldmVsb3BtZW50JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTg5NDY1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'HTML/CSS',
    },
    {
      title: 'Blog Platform',
      description: 'Custom WordPress blog platform with advanced filtering, social sharing, and newsletter integration.',
      techStack: ['WordPress', 'PHP', 'JavaScript', 'MailChimp'],
      liveUrl: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1722596627369-a743837c7176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JkcHJlc3MlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MTg5NDY1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'WordPress',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="py-12 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-[#f8fafc] mb-4">My Projects</h1>
          <p className="text-[#f8fafc]/70 max-w-2xl mx-auto">
            A collection of web applications and websites I've built using modern technologies. 
            Each project demonstrates different skills and approaches to problem-solving.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? 'default' : 'outline'}
                className={
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] text-white'
                    : 'border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8]/10 hover:text-[#38bdf8]'
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#f8fafc]/60">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
