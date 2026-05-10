// FILE: src/hooks/useCreateCase.ts

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCase } from "src/api/cases";
import type { Case } from "src/types/case";

export function useCreateCase(navigate?: (path: string) => void) {
  const qc = useQueryClient();

  return useMutation<Case, Error, Omit<Case, "id">>({
    mutationFn: createCase,
    onSuccess: (createCase) => {
      qc.invalidateQueries({ queryKey: ["cases"] });

      if (navigate) {
        navigate(`/cases/${createCase.id}`);
      }
    },
  });
}
