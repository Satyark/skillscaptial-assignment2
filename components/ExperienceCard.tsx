"use client";

import { useState } from 'react';
import { Experience } from '@/types/hospitality';
import ProjectCard from './ProjectCard';
import PropertyBadge from './PropertyBadge';
import { ChevronDown, ChevronUp, MapPin, CalendarRange } from 'lucide-react';
import { formatPropertyName } from '@/lib/utils';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden border border-border transition-all duration-300 hover:shadow-lg">
      <div 
        className="p-6 cursor-pointer relative"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Property Badge */}
        <div className="absolute right-6 top-6">
          <PropertyBadge 
            type={experience.propertyType} 
            isFlagship={experience.isFlagship}
          />
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-1">
              {formatPropertyName(experience.property)}
            </h2>
            <h3 className="text-lg font-medium text-primary mb-2">
              {experience.role}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground mb-3">
              <div className="flex items-center mr-4 mb-1 sm:mb-0">
                <MapPin className="h-4 w-4 mr-1" /> 
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center">
                <CalendarRange className="h-4 w-4 mr-1" /> 
                <span>{experience.duration}</span>
              </div>
            </div>
          </div>
          
          <button
            className="mt-2 md:mt-0 flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
            aria-expanded={expanded}
          >
            {expanded ? (
              <>
                <span className="mr-1">Hide Projects</span>
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                <span className="mr-1">Show Projects</span>
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>
      
      {expanded && (
        <div className="bg-muted/20 p-6 border-t border-border animate-in slide-in-from-top duration-300 ease-in-out">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;