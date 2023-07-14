

const Sidebar = () => {

  return (
    <>
        <div className="fixed right-0 top-0 z-40 h-screen w-full overflow-y-auto bg-white p-4 sm:max-w-[600px] sm:p-6">
            <div className="mb-2">
                <div className="relative inline-flex rounded-md border border-gray-300">
                    <button className="inline-flex cursor-pointer items-center rounded-br-md rounded-tr-md border-l border-l-gray-300 bg-gray-100 p-1 px-2 text-sm text-black hover:bg-gray-200">
                        <span className="mr-0.5">List Reading</span>
                    </button>
                </div>
            </div>

            <div className="prose prose-quoteless prose-h1:mb-2.5 prose-h1:mt-7 prose-h2:mb-3 prose-h2:mt-0 prose-h3:mb-[5px] prose-h3:mt-[10px] prose-p:mb-2 prose-p:mt-0 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-li:m-0 prose-li:mb-0.5">
                <main>
                    <h1>Listado de libros por leer</h1>
                </main>
            </div> 
        </div>
  </>
)};

export default Sidebar;
