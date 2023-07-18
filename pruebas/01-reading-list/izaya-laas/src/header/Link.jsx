import { Link as LinkWouter } from 'wouter';

const Link = ({ children, to }) => {
	return (
		<li className="border border-black rounded-md overflow-hidden pb-0.5 bg-grated-pattern active:scale-95">
			<LinkWouter
				href={to}
				className="bg-white px-2 md:px-[1.15rem] w-full h-full block"
			>
				{children}
			</LinkWouter>
		</li>
	);
};

export default Link;
