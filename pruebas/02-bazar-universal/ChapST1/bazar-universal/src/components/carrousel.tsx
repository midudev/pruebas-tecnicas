"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../components/ui/carousel";

export function Carrousel({ images }: { images: string[] }) {
	return (
		<Carousel className="">
			<CarouselContent>
				{images.map((item) => {
					return (
						<CarouselItem key={item}>
							<img src={item} className="w-full h-full object-cover" />
						</CarouselItem>
					);
				})}
			</CarouselContent>
			<CarouselPrevious className="left-0" />
			<CarouselNext className="right-0" />
		</Carousel>
	);
}
