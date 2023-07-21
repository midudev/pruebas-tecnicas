import { isDark } from '../../signals/store';

const handleIsDark = () => {
	isDark.value = !isDark.value;
};

export const Header = () => {
	return (
		<header
			className={`text-black font-mystery px-8 gap-x-20 flex items-center border-b-2 pb-2 rounded-bl-[800px_5px] rounded-br-[800px_5px] border-black pt-4 sticky top-0 bg-white z-10 ${
				isDark.value ? 'invert' : ''
			}`}
		>
			<h1 className="text-2xl font-thin ">
				Good<span className="font-normal">reads</span>
			</h1>
			<div className="w-full flex justify-end max-w-5xl sm:pr-4">
				<img
					onClick={handleIsDark}
					src="/public/dark-mode.svg"
					className="w-8 hover:scale-90 transition-transform duration-300 hover:animate-pulse"
				/>
			</div>
		</header>
	);
};
