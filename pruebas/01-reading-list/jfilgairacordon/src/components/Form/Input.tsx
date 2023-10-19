import './Input.css'

type Props = | {
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string | number
  placeholder: string
  label: string
  type: 'text' | 'number'
}

export function Input ({ name, value, onChange, placeholder, label, type }: Props) {
  return (
    <div className='input-container'>
      <label htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        className="input"
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}
