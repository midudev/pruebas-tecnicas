import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

type Props = {
  tabs: string[];
  value: number;
  onChange: Dispatch<SetStateAction<number>>;
  children: ReactNode;
};

export default function Tabs({ tabs, value, onChange, children }: Props) {
  const [barLeft, setBarLeft] = useState('0%');

  useEffect(() => {
    const barLeft = `${value * (100 / tabs.length)}%`;
    setBarLeft(barLeft);
  }, [value, tabs.length]);

  return (
    <div className="w-full max-w-screen-xl overflow-hidden relative">
      <div className="flex relative w-full mb-12">
        <div
          style={{ left: barLeft, width: `${100 / tabs.length}%` }}
          className={`h-1 absolute bottom-0 transition-all duration-300  overflow-hidden`}
        >
          <div
            style={{ transform: `translateX(-${barLeft})` }}
            className="absolute w-screen h-1 bg-gradient-to-r from-sky-500 to-fuchsia-500"
          ></div>
        </div>

        {tabs.map((tab, idx) => (
          <div
            key={'tab' + tab}
            className={`flex-1 text-center py-2 hover:bg-gray-600/10 cursor-pointer transition-colors duration-300 select-none text-lg ${
              idx === value ? 'font-bold' : ''
            }`}
            onClick={() => onChange(idx)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div
        style={{
          width: `${100 * tabs.length}%`,
          transform: `translateX(-${(100 * value) / tabs.length}%)`,
        }}
        className="relative flex overflow-auto transition-all duration-500"
      >
        {children}
      </div>
    </div>
  );
}
