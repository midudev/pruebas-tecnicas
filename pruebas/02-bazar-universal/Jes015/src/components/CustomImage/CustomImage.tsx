import { useEffect, useRef, type LegacyRef } from "react"
import styles from './customImage.module.css'

interface Props {
    src: string,
    width: string,
    height: string,
    alt: string
}

export const CustomImage: React.FC<Props> = ({ src, width, height, alt }) => {
    const img = useRef<HTMLImageElement>()
    const imgContainer = useRef<HTMLDivElement>()

    // useEffect by astro compilation
    useEffect(() => {
        if (img.current?.complete) {
            imgContainer.current?.classList.remove(styles["img--loading"])
            return
        }

        console.log('loading')

        img.current?.addEventListener('load', () => {
            img.current?.classList.add(styles["img--loaded"])
            imgContainer.current?.classList.remove(styles["img--loading"])
        })

    }, [])

    return (
        <div
            className={["overflow-hidden rounded-md relative", styles["img--loading"], width, height].join(' ')}
            ref={imgContainer as LegacyRef<HTMLDivElement>}
        >
            <img
                className={["w-full h-full object-cover"].join(' ')}
                ref={img as LegacyRef<HTMLImageElement>}
                {...{ src, alt }}
            />
        </div>
    )
}