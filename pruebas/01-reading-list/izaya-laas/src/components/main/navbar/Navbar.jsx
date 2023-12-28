import { ROUTES } from './../routes/routes';
import Link from './Link';

const Navbar = () => {
  return (
    <nav className="mt-6">
      <ul>
        <li className="flex flex-wrap gap-x-2 gap-y-2 text-sm sm:flex-nowrap sm:gap-y-0 md:text-base lg:gap-x-4">
          {ROUTES.map(({ name, pathname }) => {
            return <Link to={pathname}>{name}</Link>;
          })}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
