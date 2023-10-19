import NotFoundImage from '../assets/undraw_bibliophile_re_xarc.svg'

export const NotFound = () => {
  return (
		<div className="flex flex-col justify-center items-center h-full gap-14">
			<img className="w-44" src={NotFoundImage} alt="not-found"></img>
			<h1 className="font-bold text-xl">Nothing Found</h1>
		</div>
  )
}
