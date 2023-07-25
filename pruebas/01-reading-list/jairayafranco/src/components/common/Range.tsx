import { RangeProps } from "../../interfaces/Common";

export default function Range(RangeProps: RangeProps) {
    const { title, ...rest } = RangeProps;

    return (
        <div className="form-control w-full max-w-xs">
            <label
                htmlFor="range"
                className="label"
            >
                {title}
            </label>
            <div className="tooltip tooltip-bottom my-3" data-tip={RangeProps.value}>
                <input
                    type="range"
                    {...rest}
                />
            </div>
        </div>
    );
}
