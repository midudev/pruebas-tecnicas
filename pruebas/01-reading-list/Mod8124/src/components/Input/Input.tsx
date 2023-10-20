import { FC, ReactChild } from 'react';

interface IInput {
  placeholder: string;
  children: ReactChild;
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<IInput> = ({ children, placeholder, change }) => {
  return (
    <article className='relative'>
      <span className='absolute left-2 top-2'>{children}</span>
      <input
        className='px-8 py-1 outline-none border-[1px] border-black/40'
        onChange={change}
        type='text'
        placeholder={placeholder}
      />
    </article>
  );
};
