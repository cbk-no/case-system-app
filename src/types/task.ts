export enum TaskStatus {
  Todo = 'Todo',
  InProgress = 'InProgress',
  Done = 'Done',
}

export interface Task {
  id: string;              // Guid
  assignedUserId: string;  // Guid
  description: string;
  status: TaskStatus;
  caseId: string;          // Guid
}
