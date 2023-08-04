import { useState } from "react";
import { UseColorTheme } from "../../hooks/useColorTheme";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as Moon } from "../../assets/moon-regular.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as Sun } from "../../assets/sun-regular.svg";
import { MoonRegular, SunRegular } from "../../assets/icons/icons";

const ColorThemeSwitch = () => {
  const { theme, setTheme } = UseColorTheme();
  const [isDark, setIsDark] = useState(theme === "light" ? 0 : 1);

  const toggleDarkMode = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
    setIsDark(checked ? 1 : 0);
  };

  const iconClass =
    "absolute w-4 transition-opacity ease-in-out transition-delay[300ms]";

  const switcherClassPeer =
    "peer peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['']";
  const switcherClassAfter =
    "after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all";
  const switcherClass = "relative w-11 h-6 rounded-full";

  const switcherClassLight =
    "peer-focus:ring-slate-800 bg-gray-200 peer-checked:bg-slate-600";
  const switcherClassDark =
    "dark:peer-focus:ring-gray-300 dark:bg-gray-700 dark:border-slate-600";
  return (
    <div className="absolute top-5 right-5">
      <label className="relative inline-flex items-center mr-5 cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          value={isDark}
          checked={isDark ? true : false}
          onChange={({ target }) => toggleDarkMode(target.checked)}
        />

        <div
          className={`${switcherClass} ${switcherClassPeer} ${switcherClassAfter} ${switcherClassLight} ${switcherClassDark}`}
        >
          <div
            className={`${iconClass} fill-gray-200 ${
              isDark ? "opacity-1" : "opacity-0"
            }  top-[1px] left-1`}
          >
            <MoonRegular />
          </div>
          <div
            className={`${iconClass} fill-gray-700 ${
              isDark ? "opacity-0" : "opacity-1"
            } top-1 right-1`}
          >
            <SunRegular />
          </div>
        </div>
      </label>
    </div>
  );
};

export default ColorThemeSwitch;
