import { Routes, Route } from "react-router-dom";
import Home from "./compo/Home/HomeBox";
import Stock from "./compo/Stock/StockBox";

import Discription from "./compo/linkerCompo/Discription";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Stock" element={<Stock />} />
      <Route path="/Discription/:symbol" element={<Discription />} />
    </Routes>
  );
}

export default App;
