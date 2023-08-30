const SvgIcon = ({ children, viewBox, className }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);
export const BookIcon = () => (
  <SvgIcon viewBox="0 0 24 15" className="w-6 h-7">
    <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
  </SvgIcon>
);
export const XSAMPAIcon = () => (
  <SvgIcon viewBox="0 0 24 15" className="w-6 h-7">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 1 4 4 4-4"
    />
  </SvgIcon>
);
export const SearchIcon = () => (
  <SvgIcon viewBox="0 0 24 24" className="w-6 h-5">
    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </SvgIcon>
);
export const ListIcon = () => (
  <SvgIcon viewBox="0 0 24 24" className="w-6 h-5">
    <path d="M.301 17.615c-.13-.34-.522-1.512-.133-2.432l9.827 5.674a.329.329 0 00.33 0L24 12.962v2.354l-13.84 7.99L.3 17.615zm-.11-8.652c-.288.877.015 2.058.124 2.426l9.845 5.684L24 9.083V6.726l-13.675 7.896a.329.329 0 01-.33 0L.19 8.963zm13.17-1.936a.332.332 0 01-.485-.207l-.28-1.133-2.126-.176a.33.33 0 01-.138-.614l5.578-3.22-1.702-.983-13.51 7.8 9.462 5.462 13.51-7.8-4.4-2.54-5.91 3.41zm-.182-1.729l.232.938 5.198-3.001-2.04-1.178-4.993 2.884 1.31.108a.33.33 0 01.293.25zM24 9.845L10.325 17.74a.329.329 0 01-.33 0L.168 12.067c-.39.919.003 2.091.133 2.43l9.859 5.693L24 12.2V9.844z" />
  </SvgIcon>
);
export const LinIcon = () => (
  <SvgIcon viewBox="0 0 20 20" className="w-10 h-6">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 1a1 1 0 00-1 1v11a1 1 0 001 1h11a1 1 0 001-1V2a1 1 0 00-1-1H2zm1.05 5h1.9v6h-1.9V6zm2.025-1.995a1.075 1.075 0 11-2.15 0 1.075 1.075 0 012.15 0zM12 8.357c0-1.805-1.167-2.507-2.326-2.507-.379-.018-.757.061-1.095.231-.257.13-.526.424-.734.938h-.053V6H6v6.005h1.906V8.81c-.027-.327.077-.75.291-1.001.215-.252.52-.312.753-.342h.073c.606 0 1.056.375 1.056 1.32v3.217h1.906L12 8.357z"
      clipRule="evenodd"
    />
  </SvgIcon>
);
export const TopIcon = () => (
  <SvgIcon viewBox="0 0 25 25" className="w-10 h-10">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.21,9.79l-2.5-2.5a1,1,0,0,0-1.42,0l-2.5,2.5a1,1,0,0,0,1.42,1.42l.79-.8V16a1,1,0,0,0,2,0V10.41l.79.8a1,1,0,0,0,1.42,0A1,1,0,0,0,15.21,9.79Z"
    ></path>
  </SvgIcon>
);
