import { ImBooks } from 'react-icons/im';
import { useDrawerState } from '@/hooks';
import { useReadingListStore } from '@/store';

const ListToggle: React.FC = () => {
  const useDrawer = useDrawerState();
  const { count } = useReadingListStore();

  return (
    <>
    <div className="relative">
      <div 
        className={`
          ${count > 0 ? 'flex' : 'hidden'}
          absolute -right-1 -top-2
          bg-slate-500 
          rounded-full p-[2px] 
          items-center 
          pointer-events-none
          shadow-md
        `}
      >
        <small className="text-gray-300 text-xs text-center h-5 w-5 grid place-items-center">
          {count > 99 ? '99+' : count}
        </small>
      </div>

      <button
        data-testid="listToggle"
        type="button"
        className="flex items-center justify-center p-2 rounded-full border border-slate-300 hover:bg-slate-100 transition-colors"
        onClick={useDrawer.onOpen}
      >
        <ImBooks size={30} className="text-slate-500" />
      </button>
      </div>
    </>
  );
}

export default ListToggle;
