import 'react'
import './TopSearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
function TopSearchBar() {
  return (
    <section className="top_search_bar">
      <div className="container">
        <div className="second_nav">
          <div className="left_bar">
            <a className="logo text-black dark:text-white" href="/"><h2>Daily mall</h2></a>
            <div className="form-control search_input">
              <div className="input-group">
                <input type="text" placeholder="Search…" className="input input-bordered" />
                <button className="btn">
                  Search
                </button>
              </div>
            </div>
          </div>
          <ul className="customer_cart">
            <li className="users_cart">
              <a href=""><FontAwesomeIcon icon={faHeart} /></a>
            </li>
            <li className="dropdown user_dropdown">
                <label tabIndex={0} className="btn user_menu m-1"><FontAwesomeIcon icon={faUser}/></label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>

            </li>
            <li className="users_cart">
              <a href=""><FontAwesomeIcon icon={faShoppingBasket} /></a>
              $13.130
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TopSearchBar