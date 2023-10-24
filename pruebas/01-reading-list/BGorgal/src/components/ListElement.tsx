
interface Props {
  principal: string
  secondary: string
}

const ListElement = ({principal, secondary}: Props) => {
  return (
    <div  className='flex  flex-col pb-3'>
      <dt className='mb-1 text-gray-500 dark:text-gray-400 md:text-sm'>
        {secondary}
      </dt>
      <dd className='text-sm font-semibold'>{principal}</dd>
    </div>
  )
}

export default ListElement