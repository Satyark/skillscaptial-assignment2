import { Initiative } from '@/types/hospitality';
import { TrendingUp } from 'lucide-react';

interface InitiativesProps {
  initiatives: Initiative[];
}

const Initiatives: React.FC<InitiativesProps> = ({ initiatives }) => {
  if (!initiatives || initiatives.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium flex items-center">
        <TrendingUp className="h-4 w-4 mr-1" />
        Key Initiatives
      </h4>
      <div className="space-y-2">
        {initiatives.map((initiative, index) => (
          <div key={index} className="flex justify-between p-2 rounded bg-muted/50">
            <div className="text-sm">{initiative.name}</div>
            <div className="text-sm font-medium text-primary">
              {initiative.result}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Initiatives;