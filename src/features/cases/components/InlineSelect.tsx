import { useState } from "react";

export interface InlineSelectProps {
  value: string;
  options: string[];
  onSave: (value: string) => void;
}

export default function InlineSelect({ value, options, onSave }: InlineSelectProps) {
  const [editing, setEditing] = useState(false);

  return editing ? (
    <select
      value={value}
      onChange={(e) => {
        onSave(e.target.value);
        setEditing(false);
      }}
      autoFocus
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  ) : (
    <span onClick={() => setEditing(true)}>{value}</span>
  );
}
