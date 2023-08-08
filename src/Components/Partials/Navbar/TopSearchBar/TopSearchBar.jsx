import './TopSearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../../Context/CartContextProvider';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../../../Context/ProductsContextProvider';

function TopSearchBar({onSearch}) {
  const { state } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchInputChange = (e) => {
    const query = e.target.value
    setSearchQuery(query);
    onSearch(searchQuery);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  useEffect(() => {
    if (searchQuery === "") {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    fetch('http://localhost:5000/products')
      .then((response) => response.json())
      .then((data) => {
        const filteredSuggestions = data.filter((suggestion) =>
          suggestion.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
        setShowSuggestions(true);
      });
  }, [searchQuery]);


  const handleSearch = () => {
    onSearch(searchQuery);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.name);
    setSuggestions([]);
    setShowSuggestions(false);
    onSearch(suggestion.name);
  };

  return (
    <section className="top_search_bar">
      <div className="container">
        <div className="second_nav">
          <div className="left_bar">
            <a className="logo text-black dark:text-white" href="/"><h2>Daily mall</h2></a>
            <div className="form-control search_input">
              <div className="input-group">
                <input type="text"
                  placeholder="Search…"
                  className="input input-bordered"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button
                  onClick={handleSearch}
                  className="btn">
                  Search
                </button>
              </div>
              {showSuggestions && (
                <ul className="suggestions">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                      {suggestion.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <ul className="customer_cart">
            <li className="users_cart">
              <a href=""><FontAwesomeIcon icon={faHeart} /></a>
            </li>
            <li className="dropdown user_dropdown">
              <label tabIndex={0} className="btn user_menu m-1"><FontAwesomeIcon icon={faUser} /></label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>

            </li>
            <li className="users_cart">
              <Link to="/cart"><FontAwesomeIcon icon={faShoppingBasket} /></Link>
              {state.itemCounter}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TopSearchBar