import { cn } from '@/lib/utils';

interface PropertyBadgeProps {
  type: string;
  isFlagship: boolean;
}

const PropertyBadge: React.FC<PropertyBadgeProps> = ({ type, isFlagship }) => {
  const getTypeStyles = () => {
    switch (type) {
      case 'business':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300';
      case 'heritage':
        return 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300';
      case 'resort':
        return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300';
      default:
        return 'bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {isFlagship && (
        <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300 flex items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-1"></span>
          Flagship
        </span>
      )}
      <span className={cn(
        "px-2 py-1 rounded-full text-xs font-medium capitalize",
        getTypeStyles()
      )}>
        {type}
      </span>
    </div>
  );
};

export default PropertyBadge;