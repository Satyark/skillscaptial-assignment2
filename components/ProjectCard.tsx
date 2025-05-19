"use client";

import { useState } from 'react';
import { Project } from '@/types/hospitality';
import { Calendar, PenTool as Tool, Sparkles, Users } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import MetricsDisplay from './MetricsDisplay';
import Initiatives from './Initiatives';
import FeedbackDisplay from './FeedbackDisplay';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'metrics' | 'team'>('overview');
  
  return (
    <div className="bg-card rounded-lg shadow-sm overflow-hidden border border-border group hover:shadow-md transition-all duration-300">
      {/* Project Image */}
      {project.imageUrl && (
        <div className="relative h-52 w-full overflow-hidden bg-muted">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      )}
      
      <div className="p-5">
        <h3 className="text-xl font-medium mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{project.overview}</p>
        
        {/* Project Details */}
        <div className="space-y-4">
          {/* Metadata row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            {project.launchDate && (
              <div className="flex items-center">
                <Calendar className="h-3.5 w-3.5 mr-1" />
                <span>{formatDate(project.launchDate)}</span>
              </div>
            )}
            
            {project.tools && project.tools.length > 0 && (
              <div className="flex items-center">
                <Tool className="h-3.5 w-3.5 mr-1" />
                <span>{project.tools.slice(0, 2).join(", ")}{project.tools.length > 2 ? ` + ${project.tools.length - 2}` : ""}</span>
              </div>
            )}
            
            {project.team && project.team.length > 0 && (
              <div className="flex items-center">
                <Users className="h-3.5 w-3.5 mr-1" />
                <span>{project.team.length} team member{project.team.length !== 1 ? 's' : ''}</span>
              </div>
            )}
          </div>
          
          {/* Tab navigation */}
          <div className="flex border-b border-border">
            <button 
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === 'overview' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            {project.metrics && (
              <button 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'metrics' 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setActiveTab('metrics')}
              >
                Metrics
              </button>
            )}
            {project.team.length > 0 && (
              <button 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'team' 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setActiveTab('team')}
              >
                Team
              </button>
            )}
          </div>
          
          {/* Tab content */}
          <div className="py-2 min-h-[180px]">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                {/* Initiatives */}
                {project.initiatives && project.initiatives.length > 0 && (
                  <Initiatives initiatives={project.initiatives} />
                )}
                
                {/* Modules/Process */}
                {Object.keys(project.modules).length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium flex items-center">
                      <Sparkles className="h-4 w-4 mr-1" />
                      Key Processes
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      {Object.entries(project.modules).map(([key, module]) => (
                        <div key={key} className="p-2 rounded bg-muted/50">
                          <div className="capitalize font-medium">{key}</div>
                          <p className="text-muted-foreground text-xs mt-1">{module.summary}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {module.tags.map(tag => (
                              <span key={tag} className="px-1.5 py-0.5 bg-muted text-muted-foreground rounded text-xs">
                                {tag.replace(/_/g, ' ')}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Guest Feedback */}
                {project.guestFeedback && project.guestFeedback.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Guest Feedback</h4>
                    <FeedbackDisplay feedback={project.guestFeedback} />
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'metrics' && project.metrics && (
              <MetricsDisplay metrics={project.metrics} />
            )}
            
            {activeTab === 'team' && project.team.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Project Team</h4>
                <div className="grid grid-cols-1 gap-2">
                  {project.team.map((member, index) => (
                    <div key={index} className="flex items-center p-2 rounded bg-muted/50">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <span>{member.role}</span>
                          {member.lead && (
                            <span className="ml-2 px-1.5 py-0.5 bg-primary/10 text-primary rounded text-xs">
                              Team Lead
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;