export default function ThemeSwitch ({ changeTheme }) {
  return (
        <div className="toggle">
            <span>☀️</span>
            <input onChange={changeTheme} type="checkbox" id="toggle-switch" />
            <label htmlFor="toggle-switch"><span className="screen-reader-text">Toggle Color Scheme</span></label>
            <span>🌙</span>
        </div>
  )
}
