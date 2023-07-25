import { HeartIcon } from './Icons/HeartIcon'

export const FooterApp = () => {
  return (
    <div>
      Hecho con <HeartIcon />
      por{' '}
      <a
        className='underline-magical'
        href='https://github.com/juancgalueweb'
        target='_blank'
        rel='noreferrer'
      >
        @juancgalue
      </a>
    </div>
  )
}
