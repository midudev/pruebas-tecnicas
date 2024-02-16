import Slider from './Slider'
import Selects from './Selects'
import DrawerComponent from './Drawer'

export default function Filters() {
  return (
    <div className='w-full flex gap-16 flex-wrap'>
        <Slider />
        <Selects />
        <DrawerComponent />
    </div>
  )
}
