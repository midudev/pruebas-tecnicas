export default function FilterLayout({ children }: { children: React.ReactElement | React.ReactElement[] }) {
	return (
		<div className='bg-purple-700 text-zinc-300 flex items-center w-fit gap-2 rounded p-[2px] px-2'>{children}</div>
	)
}