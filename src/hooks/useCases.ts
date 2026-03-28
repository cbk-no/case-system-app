import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getCases,
  getCase,
  createCase,
  updateCase,
  deleteCase,
  assignTaskToCase,
} from '../api/cases';
import type { Case } from 'src/types/case';

export function useCases() {
  return useQuery({ queryKey: ['cases'], queryFn: getCases });
}

export function useCase(id: string) {
  return useQuery({
    queryKey: ['cases', id],
    queryFn: () => getCase(id),
    enabled: !!id,
  });
}

export function useCreateCase() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createCase,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['cases'] }),
  });
}

export function useUpdateCase(id: string) {
  const qc = useQueryClient();
  return useMutation<Case, Error, Partial<Case>>({
    mutationFn: (data) => updateCase(id, data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['cases'] });
      qc.invalidateQueries({ queryKey: ['cases', id] });
    },
  });
}

export function useDeleteCase() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deleteCase,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['cases'] }),
  });
}

export function useAssignTask() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: assignTaskToCase,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['cases'] }),
  });
}
