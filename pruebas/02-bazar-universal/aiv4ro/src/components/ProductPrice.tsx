'use client'

export function ProductPrice ({
  price
}: {
  price: number
}) {
  const currency = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD'
  })

  return (
    <span className='font-bold'>
      {currency.format(price)}
    </span>
  )
}
