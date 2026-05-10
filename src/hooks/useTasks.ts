import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getTasksForCase,
} from '../api/tasks';
import type { Task } from 'src/types/task';

export function useTasks() {
  return useQuery({ queryKey: ['tasks'], queryFn: getTasks });
}

export function useTask(id: string) {
  return useQuery({
    queryKey: ['tasks', id],
    queryFn: () => getTask(id),
    enabled: !!id,
  });
}

export function useTasksForCase(caseId: string) {
  return useQuery({
    queryKey: ['cases', caseId, 'tasks'],
    queryFn: () => getTasksForCase(caseId),
    enabled: !!caseId,
  });
}

export function useCreateTask(caseId: string) {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['cases', caseId, 'tasks'] });
    },
  });
}

export function useUpdateTask(caseId: string) {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ taskId, update }: { taskId: string; update: Partial<Task> }) =>
      updateTask(taskId, update),

    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['cases', caseId, 'tasks'] });
    },
  });
}

export function useDeleteTask(caseId: string) {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['cases', caseId, 'tasks'] });
    },
  });
}
