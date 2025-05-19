"use client";

import { useState } from 'react';
import { hospitalityData } from '@/data/hospitalityData';
import ExperienceList from '@/components/ExperienceList';
import FilterBar from '@/components/FilterBar';
import Header from '@/components/layout/Header';
import { FilterOptions } from '@/types/hospitality';
import { ThemeProvider } from "next-themes";

export default function Home() {
  const [filters, setFilters] = useState<FilterOptions>({
    propertyType: [],
    year: [],
    isFlagship: null,
  });

  const propertyTypes = [...new Set(hospitalityData.map(exp => exp.propertyType))];
  const years = [...new Set(hospitalityData.map(exp => exp.duration))];

  // Filters
  const filteredExperiences = hospitalityData.filter(experience => {
    if (filters.propertyType.length > 0 && !filters.propertyType.includes(experience.propertyType)) {
      return false;
    }
    
    if (filters.year.length > 0 && !filters.year.includes(experience.duration)) {
      return false;
    }
    
    if (filters.isFlagship !== null && experience.isFlagship !== filters.isFlagship) {
      return false;
    }
    
    return true;
  });

  return (
    <ThemeProvider attribute="class">
      <main className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-2 text-primary">
              Hospitality Experience Portfolio
            </h1>
            <p className="text-muted-foreground max-w-3xl">
              A showcase of professional hospitality experiences spanning luxury properties across the globe. 
              Explore projects, initiatives, and measurable impacts across various property types.
            </p>
          </div>
          
          <FilterBar 
            propertyTypes={propertyTypes}
            years={years}
            filters={filters}
            setFilters={setFilters}
          />
          
          <ExperienceList experiences={filteredExperiences} />
        </div>
      </main>
    </ThemeProvider>
  );
}