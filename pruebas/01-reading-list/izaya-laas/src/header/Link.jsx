import React from 'react';

const Link = ({ children }) => {
	return (
		<li className="border border-black rounded-md">
			<a href="#" className="px-6 w-full h-full block">
				{children}
			</a>
		</li>
	);
};

export default Link;
