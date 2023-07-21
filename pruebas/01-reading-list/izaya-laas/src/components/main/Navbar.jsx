import { ROUTES } from '../Routes/routes';
import Link from '../header/Link';

const Navbar = () => {
	return (
		<nav className="mt-6">
			<ul>
				<li className="text-sm md:text-base flex gap-x-2 lg:gap-x-4">
					{ROUTES.map(({ name, pathname }) => {
						return <Link to={pathname}>{name}</Link>;
					})}
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
