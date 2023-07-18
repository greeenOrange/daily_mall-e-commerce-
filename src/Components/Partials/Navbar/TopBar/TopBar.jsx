import React from 'react';
import './TopBar.css'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Switcher from '../../UseDarkSide/Switcher/Switcher';
function TopBar({colorTheme, setTheme, darkSide,
  setDarkSide}) {
  return (
    <div className={`${colorTheme!=="light" ? "top_bar" : "dark_top_bar"}`}>
      <div className="container">
        <div className="country_currency space_between">
          <a href="tel:+565889023795" className="phone text-black dark:text-white">
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>+565889023795</a>
          <div className="lang_dropdown">
            <ul className="menu menu-horizontal px-1">
            <Switcher colorTheme={colorTheme} setTheme={setTheme} darkSide={darkSide} 
          setDarkSide={setDarkSide}/>
            {/* <button className="btn"><FontAwesomeIcon icon={faMoon} /></button>
            <button className="btn"><FontAwesomeIcon icon={faSun} /></button> */}
              <li>
                <details>
                  <summary className="text-black dark:text-white">
                    English
                  </summary>
                  <ul className="p-2 bg-base-100">
                    <li><a>Bangla</a></li>
                    <li><a>Spanice</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar