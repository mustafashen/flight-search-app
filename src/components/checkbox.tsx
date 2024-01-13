
export default function Checkbox({
  id,
  className,
  label,
  checked,
  onChange,
  }: {
    id?: string
    className?: string;
    label?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }) {
  return (
    <span
     className={className ? className : ''}>
      <label>
        {label ? label : ''}
        <input 
          id={id ? id : ''} 
          type={'checkbox'}
          checked={checked ? checked : false}
          onChange={onChange ? onChange : () => {}}/>
      </label>
    </span>
  )
}
