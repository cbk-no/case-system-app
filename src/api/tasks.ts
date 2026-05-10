import type { CreateTaskRequest, Task } from "src/types/task";

const BASE = import.meta.env.VITE_API_BASE_URL;

export async function getTasks(): Promise<Task[]> {
  const res = await fetch(`${BASE}/Task`);
  if (!res.ok) throw new Error('Failed to fetch tasks');
  return res.json();
}

export async function getTask(id: string): Promise<Task> {
  const res = await fetch(`${BASE}/Task/${id}`);
  if (!res.ok) throw new Error('Failed to fetch task');
  return res.json();
}

export async function createTask(data: CreateTaskRequest): Promise<Task> {
  const res = await fetch(`${BASE}/Task`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create task');
  return res.json();
}

export async function updateTask(id: string, data: Partial<Task>): Promise<Task> {
  console.log('Updating task', id, data);
  const res = await fetch(`${BASE}/Task/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update task');
  return res.json();
}

export async function deleteTask(id: string): Promise<void> {
  const res = await fetch(`${BASE}/Task/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete task');
}

export async function getTasksForCase(caseId: string): Promise<Task[]> {
  const res = await fetch(`${BASE}/cases/${caseId}/tasks`);
  if (!res.ok) throw new Error('Failed to fetch tasks for case');
  return res.json();
}
