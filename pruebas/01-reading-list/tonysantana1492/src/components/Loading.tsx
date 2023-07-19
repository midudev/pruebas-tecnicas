import LoadingImage from '../assets/undraw_bookshelves_re_lxoy.svg'

export const Loading = () => {
  return (
        <div className="flex justify-center items-center flex-col gap-6 mx-auto h-screen w-80">
            <img className="w-80" src={LoadingImage} alt="loading..."></img>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="w-40 bg-blue-400 h-2 rounded-full animate-horizontal"></div>
            </div>
        </div>
  )
}
