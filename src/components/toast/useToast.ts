import { useState, useCallback } from "react";

export function useToast() {
  const [toasts, setToasts] = useState<string[]>([]);

  const showToast = useCallback((message: string) => {
    setToasts((prev) => [...prev, message]);

    setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 3000);
  }, []);

  return { toasts, showToast };
}
