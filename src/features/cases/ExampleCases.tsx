import type { CaseObject } from "./CasesObjects";

  const ExampleCases: CaseObject[] = [
    {
      id: '1',
      title: 'Sample Case 1',
      description: 'This is a sample case description.',
      status: 'open',
      createdAt: new Date('2023-01-01'),
      updatedAt: new Date('2023-01-02'),
      assignedTo: 'John Doe',
      priority: 'high'
    },
    {
      id: '2',
      title: 'Sample Case 2',
      description: 'Another sample case.',
      status: 'pending',
      createdAt: new Date('2023-01-03'),
      updatedAt: new Date('2023-01-04'),
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Sample Case 3',
      description: 'Yet another sample case.',
      status: 'closed',
      createdAt: new Date('2023-01-05'),
      updatedAt: new Date('2023-01-06'),
      assignedTo: 'Jane Smith',
      priority: 'low'
    }
  ];

export default ExampleCases;