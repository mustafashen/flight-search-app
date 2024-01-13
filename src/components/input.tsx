export default function Input({
  id,
  className,
  label,
  type = "text",
  placeholder,
  value,
  disabled,
  onChange,
}: {
  id?: string;
  className?: string;
  label?: string;
  type?: "text" | "date";
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={className ? className : ""}>
      <label
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          gap: "10px",
          justifyContent: 'space-between',
          width: '300px'
        }}
      >
        <span>{label ? label : ""}:</span>
        <input
          id={id ? id : ""}
          type={type}
          value={value ? value : ""}
          onChange={onChange ? onChange : () => {}}
          placeholder={
            type === "date" ? "YYYY-MM-DD" : placeholder ? placeholder : label
          }
          disabled={disabled ? disabled : false}
          style={{
            height: '20px',
            width: '140px',
            padding: '5px',
          }}
        />
      </label>
    </div>
  );
}
