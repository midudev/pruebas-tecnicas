import { ReactNode, useEffect, useRef, useState } from 'react';

type Props = {
  value: number;
  index: number;
  children: ReactNode;
};

export default function Tab({ value, index, children }: Props) {
  const [show, setShow] = useState(false);
  const _tab = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setShow(value === index);

    if (_tab.current == null) return;

    if (value !== index) {
      setTimeout(() => {
        _tab.current!.style.height = '80px';
      }, 300);
    } else {
      _tab.current!.style.height = 'auto';
    }
  }, [value, index]);

  return (
    <div ref={_tab} className={`w-full overflow-hidden `}>
      <div className={`w-full transition-all duration-300 ${show ? 'opacity-100' : 'opacity-0'} `}>
        {children}
      </div>
    </div>
  );
}
