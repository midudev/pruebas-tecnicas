import { IconsCatalog } from "@/Enums/Icons.enums";
import { useDispatchActions } from "@/Hooks/useDispatchActions";
import IconsComponent from "@/components/UI/Icons";
import { BookProps } from "@/interfaces/Book.interface";

const ChangePriority = ({ item }: { item: BookProps }) => {
  const { handleChangePriorityBook } = useDispatchActions();
  return (
    <div className="absolute top-0 bottom-0 flex flex-col justify-center items-center gap-1">
      {item.starts?.map((start: boolean, index: number) => (
        // ↓↓ COMPONENTE PARA UTILZIAR ICONOS SVG POR MEDIO DE UN CATALOGO "IconsCatalog" ↓↓
        <IconsComponent
          key={index}
          icon={IconsCatalog.START}
          fill="#f2f2f2"
          isSolid={start}
          className="w-6 lg:w-8  p-1 rounded-lg bg-zinc-700 hover:scale-[1.1] transition ease-in-out duration-300 cursor-pointer"
          onClick={() => handleChangePriorityBook({ book: item, index: index })}
        />
      ))}
    </div>
  );
};

export default ChangePriority;
