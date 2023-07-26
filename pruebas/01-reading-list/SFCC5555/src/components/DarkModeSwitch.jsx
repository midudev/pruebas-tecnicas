import { useSelector } from "react-redux"
import { changeDarkModeStatus } from "../redux/darkModeSlice"
import { useDispatch } from "react-redux"

const DarkModeSwitch = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.darkMode);

  return (
    // Use a div as the DarkModeSwitch component
    // Add an onClick event to toggle the darkMode state when clicked
    // Dispatch the 'changeDarkModeStatus' action with the new value of darkMode (true or false)
    // Use conditional classes to set the class names dynamically based on the darkMode value
    <div onClick={() => dispatch(changeDarkModeStatus(!darkMode))} className={`absolute top-5 right-5 w-16 h-6 flex items-center rounded-full p-1 cursor-pointer ${darkMode ? 'justify-end light' : 'dark'}-mode z-20`}>
      <div className={`w-5 h-5 ${darkMode ? 'dark' : 'light'}-mode rounded-full`} />
    </div>
  );
};

export { DarkModeSwitch };