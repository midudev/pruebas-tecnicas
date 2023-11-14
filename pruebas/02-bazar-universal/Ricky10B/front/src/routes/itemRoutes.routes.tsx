export const itemRoutes = {
  path: ':id',
  async lazy () {
    const { Item } = await import('../pages/Item.tsx')
    const { loader } = await import('../loaders/itemLoader.ts')
    const itemLoader = loader

    return {
      element: <Item />,
      loader: itemLoader
    }
  }
}
