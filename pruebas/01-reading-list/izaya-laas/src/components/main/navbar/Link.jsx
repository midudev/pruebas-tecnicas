import { Link as LinkWouter } from 'wouter';

const Link = ({ children, to }) => {
  return (
    <li className="overflow-hidden rounded-md border border-black bg-grated-pattern pb-0.5 active:scale-95">
      <LinkWouter
        href={to}
        className="block h-full w-full bg-white px-2 md:px-[1.15rem]"
      >
        {children}
      </LinkWouter>
    </li>
  );
};

export default Link;
