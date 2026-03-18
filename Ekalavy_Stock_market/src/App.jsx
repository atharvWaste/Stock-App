import { Routes, Route } from "react-router-dom";
import Home from "./compo/Home/HomeBox";
import Stock from "./compo/Stock/StockBox";
import WBox from './compo/Wishlist/WBox'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Stock" element={<Stock />} />
      <Route path="/WBox" element={<WBox />} />
 </Routes>
  );
}

export default App;
