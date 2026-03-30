import { useState } from "react";

export interface InlineTextEditorProps {
  value: string;
  onSave: (value: string) => void;
}

export default function InlineTextEditor({ value, onSave }: InlineTextEditorProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  return editing ? (
    <textarea
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={() => {
        onSave(draft);
        setEditing(false);
      }}
      autoFocus
    />
  ) : (
    <p onClick={() => setEditing(true)}>
      {value || "Klikk for å skrive…"}
    </p>
  );
}
