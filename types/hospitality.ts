export interface Experience {
  id: string;
  property: string;
  propertyType: 'business' | 'heritage' | 'resort';
  isFlagship: boolean;
  role: string;
  location: string;
  duration: string;
  projects: Project[];
}

export interface Project {
  id: string;
  title: string;
  overview: string;
  launchDate?: string;
  tools: string[];
  metrics: {
    [key: string]: number | string | null;
  } | null;
  initiatives: Initiative[];
  guestFeedback: number[];
  modules: {
    [key: string]: Module;
  };
  team: TeamMember[];
  documentLinks?: string[];
  imageUrl?: string;
}

export interface Initiative {
  name: string;
  result: string;
}

export interface Module {
  summary: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  lead: boolean;
}

export interface FilterOptions {
  propertyType: string[];
  year: string[];
  isFlagship: boolean | null;
}