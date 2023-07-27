import ReactSlider from "react-slider"
import { useTranslation } from "react-i18next"

interface ChildProps{
    pages: number[];
    setPages: (pages: number[]) => void;
}

const Slider = ({pages, setPages}: ChildProps) => {
    const { t } = useTranslation()

    return (
        <section className="w-full font-semibold">
            <h6 className='font-bold text-sm pb-2'>{t('filterByPages')}</h6>
            <ReactSlider 
                min={pages[0]}
                max={pages[1]}
                defaultValue={pages}
                className="rounded-md h-8"
                renderThumb={(props, state) => (
                    <div 
                        {...props}
                        className={`cursor-grab rounded-full bg-neutral-800 text-xs text-white h-8 w-8 flex justify-center items-center top-1/2 -translate-y-1/2 border-y border-neutral-700 ${state.index === 0 ? 'border-left' : 'border-right'}`}
                    >
                        {state.valueNow}
                    </div>
                )}
                renderTrack={(props, state) => {
                    return (
                        <div 
                            {...props}
                            className={`border border-neutral-700 h-2/5 top-1/2 -translate-y-1/2 rounded-md ${state.index === 1 ? 'bg-neutral-800' : 'bg-neutral-700'}`}
                        />
                    )
                }}  
                onChange={(val:number[]) => setPages(val)}
            />
        </section>
    )

}

export default Slider
