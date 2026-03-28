import type { Case } from "src/types/case";

const BASE = import.meta.env.VITE_API_BASE_URL + '/Cases';

export async function getCases(): Promise<Case[]> {
  const res = await fetch(BASE);
  if (!res.ok) throw new Error('Failed to fetch cases');
  return res.json();
}

export async function getCase(id: string): Promise<Case> {
  const res = await fetch(`${BASE}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch case');
  return res.json();
}

export async function createCase(data: Omit<Case, 'id'>): Promise<Case> {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create case');
  return res.json();
}

export async function updateCase(id: string, data: Partial<Case>): Promise<Case> {
  const res = await fetch(`${BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update case');
  return res.json();
}

export async function deleteCase(id: string): Promise<void> {
  const res = await fetch(`${BASE}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete case');
}

export async function assignTaskToCase(taskId: string): Promise<void> {
  const res = await fetch(`${BASE}/${taskId}/assign`, { method: 'POST' });
  if (!res.ok) throw new Error('Failed to assign task');
}
