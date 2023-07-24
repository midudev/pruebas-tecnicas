import Clean from './icons/Clean'
import { useReadListStore } from '../stores/BookStore'

export default function CleanReadList () {
  const { readList } = useReadListStore()
  const clean = useReadListStore(state => state.clean)
  return (
    <button className={`text-blue-600 font-semibold bg-slate-700 border border-blue-600 absolute sm:right-[202px] right-20 top-5 sm:top-6 p-3 rounded flex items-center justify-center ${readList.length <= 0 ? 'opacity-50' : 'opacity-100 transition hover:scale-105'}`} disabled={readList.length <= 0} onClick={clean} aria-label='clean-read-list'><Clean /></button>
  )
}
