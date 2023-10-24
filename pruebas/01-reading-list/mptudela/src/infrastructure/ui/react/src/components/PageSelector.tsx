type Props = {
    currentPage: number;
    nextEnabled: boolean;
    previousEnabled: boolean;
    totalPages: number;
    setNextPage: () => void;
    setPreviousPage: () => void;
};

export const PageSelector = ({ currentPage, setPreviousPage, previousEnabled, setNextPage, nextEnabled, totalPages }: Props) => {
    return (
        <div className='flex items-center gap-2'>
            <div className='join'>
                <button className='join-item btn bg-accent text-black' onClick={setPreviousPage} disabled={!previousEnabled}>
                    «
                </button>
                <button className='join-item btn'>
                    Página {currentPage + 1} de {totalPages}
                </button>
                <button className='join-item btn bg-accent text-black' onClick={setNextPage} disabled={!nextEnabled}>
                    »
                </button>
            </div>
        </div>
    );
};
