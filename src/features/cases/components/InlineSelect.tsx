export default function InlineSelect({
  value,
  options,
  onSave,
}: {
  value: string;
  options: { label: string; value: string }[];
  onSave: (value: string) => void;
}) {
  return (
    <select
      className="editable-select"
      value={value}
      onChange={(e) => onSave(e.target.value)}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}