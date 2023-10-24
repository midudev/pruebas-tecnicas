import { driver } from 'driver.js'

const SETTINGS_TOUR = {
  showProgress: true,
  allowClose: false,
  doneBtnText: 'Confirmar',
  closeBtnText: 'Cerrar',
  nextBtnText: 'Siguiente',
  prevBtnText: 'Anterior',
  progressText: 'Paso {{current}} de {{total}}'
}

export const tour = driver({
  ...SETTINGS_TOUR,
  steps: [
    {
      element: '#controls',
      popover: {
        title: 'Bienvenido',
        description: 'Esta es la barra de controles, desde aquí puedes controlar el listado de libros disponibles',
        position: 'bottom'
      }
    },
    {
      element: '#search',
      popover: {
        title: 'Buscador',
        description: 'Desde aquí puedes buscar libros por título, autor o editorial, etc...',
        position: 'bottom'
      }
    },
    {
      element: '#pages',
      popover: {
        title: 'Filtro de páginas',
        description: 'Desde aquí puedes filtrar los libros por páginas',
        position: 'bottom'
      }
    },
    {
      element: '#genre',
      popover: {
        title: 'Filtro de género',
        description: 'Desde aquí puedes filtrar los libros por género',
        position: 'bottom'
      }
    },
    {
      element: '#first-book',
      popover: {
        title: 'Libro',
        description: 'Este es un libro, puedes ver su información y añadirlo a tu lista de lectura con un doble click o arrastrándolo 😀',
        position: 'bottom'
      }
    },
    {
      element: '#reading-list',
      popover: {
        title: 'Lista de lectura',
        description: 'Esta es tu lista de lectura, puedes ver los libros que has añadido y eliminarlos con un doble click o arrastrándolos',
        position: 'bottom'
      }
    },
    {
      element: '#reading-list-count',
      popover: {
        title: 'Contador',
        description: 'Este es el contador de libros que has añadido a tu lista de lectura',
        position: 'bottom'
      }
    },
    {
      element: '#ALTA',
      popover: {
        title: 'Prioridad',
        description: 'Este es el nivel de prioridad que le has dado a cada libro, puedes cambiarlo arrastrándolo a otro nivel o eliminándolo de tu lista de lectura con un doble click.',
        position: 'bottom'
      }
    }
  ],
  onDestroyed: () => {
    localStorage.setItem('tour', true)
  }
})
