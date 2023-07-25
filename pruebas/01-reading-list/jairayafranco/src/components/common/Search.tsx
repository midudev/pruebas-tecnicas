import { SearchProps } from "../../interfaces/Common";

export default function Search(SearchProps: SearchProps) {
    const { title, ...rest } = SearchProps;

    return (
        <div className="form-control w-full max-w-xs">
            <label
                htmlFor="range"
                className="label"
            >
                {title}
            </label>
            <input
                type="text"
                {...rest}
            />
        </div>
    );
}
