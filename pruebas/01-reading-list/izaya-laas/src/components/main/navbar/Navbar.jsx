import { ROUTES } from './../routes/routes';
import Link from './Link';

const Navbar = () => {
	return (
		<nav className="mt-6">
			<ul>
				<li className="text-sm md:text-base flex flex-wrap sm:flex-nowrap gap-y-2 sm:gap-y-0 gap-x-2 lg:gap-x-4">
					{ROUTES.map(({ name, pathname }) => {
						return <Link to={pathname}>{name}</Link>;
					})}
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
