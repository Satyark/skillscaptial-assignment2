import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { FilterOptions } from '@/types/hospitality';

interface FilterBarProps {
  propertyTypes: string[];
  years: string[];
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ propertyTypes, years, filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePropertyTypeChange = (type: string) => {
    if (filters.propertyType.includes(type)) {
      setFilters({
        ...filters,
        propertyType: filters.propertyType.filter(t => t !== type),
      });
    } else {
      setFilters({
        ...filters,
        propertyType: [...filters.propertyType, type],
      });
    }
  };

  const handleYearChange = (year: string) => {
    if (filters.year.includes(year)) {
      setFilters({
        ...filters,
        year: filters.year.filter(y => y !== year),
      });
    } else {
      setFilters({
        ...filters,
        year: [...filters.year, year],
      });
    }
  };

  const handleFlagshipChange = (value: boolean | null) => {
    setFilters({
      ...filters,
      isFlagship: filters.isFlagship === value ? null : value,
    });
  };

  const clearAllFilters = () => {
    setFilters({
      propertyType: [],
      year: [],
      isFlagship: null,
    });
  };

  const hasActiveFilters = filters.propertyType.length > 0 || filters.year.length > 0 || filters.isFlagship !== null;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 bg-primary px-4 py-2 rounded-lg text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Filter className="w-4 h-4" />
          <span>Filters</span>
          {hasActiveFilters && (
            <span className="ml-2 bg-primary-foreground text-primary w-5 h-5 rounded-full flex items-center justify-center text-xs">
              {filters.propertyType.length + filters.year.length + (filters.isFlagship !== null ? 1 : 0)}
            </span>
          )}
        </button>
        
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-muted-foreground hover:text-primary flex items-center"
          >
            <X className="w-3 h-3 mr-1" />
            Clear filters
          </button>
        )}
      </div>

      {isOpen && (
        <div className="bg-card rounded-lg p-4 shadow-md border border-border mb-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Property Type Filter */}
            <div>
              <h3 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Property Type</h3>
              <div className="space-y-2">
                {propertyTypes.map((type) => (
                  <div key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`type-${type}`}
                      checked={filters.propertyType.includes(type)}
                      onChange={() => handlePropertyTypeChange(type)}
                      className="rounded text-primary focus:ring-primary h-4 w-4"
                    />
                    <label htmlFor={`type-${type}`} className="ml-2 capitalize">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            <div>
              <h3 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Year</h3>
              <div className="space-y-2">
                {years.map((year) => (
                  <div key={year} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`year-${year}`}
                      checked={filters.year.includes(year)}
                      onChange={() => handleYearChange(year)}
                      className="rounded text-primary focus:ring-primary h-4 w-4"
                    />
                    <label htmlFor={`year-${year}`} className="ml-2">
                      {year}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Flagship Filter */}
            <div>
              <h3 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Flagship Status</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="flagship-yes"
                    checked={filters.isFlagship === true}
                    onChange={() => handleFlagshipChange(true)}
                    className="rounded text-primary focus:ring-primary h-4 w-4"
                  />
                  <label htmlFor="flagship-yes" className="ml-2">
                    Flagship Properties
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="flagship-no"
                    checked={filters.isFlagship === false}
                    onChange={() => handleFlagshipChange(false)}
                    className="rounded text-primary focus:ring-primary h-4 w-4"
                  />
                  <label htmlFor="flagship-no" className="ml-2">
                    Non-Flagship Properties
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mb-4">
          {filters.propertyType.map(type => (
            <span key={type} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm flex items-center">
              {type}
              <button 
                onClick={() => handlePropertyTypeChange(type)}
                className="ml-1 text-muted-foreground hover:text-secondary-foreground"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
          {filters.year.map(year => (
            <span key={year} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm flex items-center">
              {year}
              <button 
                onClick={() => handleYearChange(year)}
                className="ml-1 text-muted-foreground hover:text-secondary-foreground"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
          {filters.isFlagship !== null && (
            <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm flex items-center">
              {filters.isFlagship ? 'Flagship' : 'Non-Flagship'}
              <button 
                onClick={() => handleFlagshipChange(filters.isFlagship)}
                className="ml-1 text-muted-foreground hover:text-secondary-foreground"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterBar;