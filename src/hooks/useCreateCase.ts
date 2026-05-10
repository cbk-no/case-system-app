// FILE: src/hooks/useCreateCase.ts

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCase } from "src/api/cases";
import type { Case } from "src/types/case";

export function useCreateCase(
  onSuccessCallback?: (createdCase: Case) => void
) {
  const qc = useQueryClient();

  return useMutation<Case, Error, Omit<Case, "id">>({
    mutationFn: createCase,
    onSuccess: (createdCase) => {
      qc.invalidateQueries({ queryKey: ["cases"] });

      if (onSuccessCallback) {
        onSuccessCallback(createdCase);
      }
    },
  });
}