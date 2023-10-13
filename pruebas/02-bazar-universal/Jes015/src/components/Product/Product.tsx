import { CustomImage } from "@/components"
import { getFrontRoutes } from "@/config"
import { type Product as ProductType } from "@/models"
import styles from './product.module.css'

interface Props {
    data: ProductType
    mode: "min" | "all"
    containerDirection?: "flex-col" | "flex-row"
    sideSrcImages?: string[]
    mainImageSize?: string
    sideImagesSize?: string
}

export const Product: React.FC<Props> = ({ data, mode, containerDirection = "flex-col", mainImageSize = "w-[8.5rem]" }) => {
    return (
        <a href={getFrontRoutes().item(data.id)} className={["flex gap-2", styles["product"], containerDirection].join(' ')}>
            <div>
                <CustomImage
                    src={data.thumbnail}
                    alt={`${data.title} image`}
                    className={["h-full aspect-[1/1]", mainImageSize].join(' ')}
                />
            </div>
            {
                mode === "min" && (
                    <div>
                        <header>
                            <span className="text-base drop-shadow-text capitalize">{data.title}</span> // SPAN/SEO
                        </header>
                        <footer></footer>
                    </div>
                )
            }
            {
                mode === "all" && (
                    <div className="flex-grow flex flex-col gap-1">
                        <header className="flex justify-between items-center">
                            <h3 className="text-[1.4rem] drop-shadow-text font-bold">{data.title}</h3>
                            <span className="text-base drop-shadow-text font-bold">{data.price}$</span>
                        </header>
                        <div>
                            <p className="text-xs">
                                {data.description}
                            </p>
                        </div>
                        <footer>
                        </footer>
                    </div>
                )
            }
        </a>
    )
}
