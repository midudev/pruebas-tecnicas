import toast from 'react-hot-toast'

export const notifyAdded = () => toast('The book was added to your list!', {
  duration: 2000,
  position: 'top-center',
  icon: '✅'
})

export const notifyRemoved = () => toast('The book was removed from your list!', {
  duration: 2000,
  position: 'top-center',
  icon: '🗑️'
})
