export default function ListLayout({ children, title }: { children: React.ReactElement, title: string }) {
	return (
		<section className='h-full p-4 relative z-10'>
			<header className='fixed place-items-center bg-zinc-900'>
				<h2 className='text-purple-700 text-2xl mb-4'>
					{title}
				</h2>
			</header>
			<div className='overflow-y-scroll h-[72vh] relative z-20 top-12 overflow-x-hidden items-center justify-center'>
				{children}
			</div>
		</section>
	)
}