export const ribbonColor = (genre) => {
  let color
  switch (genre) {
    case 'Fantasía':
      color = '#ef6c00'
      break
    case 'Ciencia ficción':
      color = '#1565c0'
      break
    case 'Zombies':
      color = '#00c853'
      break
    case 'Terror':
      color = '#6200ea'
      break
    default:
      color = 'black'
  }
  return color
}
