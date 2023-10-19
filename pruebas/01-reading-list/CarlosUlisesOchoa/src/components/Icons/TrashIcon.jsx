const TrashIcon = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='36'
      height='36'
      fill='none'
      {...props}
      viewBox='0 0 24 24'>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M18 6l-.8 12.013c-.071 1.052-.106 1.578-.333 1.977a2 2 0 01-.866.81c-.413.2-.94.2-1.995.2H9.994c-1.055 0-1.582 0-1.995-.2a2 2 0 01-.866-.81c-.227-.399-.262-.925-.332-1.977L6 6M4 6h16m-4 0l-.27-.812c-.263-.787-.394-1.18-.637-1.471a2 2 0 00-.803-.578C13.938 3 13.524 3 12.694 3h-1.388c-.829 0-1.244 0-1.596.139a2 2 0 00-.803.578c-.243.29-.374.684-.636 1.471L8 6m6 4v7m-4-7v7'
      />
    </svg>
  )
}

export default TrashIcon
