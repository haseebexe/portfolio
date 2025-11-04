import { ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  image: string;
}

export function ProjectCard({ title, description, techStack, liveUrl, image }: ProjectCardProps) {
  return (
    <a   href={liveUrl}
          target="_blank"
          rel="noopener noreferrer">
    <div className="group bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-[#38bdf8]/50 transition-all hover:shadow-lg hover:shadow-[#38bdf8]/20 hover:-translate-y-1">
      {/* Project Image */}
      <div className="aspect-16-8 overflow-hidden bg-white/5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-[#f8fafc] mb-2">{title}</h3>
        <p className="text-[#f8fafc]/70 text-sm mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-[#38bdf8]/10 border-[#38bdf8]/30 text-[#38bdf8] text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* View Live Button */}
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#38bdf8] hover:text-[#3b82f6] transition-colors text-sm"
        >
          View Live
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
    </a>
  );
}
