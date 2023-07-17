import Search from 'antd/es/input/Search'
import { FieldValues, FormProps, Mode, SubmitHandler, useForm } from 'react-hook-form'
import { FormEvent, useContext, useRef } from 'react'
import { Book } from '../../types/books'
import { GlobalContext } from '../../contexts/GlobalContext'

export default function SearchBar(): JSX.Element {

  const { setBookList } = useContext(GlobalContext)

  const { register, setValue, handleSubmit, formState: { isDirty, isValid }} = useForm(
    { 
      defaultValues: formDefValues,  
      mode: formMode
    });
    
  const search = (data: any) => {
    console.log(data)
    console.log('handle Submit')
    setBookList(bookList => setNewBookList(bookList ?? [], data.toSearch))
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <Search
        placeholder="Look for a book"
        style={{ width: 200 }}
        maxLength={50}
        minLength={1}
        allowClear={true}
        status={!isValid && isDirty ? 'error' : ''}
        onInput={(e: FormEvent<HTMLInputElement>) => setValue('toSearch', e.currentTarget.value)}
        onSearch={(value, e) => {
          setValue('toSearch', value.trim())
          handleSubmit(search)();
        }}
        { ...register('toSearch', {
          required: true,
          pattern: /^(\w|-|: |[-ñÑ]){1,50}$/im,
          validate: (value) => value.trim().length !== 0,
        }) }
      />
    </form>
  )
}

export const setNewBookList = (bookList: Book[], searchTarget: string): Book[] => {
  let newBookList: Book[] = []
  const { crit1, crit2, crit3, crit4 } = utilRegexp(searchTarget)
  newBookList = bookList.reduce((acc, curr) => {
    if(crit1.test(curr.title)) acc[0].push(curr)
    else if(crit2.test(curr.title)) acc[1].push(curr)
    else if(crit3.test(curr.title)) acc[2].push(curr)
    else if(crit4.test(curr.title)) acc[3].push(curr)
    else acc[4].push(curr)
    return acc
  }, 
  [[], [], [], [], []] as Array<Book[]>).flat()
  return newBookList
}

const formDefValues: FieldValues = { toSearch: "" }

const formMode: Mode = 'all'

const utilRegexp = (searchTarget: string) => {
  return {
    crit1: new RegExp(`(${searchTarget})(\w|-|:| |[nÑ])*`, ''),
    crit2: new RegExp(`(${searchTarget})(\w|-|:| |[nÑ])*`, 'i'),
    crit3: new RegExp(`(\w|[ñÑ]|-|:| )*?(${searchTarget})(\w|[ñÑ]|-|:| )*?`, ''),
    crit4: new RegExp(`(\w|[ñÑ]|-|:| )*?(${searchTarget})(\w|[ñÑ]|-|:| )*?`, 'i'),
  }
}

