import { isDark } from '../../signals/store';
import logo from '../../assets/dark-mode.svg';

const handleIsDark = () => {
  isDark.value = !isDark.value;
};

const DarkMode = () => {
  return (
    <div className="cursor-pointer" onClick={handleIsDark}>
      <img
        src={logo}
        alt="logo"
        className="w-8 transition-transform duration-300 hover:scale-90 hover:animate-pulse"
      />
    </div>
  );
};

export default DarkMode;
