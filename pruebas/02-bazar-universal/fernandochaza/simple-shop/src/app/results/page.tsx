const ResultsPage = ({ searchParams }: { searchParams: { query: string } }) => {
  const { query } = searchParams
  return (
    <>
      <h1>Searching results for "{query}"</h1>
    </>
  )
}

export default ResultsPage
