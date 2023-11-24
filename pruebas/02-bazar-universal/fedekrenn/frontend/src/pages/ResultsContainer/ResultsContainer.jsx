import './resultsContainer.css'
import { useEffect, useState } from 'react'
// Router
import { useSearchParams } from 'react-router-dom'
// Components
import Header from '../../components/Header/Header.jsx'
import ResultsSkeleton from '../../components/Skeleton/ResultsSkeleton/ResultsSkeleton.jsx'
import Empty from '../../components/Empty/Empty.jsx'
import Results from '../../components/Results/Result.jsx'
// Hooks
import useSeo from '../../customHooks/useSeo.js'

export default function ResultsContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const [searchParams] = useSearchParams()
  const category = searchParams.get('search')

  useSeo({ title: `Búsqueda de "${category}"`, description: `Resultados de búsqueda de ${category}` })

  useEffect(() => {
    fetch(`http://localhost:3000/api/items?q=${category}`)
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setProducts(data)
      })

    return () => {
      setProducts([])
      setLoading(true)
    }
  }, [category])

  return (
    <>
      <Header />
      <main className='results'>
        {loading
          ? Array.from(new Array(3)).map((_, index) => <ResultsSkeleton key={index} />)
          : products.length === 0
            ? <Empty />
            : <Results category={category} products={products} />}
      </main>
    </>
  )
}
