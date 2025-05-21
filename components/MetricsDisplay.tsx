
interface MetricsDisplayProps {
  metrics: {
    [key: string]: number | string | null;
  };
}

// Function to format metric keys for display
const formatMetricName = (key: string): string => {
  return key
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/(Hrs|Min)$/, ' $1') // Add space before Hrs or Min
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between camelCase
    .replace(/^./, str => str.toUpperCase()); // Capitalize first letter
};

const MetricsDisplay: React.FC<MetricsDisplayProps> = ({ metrics }) => {

  return (
    <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
          {Object.entries(metrics).map(([key, value]) => (
            value !== null && (
              <div key={key} className="bg-card rounded-lg shadow-sm p-4 border border-border">
                <div className="text-sm text-muted-foreground">{formatMetricName(key)}</div>
                <div className="text-2xl font-medium mt-1">{value}</div>
              </div>
            )
          ))}
        </div>
    </div>
  );
};

export default MetricsDisplay;