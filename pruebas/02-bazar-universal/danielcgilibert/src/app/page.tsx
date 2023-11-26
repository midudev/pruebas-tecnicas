'use client'
/* eslint-disable jsx-a11y/alt-text */
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const r = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    r.push(`/items/?search=${(e.target as any).elements[0].value}`)
  }
  return (
    <>
      <header className='flex flex-col'>
        <h1 className='text-6xl text-center'>Bazar online</h1>
        <img src='/truck.svg' className=' max-h-[200px]' />
      </header>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <Input type='text' placeholder='Buscar' />
        <Button>Buscar</Button>
      </form>
    </>
  )
}
