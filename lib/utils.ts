import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, parseISO } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  try {
    return format(parseISO(dateString), 'MMM d, yyyy');
  } catch (error) {
    return dateString;
  }
}

export function formatPropertyName(name: string): string {
  // Add special formatting for property names
  // Example: Add an elegant separator between property name parts
  return name.replace(/\s+/g, ' ').trim();
}