import { useRoute } from "wouter";
export const NavLink = ({ title, xmlns, viewBox, path, href }) => {
  const [isActive] = useRoute(href);

  return (
    <span
      className={`${
        isActive ? "bg-base-100 text-neutral" : "bg-neutral text-base-100"
      } flex w-full h-full flex-row items-center justify-center gap gap-2 border-2 border-neutral m-0 p-0 bg-base-100`}
    >
      <svg
        xmlns={xmlns}
        className="h-5 w-5"
        fill="none"
        viewBox={viewBox}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={path}
        />
      </svg>
      {title}
    </span>
  );
};
