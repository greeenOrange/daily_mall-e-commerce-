import './TopSearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../../Context/CartContextProvider';
import { Link } from 'react-router-dom';

function TopSearchBar({onSearch}) {
  const { state } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (searchQuery === "") {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        const filteredSuggestions = data?.filter((suggestion) =>
          suggestion?.title?.toLowerCase().includes(searchQuery?.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
        setShowSuggestions(true);
      });
  }, [searchQuery]);

  const handleSearchInputChange = (e) => {
    const query = e.target.value
    setSearchQuery(query);
    onSearch(searchQuery);
    setSuggestions([]);
    setShowSuggestions(false);
  };

 

  const handleSearch = () => {
    onSearch(searchQuery);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion?.title);
    setSuggestions([]);
    setShowSuggestions(false);
    onSearch(suggestion?.title);
  };

  return (
    <section className="top_search_bar text-black dark:text-white">
      <div className="container">
        <div className="second_nav">
          <div className="left_bar">
            <Link className="logo text-black dark:text-white" href="/"><h2>Daily mall</h2></Link>
            <div className="form-control search_input text-black dark:text-white">
              <div className="input-group text-black dark:text-white">
                <input type="text"
                  placeholder="Search…"
                  className="input input-bordered"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button
                  onClick={handleSearch}
                  className="btn text-black dark:text-white">
                  Search
                </button>
              </div>
              {showSuggestions && (
                <ul className="suggestions text-black dark:text-white">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                      {suggestion?.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <ul className="customer_cart text-black dark:text-white">
            <li className="users_cart">
              <Link to="/wishlist"><FontAwesomeIcon icon={faHeart} /></Link>
              <h5 className="count_items">{state?.wishlistItems?.length}</h5>
            </li>
            <li className="dropdown user_dropdown">
              <label tabIndex={0} className="btn user_menu m-1"><FontAwesomeIcon icon={faUser} /></label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black dark:text-white">
                <li><Link>login</Link></li>
                <li><Link>register</Link></li>
                <li><Link>logout</Link></li>
              </ul>

            </li>
            <li className="users_cart text-black dark:text-white">
              <Link to="/cart"><FontAwesomeIcon icon={faShoppingBasket} /></Link>
              {<h5 className="count_items">{state?.itemCounter}</h5>}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TopSearchBar