import 'react'
import { faBoxesPacking, faGifts, faHeadset, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SupportGuide.css'
function SupportGuide() {
  return (
    <section className="support_guide">
        <div className="container">
            <div className="support-items">
                <div className="support-item">
                <FontAwesomeIcon icon={faTruck} />
                <h5>Free Shipping</h5>
                <p>From all orders over $100</p>
                </div>
                <div className="support-item">
                <FontAwesomeIcon icon={faHeadset} />
                <h5>Quality Support</h5>
                <p>24/7 online feedback</p>
                </div>
                <div className="support-item">
                <FontAwesomeIcon icon={faBoxesPacking} />
                <h5>Return & Refund</h5>
                <p>Return money within 30 days</p>
                </div>
                <div className="support-item">
                <FontAwesomeIcon icon={faGifts} />
                <h5>Gift Voucher</h5>
                <p>20% off when you shop online</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SupportGuide