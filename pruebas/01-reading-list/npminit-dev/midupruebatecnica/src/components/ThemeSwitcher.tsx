import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { BsSunFill, BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { FaSun } from 'react-icons/fa'
import { Switch } from 'antd';
import '../styles/global-variables.css'
import '../styles/themeswitch.css'


export default function ThemeSwitcher(): JSX.Element {

  const { colorMode, setColorMode } = useContext(GlobalContext)

  return (
    <div className='ThemeSw-container'>
      <Switch
        defaultChecked={ colorMode === 'light' ? false : true }
        size='default'
        className='ThemeSwitch'
        unCheckedChildren={<BsFillSunFill
          className='ThemeSWSun-icon'
        />}
        checkedChildren={<BsMoonStarsFill
          className='ThemeSWMoon-icon'
        />}
        onChange={(checked) => setColorMode(checked ? 'dark' : 'light')}
      />
    </div>
  )
}