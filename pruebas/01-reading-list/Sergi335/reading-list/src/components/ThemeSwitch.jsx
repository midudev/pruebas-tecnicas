import { useState, useEffect, useRef } from 'react'
export default function ThemeSwitch () {
  const checkboxRef = useRef(null)
  // Estado del tema
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) || 'light')
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', JSON.stringify('dark'))
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', JSON.stringify('light'))
    }
  }, [theme])
  useEffect(() => {
    if (checkboxRef.current && theme === 'dark') {
      checkboxRef.current.checked = true
    }
  }, [])
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
        <div className="toggle">
          <input ref={checkboxRef} onChange={handleThemeSwitch} type="checkbox" id="toggle-switch" />
          <label htmlFor="toggle-switch"><span className="screen-reader-text">Toggle Color Scheme</span></label>
        </div>
  )
}
