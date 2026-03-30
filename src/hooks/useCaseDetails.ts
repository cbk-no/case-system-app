import { useCase, useUpdateCase } from "./useCases";
import type { Case } from "src/types/case";

export function useCaseDetails(caseId: string) {
  const caseQuery = useCase(caseId);
  const updateCaseMutation = useUpdateCase(caseId);

  return {
    caseItem: caseQuery.data,
    isLoading: caseQuery.isLoading,
    error: caseQuery.error,

    updateCase: (update: Partial<Case>) =>
      updateCaseMutation.mutate(update),
  };
}
