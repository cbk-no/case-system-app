export enum CasePriority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}

export enum CaseStatus {
  Open = 'Open',
  InProgress = 'InProgress',
  Closed = 'Closed',
}
export enum CaseType {
  Complaint = 'Complaint',
  Inquiry = 'Inquiry',
  Request = 'Request',
}




export interface Case {
  id: string;                     // Guid
  dateReceived: string;           
  deadline: string;
  title: string;
  caseType: CaseType;               
  complaintDescription: string;
  priority: CasePriority;
  status: CaseStatus;
  description: string;
  emailComplainer: string;
  userInfoComplainer: string;
  caseOwnerId: string;            // Guid
}

export interface CasesProps {
  cases: Case[];
}
