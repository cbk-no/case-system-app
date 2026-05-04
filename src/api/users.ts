import type { User } from "src/types/user";

const BASE = import.meta.env.VITE_API_BASE_URL + '/Users';

export async function getUsers(): Promise<User[]> {
  const res = await fetch(BASE);
  if (!res.ok) throw new Error('Failed to fetch users');
  const json = await res.json();
  return json;
}

export async function getUser(id: string): Promise<User> {
  const res = await fetch(`${BASE}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch user');
  const json = await res.json();
  return json;
}

export async function createUser(data: Omit<User, 'id'>): Promise<User> {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error('Failed to create user');
  return json;
}

export async function updateUser(id: string, data: Partial<User>): Promise<User> {
  const res = await fetch(`${BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error('Failed to update user');
  return json;
}

export async function deleteUser(id: string): Promise<void> {
  const res = await fetch(`${BASE}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete user');
}
