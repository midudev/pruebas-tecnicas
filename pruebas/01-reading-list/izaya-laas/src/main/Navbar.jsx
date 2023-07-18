import Link from '../header/Link';

const Navbar = () => {
	return (
		<nav className="mt-6">
			<ul>
				<li className="text-sm md:text-base flex gap-x-2 lg:gap-x-4">
					<Link to="/">All books</Link>
					<Link to="/my-books">My books</Link>
					<Link to="/recommends">Recommend for you</Link>
					<Link to="/sandbox">Sandbox</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
