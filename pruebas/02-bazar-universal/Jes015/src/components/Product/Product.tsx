import { CustomImage } from "@/components"
import { getFrontRoutes } from "@/config"
import { type Product as ProductType } from "@/models"
import styles from './product.module.css'

interface Props {
    as: keyof JSX.IntrinsicElements
    data: ProductType
    mode: "min" | "all"
    containerGridTemplateArea: string
    gridTemplateColumns?: string
    containerDirection?: "flex-col" | "flex-row"
    showSideImages?: boolean
    showBuyButton?: boolean
    titleStyles?: string
    imageSizeStyles?: string
    sideImagesSize?: string
}

// MiduMorphic component <3

export const Product: React.FC<Props> = ({ as, data, mode, containerDirection = "flex-col", imageSizeStyles = "w-[8.4rem]", showSideImages = false, sideImagesSize, titleStyles, showBuyButton = false, containerGridTemplateArea, gridTemplateColumns }) => {
    const CustomComponent = as

    return (
        <CustomComponent
            style={{
                display: 'grid',
                gridTemplateAreas: containerGridTemplateArea,
                gridTemplateColumns: gridTemplateColumns
            }}
            className={["flex gap-2", styles["product"], containerDirection].join(' ')}
            {...(as === 'a' ? { href: getFrontRoutes().item(data.id) } : {})}
        >
            {
                mode === "all" && (
                    <section
                        style={{
                            gridArea: 'productData'
                        }}
                        className="flex-grow flex flex-col gap-1"
                    >
                        <header className="flex justify-between items-center">
                            <h3 className={["text-[1.4rem] drop-shadow-text font-bold", titleStyles].join(' ')}>{data.title}</h3>
                        </header>
                        <div>
                            <p className="text-xs">
                                {data.description}
                            </p>
                        </div>
                        <footer className="flex justify-between">
                            <span className="text-base drop-shadow-text capitalize">{data.stock} available</span>
                            <span className="text-xl drop-shadow-text font-bold">{data.price}$</span>
                        </footer>
                    </section>
                )
            }
            {
                mode === "min" && (
                    <section
                        style={{
                            gridArea: 'productData'
                        }}
                    >
                        <header>
                            <span className="text-base drop-shadow-text capitalize">{data.title}</span>
                        </header>
                    </section>
                )
            }
            <section
                style={{
                    gridArea: 'images',
                }}
                className={data.images ? 'grid gap-4' : ''}
            >
                {
                    showSideImages
                        ?
                        <div
                            className="flex gap-2"
                        >
                            <CustomImage
                                src={data.thumbnail}
                                alt={`${data.title} image`}
                                className={["flex-[5] w-full h-full <aspect-[1/1]", imageSizeStyles].join(' ')}
                            />
                            <div className="flex-[3] flex flex-col gap-2">
                                {
                                    data.images.slice(2, 5)?.map((sideImage) => (
                                        <CustomImage
                                            key={sideImage}
                                            src={sideImage}
                                            alt={`${data.title} image`}
                                            className={[sideImagesSize].join(' ')}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        :
                        <CustomImage
                            src={data.thumbnail}
                            alt={`${data.title} image`}
                            className={["aspect-[1/1]", imageSizeStyles].join(' ')}
                        />
                }
            </section>
            {
                showBuyButton &&
                <section
                    className="flex justify-center w-full"
                    style={{
                        gridArea: 'productButtons'
                    }}
                >
                    <button className="bg-white drop-shadow-text text-black w-full p-3 rounded-md font-bold">BUY</button>
                </section>
            }
        </CustomComponent>
    )
}
