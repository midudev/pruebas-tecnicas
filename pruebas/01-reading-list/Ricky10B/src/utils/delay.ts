export function delay(timeDelay: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, timeDelay)
  })
}
