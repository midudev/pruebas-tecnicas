
export const Tooltip = ({ text, children }) => {
  return (
    <div className="relative group">
      <span className="group-hover:opacity-100 opacity-0 bg-black text-white text-xs rounded py-2 px-2 absolute z-10 top-full right-1/2 transform translate-x-1/2">
        {text}
      </span>
      {children}
    </div>
  );
};

