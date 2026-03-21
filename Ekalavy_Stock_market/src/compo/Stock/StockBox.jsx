import Nav from './Nav'
import Mid from './Mid'
import MutualFunds from "./MutualFunds/MutualFundsBox";
import CryptoBox from "./Crypto/CryptoBox";
import News from './News/News';
import Footer from './Footer/Footer';
import './Stock.css'
const StockBox = ()=>{
    return(
        <section className='Stockbox'>
        <Nav />
        <Mid />
        <MutualFunds />
        <CryptoBox />
        <News />
        <Footer />
        </section>
    )
}

export default StockBox;