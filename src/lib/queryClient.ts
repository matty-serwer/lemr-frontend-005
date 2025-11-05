import { QueryClient, useQuery } from '@tanstack/react-query';
import { Person } from '@/store/searchStore';

// Mock patient dataset
const mockPatients: Person[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    dateOfBirth: '1985-03-15',
    medicalRecordNumber: 'MRN-001234',
    email: 'john.smith@email.com',
    phone: '(555) 123-4567',
    address: {
      street: '123 Main St',
      city: 'Boston',
      state: 'MA',
      zipCode: '02101',
    },
  },
  {
    id: '2',
    firstName: 'Sarah',
    lastName: 'Johnson',
    dateOfBirth: '1992-07-22',
    medicalRecordNumber: 'MRN-002345',
    email: 'sarah.johnson@email.com',
    phone: '(555) 234-5678',
    address: {
      street: '456 Oak Ave',
      city: 'Cambridge',
      state: 'MA',
      zipCode: '02138',
    },
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Williams',
    dateOfBirth: '1978-11-30',
    medicalRecordNumber: 'MRN-003456',
    email: 'michael.williams@email.com',
    phone: '(555) 345-6789',
    address: {
      street: '789 Elm St',
      city: 'Somerville',
      state: 'MA',
      zipCode: '02143',
    },
  },
  {
    id: '4',
    firstName: 'Emily',
    lastName: 'Brown',
    dateOfBirth: '2001-01-08',
    medicalRecordNumber: 'MRN-004567',
    email: 'emily.brown@email.com',
    phone: '(555) 456-7890',
    address: {
      street: '321 Maple Dr',
      city: 'Brookline',
      state: 'MA',
      zipCode: '02445',
    },
  },
  {
    id: '5',
    firstName: 'Robert',
    lastName: 'Davis',
    dateOfBirth: '1965-09-12',
    medicalRecordNumber: 'MRN-005678',
    email: 'robert.davis@email.com',
    phone: '(555) 567-8901',
    address: {
      street: '654 Pine Rd',
      city: 'Newton',
      state: 'MA',
      zipCode: '02458',
    },
  },
  {
    id: '6',
    firstName: 'Jennifer',
    lastName: 'Martinez',
    dateOfBirth: '1988-05-25',
    medicalRecordNumber: 'MRN-006789',
    email: 'jennifer.martinez@email.com',
    phone: '(555) 678-9012',
    address: {
      street: '987 Cedar Ln',
      city: 'Quincy',
      state: 'MA',
      zipCode: '02169',
    },
  },
  {
    id: '7',
    firstName: 'David',
    lastName: 'Garcia',
    dateOfBirth: '1995-12-03',
    medicalRecordNumber: 'MRN-007890',
    email: 'david.garcia@email.com',
    phone: '(555) 789-0123',
    address: {
      street: '147 Birch St',
      city: 'Medford',
      state: 'MA',
      zipCode: '02155',
    },
  },
  {
    id: '8',
    firstName: 'Jessica',
    lastName: 'Wilson',
    dateOfBirth: '1970-04-18',
    medicalRecordNumber: 'MRN-008901',
    email: 'jessica.wilson@email.com',
    phone: '(555) 890-1234',
    address: {
      street: '258 Spruce Ave',
      city: 'Waltham',
      state: 'MA',
      zipCode: '02451',
    },
  },
  {
    id: '9',
    firstName: 'Christopher',
    lastName: 'Anderson',
    dateOfBirth: '1983-08-27',
    medicalRecordNumber: 'MRN-009012',
    email: 'chris.anderson@email.com',
    phone: '(555) 901-2345',
    address: {
      street: '369 Willow Way',
      city: 'Arlington',
      state: 'MA',
      zipCode: '02474',
    },
  },
  {
    id: '10',
    firstName: 'Amanda',
    lastName: 'Taylor',
    dateOfBirth: '1999-06-14',
    medicalRecordNumber: 'MRN-010123',
    email: 'amanda.taylor@email.com',
    phone: '(555) 012-3456',
    address: {
      street: '741 Poplar Pl',
      city: 'Lexington',
      state: 'MA',
      zipCode: '02420',
    },
  },
];

// Mock API function with fuzzy search
const searchPatients = async (query: string): Promise<Person[]> => {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (!query || query.trim().length === 0) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();

  // Fuzzy search across multiple fields
  return mockPatients.filter((patient) => {
    const fullName = `${patient.firstName} ${patient.lastName}`.toLowerCase();
    const mrn = patient.medicalRecordNumber.toLowerCase();
    const dob = patient.dateOfBirth;
    const email = patient.email?.toLowerCase() || '';

    return (
      fullName.includes(searchTerm) ||
      mrn.includes(searchTerm) ||
      dob.includes(searchTerm) ||
      email.includes(searchTerm) ||
      patient.firstName.toLowerCase().includes(searchTerm) ||
      patient.lastName.toLowerCase().includes(searchTerm)
    );
  });
};

// Create QueryClient with default options
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Custom hook for patient search
export const usePatientSearch = (query: string) => {
  return useQuery({
    queryKey: ['patients', query],
    queryFn: () => searchPatients(query),
    enabled: query.trim().length > 0, // Only run query if search term exists
  });
};
