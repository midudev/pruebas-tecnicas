import { LEFT_ARROW, RIGHT_ARROW } from '../icons/icons'

export default function Buttons ({ direction }: { direction: string }): JSX.Element {
  const className = `${direction === 'left' ? 'btn-left' : 'btn-right'}`
  const btn = direction === 'left' ? LEFT_ARROW : RIGHT_ARROW

  const handleClick = (event: React.MouseEvent): void => {
    const $carouselContainer = document.querySelector('.content-section .carousel-container') as HTMLDivElement
    const $carousel = document.querySelector('.content-section .carousel') as HTMLDivElement
    const $carouselToRead = document.querySelector('.content-section-to-read .carousel') as HTMLDivElement

    const target = event.target as Element

    if (target.matches('.content-section .btn-left *')) {
      $carousel.style.transform = 'translateX(0%)'
    } else if (target.matches('.content-section .btn-right *')) {
      $carousel.style.transform = `translateX(-${$carousel.clientWidth - $carouselContainer.clientWidth}px)`
    }

    if (target.matches('.content-section-to-read .btn-left *')) {
      $carouselToRead.style.transform = 'translateX(0%)'
    } else if (target.matches('.content-section-to-read .btn-right *')) {
      $carouselToRead.style.transform = `translateX(-${$carouselToRead.clientWidth - $carouselContainer.clientWidth}px)`
    }
  }

  return (
    <button onClick={handleClick} className={className}>{btn}</button>
  )
}
