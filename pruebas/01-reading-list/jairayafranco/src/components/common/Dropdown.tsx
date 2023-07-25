import { DropdownProps } from "../../interfaces/Common";

export default function Dropdown({ title, options, ...rest }: DropdownProps) {
    return (
        <div className="form-control w-full max-w-xs">
            <label htmlFor="range" className="label">
                {title}
            </label>
            <select className="select select-bordered" {...rest}>
                <option>Todas</option>
                {options.map((option, index) => (
                    <option key={index}>{option}</option>
                ))}
            </select>
        </div>
    );
}
