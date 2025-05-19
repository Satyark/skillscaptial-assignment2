import { Experience } from '@/types/hospitality';
import ExperienceCard from './ExperienceCard';
import { Hotel } from 'lucide-react';

interface ExperienceListProps {
  experiences: Experience[];
}

const ExperienceList: React.FC<ExperienceListProps> = ({ experiences }) => {
  if (experiences.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 border border-dashed border-border rounded-lg bg-card/50 text-center">
        <Hotel className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium mb-2">No experiences found</h3>
        <p className="text-muted-foreground max-w-md">
          Try adjusting your filter criteria to see more results.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
};

export default ExperienceList;