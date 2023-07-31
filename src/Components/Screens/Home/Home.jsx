import 'react'
import Banner from '../../Partials/Banner/Banner'
import FlashDeals from './FlashDeals/FlashDeals'
import Products from '../Products/Products'
import VarticalCarousel from '../../Partials/CarouselOne/VarticalCarousel'

function Home() {
    return (
        <div className=''>
            <Banner />
            <FlashDeals />
            <Products />
            <VarticalCarousel />
        </div>
    )
}

export default Home