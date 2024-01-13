
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
    <div
     className={className ? className : ''}>
      <label>
        <input 
          id={id ? id : ''} 
          type={'checkbox'}
          checked={checked ? checked : false}
          onChange={onChange ? onChange : () => {}}/>
        <span>
          {label ? label : ''}
        </span>
      </label>
    </div>
  )
}
