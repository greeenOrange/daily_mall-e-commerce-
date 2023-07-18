import 'react'
import Banner from '../../Partials/Banner/Banner'
import FlashDeals from './FlashDeals/FlashDeals'
import Products from '../Products/Products'

function Home() {
    return (
        <div className=''>
            <Banner />
            <FlashDeals />
            <Products />
        </div>
    )
}

export default Home