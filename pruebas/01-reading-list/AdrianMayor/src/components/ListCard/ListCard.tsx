import useHandleCards from "@/hooks/useHandleCards";
import { Book } from "@/models/book.model";
import Image from "next/image";
import styles from "./ListCard.module.scss";

interface ListCardProps {
	book: Book;
}

const ListCard = ({ book }: ListCardProps) => {
	const { handleRemove } = useHandleCards({ book });

	return (
		<article className={styles.listCard_container}>
			<button className={styles.listCard_button_image_container} onClick={() => handleRemove()}></button>
			<Image src={book.cover} fill alt={"Book in reading list image"} sizes='(width:7rem)' priority={false} />
		</article>
	);
};

export default ListCard;
