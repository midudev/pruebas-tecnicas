import { FC } from 'react';
import { IAccordion } from '../../interfaces/interfaces';
import { BsPlusLg } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import { useToggle } from '../../hooks/useToggle';

export const Accordion: FC<IAccordion> = ({ title, children }) => {
  const [active, toggleActive] = useToggle();
  return (
    <article className='w-full'>
      <div className='flex items-center py-5 justify-between border-b-[1px] '>
        <h4 className='uppercase text-black'>{title}</h4>
        {!active ? (
          <BsPlusLg className='cursor-pointer text-blue-500' onClick={toggleActive} />
        ) : (
          <AiOutlineMinus className='cursor-pointer text-blue-500' onClick={toggleActive} />
        )}
      </div>
      {active && <div className='pt-4'>{children}</div>}
    </article>
  );
};
