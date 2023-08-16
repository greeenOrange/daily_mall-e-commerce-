import 'react'
import Banner from '../../Partials/Banner/Banner'
import FlashDeals from './FlashDeals/FlashDeals'
import Products from '../Products/Products'
import VarticalCarousel from '../../Partials/CarouselOne/VarticalCarousel'
import SupportGuide from '../Support&guide/Support&guide'

function Home() {
    return (
        <div className=''>
            <Banner />
            <FlashDeals />
            <Products />
            <VarticalCarousel />
            <SupportGuide />
        </div>
    )
}

export default Home