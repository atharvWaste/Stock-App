
import {Routes, Route} from 'react-router-dom'
import Home from './compo/Home/HomeBox'
import Stock from './compo/Stock/StockBox';

function App() {
  return (
 <Routes>
  <Route path='/' element={<Home/>}/>
 <Route path='/Stock' element={<Stock />}/>
 </Routes>
  )
}

export default App
