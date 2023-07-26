import './Range.css'

type Props = |
{ name: string, label: string, max: number, value: number, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }

export function Range ({ name, max, label, value, onChange }: Props) {
  return (
    <div className="range-container">
      <label htmlFor={name}>{label}</label>
      <div className="control-row">
        <input
          name={name}
          type="range"
          min={0}
          max={max}
          value={value}
          onChange={onChange}
        />
        <span>({value})</span>
      </div>
    </div>
  )
}
