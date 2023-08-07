import React, { useRef, useEffect } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  fetchMoreContent: () => void; // Nueva prop para cargar más contenido
  favoriteContent: React.ReactNode[];
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  fetchMoreContent,
  favoriteContent,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    if (
      contentRef.current &&
      contentRef.current.scrollHeight - contentRef.current.scrollTop ===
        contentRef.current.clientHeight
    ) {
      fetchMoreContent();
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.addEventListener("scroll", handleScroll);
      return () => {};
    }
  }, [handleScroll]);

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-full md:w-[45vw] border-r-white rounded-t-lg border-r-4 text-white bg-black shadow-lg transform transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between  text-black items-center p-4 border-b">
        <h2 className="text-2xl font-semibold text-white ml-[2em]">
          Mis lecturas
        </h2>

        <button
          onClick={onClose}
          className="text-white hover:bg-gradient-to-tl from-red-500 to-red-700 hover:text-white px-3 py-1 rounded-md ml-2"
        >
          X
        </button>
      </div>
      <div
        ref={contentRef}
        className="p-4 text-white"
        style={{ maxHeight: "calc(100vh - 150px)", overflowY: "auto" }}
      >
        {favoriteContent}
      </div>
    </div>
  );
};

export default Sidebar;
