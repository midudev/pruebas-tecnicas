import { isDark } from '../../signals/store';

const handleIsDark = () => {
  isDark.value = !isDark.value;
};

const DarkMode = () => {
  return (
    <div onClick={handleIsDark}>
      <img
        src="/public/dark-mode.svg"
        className="w-8 transition-transform duration-300 hover:scale-90 hover:animate-pulse"
      />
    </div>
  );
};

export default DarkMode;
