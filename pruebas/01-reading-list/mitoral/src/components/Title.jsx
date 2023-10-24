import { TypeAnimation } from 'react-type-animation'
import phrasesData from '../assets/booksPhrases.json'
import { useRef } from 'react'

function formatSequence (data) {
  const sequence = []
  data.forEach(phrase => {
    sequence.push(`«${phrase.phrase}». ${phrase.book}`)
    sequence.push(1000)
  })
  return sequence
}

export function Title () {
  const sequence = useRef(formatSequence(phrasesData.phrases))
  return (
    <>
      <section className='flex flex-col items-center mt-5 px-5 md:px-10'>
        <div>
          <h2 className='text-3xl font-bold mb-1'>Inicia tu viaje a través de las páginas</h2>
          <TypeAnimation
            sequence={sequence.current}
            speed={50}
            repeat={Infinity}
            className='text-[#999999]'
          />
        </div>
      </section>
    </>
  )
}
