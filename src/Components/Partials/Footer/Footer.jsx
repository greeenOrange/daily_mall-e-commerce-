import  'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeadset, faPhoneVolume, faSms } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import payment from '../../../assets/brands/payment-1.png'
import payment2 from '../../../assets/brands/payment-2.png'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <section className="footer_content">
      <div className="container">
         <div className="footer_wrapper">
         <div className="footer_logo">
         <Link className={`$footer_logo_item} logo text-white text-black dark:text-white`} href="/"><h2>Daily mall</h2></Link>
         <h3 className="footer_title">Accounts & Shipping Info</h3>
         <ul>
          <li>
            <Link className="footer_item" to="">Profile Info</Link>
          </li>
          <li>
            <Link className="footer_item" to="">Wishlisht</Link>
          </li>
          <li>
            <Link className="footer_item" to="">Track Order</Link>
          </li>
          <li>
            <Link className="footer_item" to="">Address</Link>
          </li>
         </ul>
         </div>

          <nav className="footer_nav">
            <h3 className="footer_title">Special</h3>
            <ul className="flow" aria-label="footer" role="list">
              <li>
                <Link className="footer_item" to="">Flash Deal</Link>
                </li>
              <li>
                <Link className="footer_item" to="">Featured Products</Link>
                </li>
              <li>
                <Link className="footer_item" to="">Latest Products</Link>
                </li>
              <li>
                <Link className="footer_item" to="">Best Selling Products</Link>
                </li>
              <li>
                <Link className="footer_item" to="">Top Rated Products</Link>
                </li>
            </ul>
          </nav>
          <div className="check_out">
            <h3 className="footer_title">CHECK OUT APP</h3>
            <h4 className="footer_search">NewsLetter</h4>
            <p className="text-base font-light pb-4">Subscribe our new channel to get latest update</p>
            <div className="search_input form-control">
            <div className="input-group">
              <input type="text" placeholder="Your Email number.." className="input input-bordered" />
              <button className={`$btn} btn`}>
                subscription
              </button>
            </div> 
            </div>
          </div>
         </div>
         <div className="conversation_line">
          <div>
           <h3 className="footer_convers">Start a conversation</h3>
          </div>
           <div className="payment_line">
           <span><FontAwesomeIcon icon={faPhoneVolume}/>+565889023795</span>
           <span><FontAwesomeIcon icon={faSms}/>Contact@daily mall.com</span>
           <span><FontAwesomeIcon icon={faHeadset}/>Supprt centerp</span>
           <div className="payment d-block">
            <img
            src={payment}
            alt='payment'
            />
            <img src={payment2} alt="bkash" />
           </div>
           </div>
         </div>
      </div>
    </section>
    <div className="footer_copyright">
          <div className="container">
            <div className="copyright_wrapper">
              <p className="copyright">Copyright @ 2022 Daily mall</p>
              <ul className="social_items">
                <li className="social_item">
                  <Link className="social_links" to="">
                  <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                  </li>
                <li className="social_item">
                  <Link className="social_links" to="">
                  <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  </li>
                <li className="social_item">
                  <Link className="social_links" to="">
                  <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                  </li>
                <li className="social_item">
                  <Link className="social_links" to="">
                  <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  </li>
              </ul>
              <span className="terms_conditions"><Link to="">Terms & Condition</Link>
              <Link to="">Privacy Policy</Link></span>
            </div>
          </div>
    </div>
    </>
  )
}

export default Footer