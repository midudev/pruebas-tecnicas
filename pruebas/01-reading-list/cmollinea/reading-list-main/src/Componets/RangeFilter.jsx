function RangeFilter({ handlePagesFilter, pages }) {
  return (
    <div className='grid w-fit gap-2'>
      {' '}
      <label
        htmlFor='max-pages-range'
        className='text-sm text-center text-slate-200/40'
      >
        Mínimo de paginas: {pages}
      </label>
      <input
        className='p-2'
        id='max-pages-range'
        type='range'
        role='pages-filter'
        step={100}
        min={0}
        max={1200}
        onChange={(e) => handlePagesFilter(e)}
        value={pages}
      />
    </div>
  );
}

export default RangeFilter;
