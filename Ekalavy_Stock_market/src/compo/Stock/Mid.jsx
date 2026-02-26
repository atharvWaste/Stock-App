import "./Stock.css";

const Mid = () => {
  const indices = [
    { name: "SENSEX", price: "72,431.10", change: "+450.20", pct: "+0.62%" },
    { name: "NIFTY 50", price: "22,120.55", change: "-12.30", pct: "-0.06%" },
    { name: "BANK NIFTY", price: "46,580.20", change: "+310.45", pct: "+0.67%" },
    { name: "NIFTY IT", price: "37,420.15", change: "+105.00", pct: "+0.28%" },
  ];

  return (
    <section className="Box">
      <div className="TickerContainer">
        <div className="TickerTrack">
          {[...indices, ...indices].map((item, index) => (
            <div className="StockTickerBlock" key={index}>
              <span className="TickerName">{item.name}</span>
              <span className="TickerPrice">{item.price}</span>
              <span className={`TickerPct ${item.pct.includes('+') ? 'up' : 'down'}`}>
                {item.pct}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="MainDashboard">

        <section className="MarketOverview">
          <div className="SectionHeader">
            <h2>Market Explorer</h2>
            <div className="MarketStatus">● Market Open</div>
          </div>

          <div className="StockGrid">
            {['Top Gainers', 'Top Losers', '52 Week High', 'Most Active'].map((category, idx) => (
              <div className="StockCategoryCard" key={idx}>
                <h3>{category}</h3>
                <div className="MiniList">
                  {[1, 2, 3].map(i => (
                    <div className="StockRow" key={i}>
                      <div className="StockInfo">
                        <span className="Symbol">TATASTEEL</span>
                        <span className="Company">Tata Steel Ltd.</span>
                      </div>
                      <div className="StockGraph">
                         <div className="Sparkline"></div>
                      </div>
                      <div className="StockValue">
                        <span className="Price">₹141.20</span>
                        <span className="Change up">+2.4%</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="ViewAllBtn">View All</button>
              </div>
            ))}
          </div>
        </section>

       
        <section className="SidePanel">
          <div className="GlassPanel">
            <h3>Quick Watchlist</h3>
            <div className="WatchlistItem">
              <span>RELIANCE</span>
              <span className="up">2,980.00</span>
            </div>
            <div className="WatchlistItem">
              <span>HDFCBANK</span>
              <span className="down">1,420.45</span>
            </div>
            <div className="WatchlistItem">
              <span>INFY</span>
              <span className="up">1,650.10</span>
            </div>
          </div>
          
          <div className="GlassPanel PromotionCard">
            <h4>Analyze with AI</h4>
            <p>Get deep insights into stock patterns.</p>
            <button className="ProBtn">Upgrade to Pro</button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Mid;