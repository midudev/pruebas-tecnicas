import { CustomImage } from "@/components"
import { type Product as ProductType } from "@/models"
import styles from './product.module.css'

interface Props {
    data: ProductType
    mode: "min" | "all"
}

export const Product: React.FC<Props> = ({ data, mode }) => {
    return (
        <article className={styles["product"]}>
            <div>
                <CustomImage
                    src={data.thumbnail}
                    alt={`${data.title} image`}
                    height="h-40"
                    width="w-40"
                />
            </div>
            {
                mode === "min" && (
                    <div>
                        <header>
                            <span className="text-base drop-shadow-text capitalize">{data.title}</span> // SPAN/SEO
                        </header>
                        <main></main>
                        <footer></footer>
                    </div>
                )
            }
            {
                mode === "all" && (
                    <div>
                        <header></header>
                        <main />
                        <footer />
                    </div>
                )
            }
        </article>
    )
}
