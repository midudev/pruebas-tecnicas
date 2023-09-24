import { useStore } from '@nanostores/preact'
import { isCartOpen, cartItems } from '../store/cartStore'
import {useEffect} from 'preact/hooks'

export default function CartFlyout () {
	const $isCartOpen = useStore(isCartOpen)
  const $cartItems = useStore(cartItems)
	const total= $cartItems.reduce((acc, cartItem)=>{
		return acc + cartItem.price * cartItem.quantity
	},0)
	const addItem=(cartItem)=>{
		const findProduct= $cartItems.findIndex((product) => product.id === cartItem.id)
		if(findProduct !== -1){
			const newStore= [...$cartItems]
			newStore[findProduct].quantity= newStore[findProduct].quantity + 1
			cartItems.set(newStore)
		}
	}
	const removeItem=(cartItem)=>{
		const findProduct= $cartItems.findIndex((product) => product.id === cartItem.id)
		if(findProduct !== -1){
			const newStore= [...$cartItems]
			if(newStore[findProduct].quantity === 1){
				const newStore2= newStore.filter((product) => product.id !== cartItem.id)
				cartItems.set(newStore2)
				return
			}
			newStore[findProduct].quantity= newStore[findProduct].quantity - 1
			cartItems.set(newStore)
		}
	}
  return (
		<aside hidden={!$isCartOpen} className='fixed right-0 top-0 h-full bg-slate-500 min-w-[130px] border-l-indigo-300'>
			<button onClick={()=> isCartOpen.set(false)} className='bg-slate-800 rounded-full p-1 text-xs m-2'>❌</button>
			{$cartItems.length
			  ? (
				<ul className='list-none px-1' role='list'>
					{$cartItems.map((cartItem) => (
						<li className='flex flex-col gap-4 items-center my-3 mb-8'>
							<img className='w-20' src={cartItem.imageSrc} alt={cartItem.name} />
							<div className='max-w-[140px]'>
								<h3 className='font-bold text-center truncate'>{cartItem.name}</h3>
								<p className='text-sm text-center'>Quantity: {cartItem.quantity}</p>
								<button className='bg-slate-900 rounded-full p-[0.3rem] text-xs m-2 truncate' onClick={()=>addItem(cartItem)}>➕</button>
									{cartItem.price * cartItem.quantity}$
								<button className='bg-slate-900 rounded-full p-[0.3rem] text-xs m-2' onClick={()=>removeItem(cartItem)}>➖</button>
							</div>
						</li>
					))}
					<strong className='block w-full m-auto text-center'>Total: {total}$</strong>
				</ul>
			    )
			  : (
					<>
						<p className='text-sm text-center'>Your cart is empty!</p>
						<p className='text-center'>😔</p>
					</>
			    )}
		</aside>
  )
}