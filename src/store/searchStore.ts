import { create } from 'zustand';

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  medicalRecordNumber: string;
  email?: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

interface SearchStore {
  searchQuery: string;
  selectedPerson: Person | null;
  searchResults: Person[];
  setSearchQuery: (query: string) => void;
  setSelectedPerson: (person: Person | null) => void;
  setSearchResults: (results: Person[]) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchQuery: '',
  selectedPerson: null,
  searchResults: [],
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  setSelectedPerson: (person: Person | null) => set({ selectedPerson: person }),
  setSearchResults: (results: Person[]) => set({ searchResults: results }),
}));
