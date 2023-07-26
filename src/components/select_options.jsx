export default function Select({ options, label, ...props }) {
  return (
    <div className="grid grid-cols-2 gap-x-2">
      <label htmlFor={props.id}>{label}:</label>
      <select id={props.id}>
        {options.map((option) => (
          <option value={option.label}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}