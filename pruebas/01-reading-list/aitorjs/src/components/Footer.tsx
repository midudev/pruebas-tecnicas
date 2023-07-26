import { ReactElement } from 'react'

const Footer = (): ReactElement => {
  return (
    <section className='footer-container bg-purple-800 text-white text-center py-4'>
      <p>
        aitorjs | Prueba técnica: <a href='https://github.com/midudev/pruebas-tecnicas/blob/main/pruebas/01-reading-list/README.md' className='underline' rel='noreferrer'>Reading List</a> (frontend)
        | <a href='https://github.com/aitorjs/pruebas-tecnicas/tree/main/pruebas/01-reading-list/aitorjs' target='_blank' className='underline' title='Mi solución a la prueba técnica' rel='noreferrer'>Código</a>
      </p>
    </section>

  )
}

export default Footer
