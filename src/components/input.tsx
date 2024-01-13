
export default function Input({
  id,
  className,
  label,
  type = 'text',
  placeholder,
  value,
  disabled,
  onChange,
  }: {
    id?: string,
    className?: string,
    label?: string,
    type?: 'text' | 'date',
    placeholder?: string,
    value?: string,
    disabled?: boolean,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }) {
  return (
    <span
      className={className ? className : ''}>
      <label>
        <span>
          {label ? label : ''}
        </span>
        <input 
        id={id ? id : ''}
        type={type}  
        value={value ? value : ''} 
        onChange={onChange ? onChange : () => {}}
        placeholder={
          type === 'date' ? 
            'YYYY-MM-DD' : placeholder ? 
              placeholder : label
        }
        disabled={disabled ? disabled : false}/>
      </label>

    </span>
  )
}
