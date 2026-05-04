import { useState } from "react";

export interface InlineSelectProps {
  value: string;
  options: string[];
  onSave: (value: string) => void;
}

export default function InlineSelect({ value, options, onSave }: InlineSelectProps) {

  return (
    <select
      className="editable-select"
      value={value}
      onChange={(e) => onSave(e.target.value)}
    >
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  );
}