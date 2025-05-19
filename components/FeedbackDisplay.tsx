
interface FeedbackDisplayProps {
  feedback: number[];
}

const FeedbackDisplay: React.FC<FeedbackDisplayProps> = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return null;
  }

  const average = feedback.reduce((sum, score) => sum + score, 0) / feedback.length;
  
  const counts = {
    5: feedback.filter(score => score === 5).length,
    4: feedback.filter(score => score === 4).length,
    3: feedback.filter(score => score === 3).length,
    2: feedback.filter(score => score === 2).length,
    1: feedback.filter(score => score === 1).length,
  };
  
  // Calculate percentages
  const getPercentage = (count: number) => {
    return Math.round((count / feedback.length) * 100);
  };

  return (
    <div className="space-y-3">
      {/* Average score */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-3xl font-bold">{average.toFixed(1)}</span>
          <span className="text-sm text-muted-foreground ml-1">/ 5</span>
        </div>
        <div className="text-sm text-muted-foreground">
          Based on {feedback.length} reviews
        </div>
      </div>
      
      {/* Score distribution */}
      <div className="space-y-1.5">
        {[5, 4, 3, 2, 1].map(score => (
          <div key={score} className="flex items-center gap-2">
            <div className="text-xs font-medium min-w-[24px]">{score}</div>
            <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  score >= 4 ? 'bg-chart-1' : 
                  score === 3 ? 'bg-chart-4' : 
                  'bg-chart-5'
                }`}
                style={{ width: `${getPercentage(counts[score as keyof typeof counts])}%` }}
              ></div>
            </div>
            <div className="text-xs text-muted-foreground min-w-[32px]">
              {getPercentage(counts[score as keyof typeof counts])}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackDisplay;