import Range from "../common/Range";
import { useBookStore } from "../../store/useBookStore";
import { useState } from "react";

export default function BookRangePages() {
    const [rangeValue, setRangeValue] = useState(0)
    const { getPageCount, setFilterBookParams } = useBookStore();
    const { minPageCount, maxPageCount } = getPageCount()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRangeValue(Number(e.target.value))
    }

    return (
        <Range
            title="Filtrar por Paginas"
            min={minPageCount}
            max={maxPageCount}
            value={rangeValue}
            className="range range-xs"
            onChange={handleChange}
            onClickCapture={() => setFilterBookParams("pageCount", rangeValue)}
        />
    );
}
