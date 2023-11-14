export const resultSearchRoutes = {
  path: '',
  async lazy () {
    const { ResultsSearch } = await import('../pages/ResultsSearch.tsx')
    const { loader } = await import('../loaders/resultLoaders.ts')
    const resultsLoader = loader

    return {
      element: <ResultsSearch />,
      loader: resultsLoader
    }
  }
}
