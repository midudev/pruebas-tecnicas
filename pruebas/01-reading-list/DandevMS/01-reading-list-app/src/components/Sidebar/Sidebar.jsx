import ListRender from "./ListRender";

const Sidebar = ({ toggleSidebar, HandleToggleSidebar }) => {
	return (
		<>
			<div
				className={`container fixed right-0 top-0 z-40 h-screen w-full overflow-y-auto bg-white p-4 sm:max-w-[600px] sm:p-6 ${
					toggleSidebar ? "" : "hidden"
				}`}
			>
				<div className="mb-2">
					<div className="relative inline-flex rounded-md border border-gray-300">
						<button
							className="inline-flex cursor-pointer items-center rounded-br-md rounded-tr-md border-l border-l-gray-300 bg-gray-100 p-1 px-2 text-sm text-black hover:bg-gray-200"
							onClick={HandleToggleSidebar}
						>
							<span className="mr-0.5">❌</span>
						</button>
					</div>
				</div>

				<div className="">
					<main>
						<h1>Listado de libros por leer</h1>
						<ListRender />
					</main>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
