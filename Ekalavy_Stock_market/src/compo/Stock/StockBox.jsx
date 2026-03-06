import Nav from './Nav'
import Mid from './Mid'
import MutualFunds from "../MutualFunds/MutualFundsBox";
import CryptoBox from "../Crypto/CryptoBox";

import './Stock.css'
const StockBox = ()=>{
    return(
        <section className='Stockbox'>
        <Nav />
        <Mid />
        <MutualFunds />
        <CryptoBox />
        </section>
    )
}

export default StockBox;