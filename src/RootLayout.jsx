import { useState } from 'react'
import UseDarkSide from './Components/Partials/UseDarkSide/UseDarkSide';
import Navbar from './Components/Partials/Navbar/Navbar';

function RootLayout() {
    const [colorTheme, setTheme] = UseDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );
  return (
    <div className="h-screen w-full overflow-hidden bg-white
        shadow-md dark:bg-gray-800 dark:border-gray-700 scroll_bar">
         <Navbar colorTheme={colorTheme} setTheme={setTheme} darkSide={darkSide} 
         setDarkSide={setDarkSide} />
      </div>
  )
}

export default RootLayout