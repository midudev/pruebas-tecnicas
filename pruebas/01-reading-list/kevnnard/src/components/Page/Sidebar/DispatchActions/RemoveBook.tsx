import { IconsCatalog } from "@/Enums/Icons.enums";
import { useDispatchActions } from "@/Hooks/useDispatchActions";
import IconsComponent from "@/components/UI/Icons";
import { BookProps } from "@/interfaces/Book.interface";

const RemoveBook = ({ item }: { item: BookProps }) => {
  const { handleRemoveBook } = useDispatchActions();

  return (
    // ↓↓ COMPONENTE PARA UTILZIAR ICONOS SVG POR MEDIO DE UN CATALOGO "IconsCatalog" ↓↓
    <IconsComponent
      icon={IconsCatalog.CLOSE}
      fill="#f2f2f2"
      className="absolute w-8 top-0 right-0 p-1 rounded-s-lg bg-red-500 hover:scale-[1.1] transition ease-in-out duration-300 cursor-pointer"
      onClick={() => handleRemoveBook(item)}
    />
  );
};

export default RemoveBook;
