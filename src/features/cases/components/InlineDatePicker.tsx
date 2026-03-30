import { useState } from "react";

export interface InlineDatePickerProps {
  value: string | null;
  onSave: (value: string) => void;
}

export default function InlineDatePicker({ value, onSave }: InlineDatePickerProps) {
  const [editing, setEditing] = useState(false);

  return editing ? (
    <input
      type="date"
      value={value ? value.substring(0, 10) : ""}
      onChange={(e) => {
        onSave(e.target.value);
        setEditing(false);
      }}
      autoFocus
    />
  ) : (
    <span onClick={() => setEditing(true)}>
      {value ? new Date(value).toLocaleDateString("no-NO") : "Ingen frist"}
    </span>
  );
}
