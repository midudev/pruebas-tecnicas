/* eslint-disable @next/next/no-img-element */
'use client'
import { Products } from '@/types/types'
import { DollarSign, Euro, Star } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Page() {
  const [items, setItems] = useState<Products['products']>([])

  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  const getItems = async () => {
    const res = await fetch(`/api/items?search=${search}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return await res.json()
  }

  useEffect(() => {
    getItems().then((data) => setItems(data.products))
  }, [])

  return (
    <div className='flex flex-col gap-4 max-w-4xl mx-auto pb-12  p-8 sm:p-0 '>
      <h1 className='text-4xl'>Search</h1>

      <div className='flex flex-col gap-4 '>
        {
          <>
            {items.map((item) => (
              <div
                className='grid sm:grid-cols-[350px_auto] grid-rows-[350px]  rounded-lg shadow hover:shadow-md  transition-all border border-neutral-100'
                key={item.id}>
                <div className='border-r border-neutral-100  p-3'>
                  <img
                    src={item.thumbnail}
                    className='h-full w-full object-cover rounded-lg  '
                    alt={`thumbnail of ${item.title}`}
                  />
                </div>

                <div className='flex gap-12 flex-col justify-between py-8 px-5 '>
                  <main className='flex flex-col  gap-8'>
                    <div className='flex  gap-2  flex-col h-full '>
                      <div className='flex justify-between gap-8'>
                        <h2 className='text-2xl sm:text-2xl     first-letter:uppercase '>
                          {item.title}
                        </h2>
                        <span className=' text-xl  flex gap-1 items-center  '>
                          <Euro size={22} strokeWidth={2.2} /> {item.price}
                        </span>
                      </div>

                      <span className='flex gap-1  '>
                        {[...new Array(5)].map((arr, index) => {
                          console.log(index, item.rating)

                          return index < Math.round(item.rating) ? (
                            <Star fill='black' size={18} />
                          ) : (
                            <Star fill='white' size={18} />
                          )
                        })}
                      </span>
                    </div>

                    <p className='text-black/70 leading-relaxed '>
                      {item.description}
                    </p>
                  </main>

                  <footer className='flex gap-4 justify-between  items-center   h-full '>
                    <button className=' border border-neutral-300 py-2 px-5 rounded-lg uppercase '>
                      add to cart
                    </button>
                    <button className=' border border-neutral-300   py-2 px-5 rounded-lg uppercase '>
                      See more
                    </button>
                  </footer>
                </div>
              </div>
            ))}
          </>
        }
      </div>
    </div>
  )
}
