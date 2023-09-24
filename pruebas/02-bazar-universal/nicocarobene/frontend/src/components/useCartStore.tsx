import { isCartOpen, cartItems } from '../store/cartStore'
import { useStore } from '@nanostores/preact';
import {useEffect} from 'preact/hooks'

export default function CartFlyoutToggle() {
	const $isCartOpen = useStore(isCartOpen)
  const $cartItems = useStore(cartItems)
  const size= $cartItems.length
  useEffect(()=>{
    const newStore = ()=> JSON.parse(window.localStorage.getItem('cartItems') ?? '[]')
    addEventListener('storage', (e) => {
     if (e.key === 'cartItems') {
       cartItems.set(newStore())
     }})
     return ()=> removeEventListener('storage', (e) => {
       if (e.key === 'cartItems') {
         cartItems.set(newStore())
       }})
   },[])
	return <button className='relative text-2xl' onClick={() => isCartOpen.set(!$isCartOpen)}>
      🛒
      <span class="sr-only">Notifications</span>
      {size === 0 ? '' : <div class='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-purple-700 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900'>{size}</div>}
    </button>;
}
