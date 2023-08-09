import 'react'
import UseDarkSide from '../UseDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function Switcher({colorTheme, setTheme, darkSide,
        setDarkSide}) 
  {
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };
  return (
    <>
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={30}
            />
        </>
  )
}

export default Switcher