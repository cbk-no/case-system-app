export enum Role {
  Admin = 'Admin',
  User = 'User',
}
export interface User {
  id: string;     // Guid
  name: string;
  email: string;
  role: Role;
}
