import { useState } from "react";

export interface InlineTextEditorProps {
  value: string;
  onSave: (value: string) => void;
}

export default function InlineTextEditor({ value, onSave }: InlineTextEditorProps) {
  const [draft, setDraft] = useState(value);
  return (
    <textarea
      className="editable-textarea"
      value={draft}
      onChange={(e) => {
        setDraft(e.target.value);
        onSave(e.target.value);
      }}
    />
  );
}
