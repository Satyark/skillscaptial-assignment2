import { useState } from 'react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

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
  const [chartType, setChartType] = useState<'cards' | 'bar' | 'line'>('cards');
  
  // Format metrics for charts
  const chartData = Object.entries(metrics)
    .filter(([_, value]) => value !== null)
    .map(([key, value]) => ({
      name: formatMetricName(key),
      value: typeof value === 'string' ? 
        parseFloat(value.replace(/[^0-9.]/g, '')) :
        value as number
    }));

  return (
    <div className="space-y-4">
      {/* Chart Type Selector */}
      <div className="flex justify-end">
        <div className="inline-flex rounded-md bg-muted p-0.5">
          <button
            onClick={() => setChartType('cards')}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-md ${
              chartType === 'cards' ? 'bg-card shadow-sm' : 'text-muted-foreground'
            }`}
          >
            Cards
          </button>
          <button
            onClick={() => setChartType('bar')}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-md ${
              chartType === 'bar' ? 'bg-card shadow-sm' : 'text-muted-foreground'
            }`}
          >
            Bar
          </button>
          <button
            onClick={() => setChartType('line')}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-md ${
              chartType === 'line' ? 'bg-card shadow-sm' : 'text-muted-foreground'
            }`}
          >
            Line
          </button>
        </div>
      </div>

      {/* Metrics Display */}
      {chartType === 'cards' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.entries(metrics).map(([key, value]) => (
            value !== null && (
              <div key={key} className="bg-card rounded-lg shadow-sm p-4 border border-border">
                <div className="text-sm text-muted-foreground">{formatMetricName(key)}</div>
                <div className="text-2xl font-medium mt-1">{value}</div>
              </div>
            )
          ))}
        </div>
      ) : (
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'bar' ? (
              <BarChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    borderColor: 'hsl(var(--border))',
                    borderRadius: '0.375rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  }}
                />
                <Bar dataKey="value" fill="hsl(var(--chart-1))" barSize={30} radius={[4, 4, 0, 0]} />
              </BarChart>
            ) : (
              <LineChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    borderColor: 'hsl(var(--border))',
                    borderRadius: '0.375rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--chart-2))" 
                  strokeWidth={2}
                  dot={{ r: 4, fill: 'hsl(var(--chart-2))' }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default MetricsDisplay;