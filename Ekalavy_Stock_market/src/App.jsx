
import {Routes, Route} from 'react-router-dom'
import Home from './compo/Home/HomeBox'
import Stock from './compo/Stock/StockBox';
import CryptoBox from './compo/Crypto/CryptoBox'
import MutualFunds from './compo/MutualFunds/MutualFundsBox'
function App() {
  return (
 <Routes>
  <Route path='/' element={<Home/>}/>
 <Route path='/Stock' element={<Stock />}/>
  <Route path='/CryptoBox' element={<CryptoBox />}/>
    <Route path='/MutualFunds' element={<MutualFunds />}/>
 </Routes>
  )
}

export default App
