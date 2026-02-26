const CryptoMain = () => {
  const CryptoTrack = [
    { name: "SENSEX", price: "72,431.10", change: "+450.20", pct: "+0.62%" },
    { name: "NIFTY 50", price: "22,120.55", change: "-12.30", pct: "-0.06%" },
    {
      name: "BANK NIFTY",
      price: "46,580.20",
      change: "+310.45",
      pct: "+0.67%",
    },
    { name: "NIFTY IT", price: "37,420.15", change: "+105.00", pct: "+0.28%" },
  ];

  return (
    <section className="Box">
      <div className="topRow">
        <div className="single">
          {[...CryptoTrack].map((item, index) => (
            <div className="contain" key={index}>
              <span>{item.name}</span>
              <span>{item.price}</span>
              <span className={`${item.pct.includes("+") ? "up" : "down"}`}>
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
      </div>

    </section>
  );
};

export default CryptoMain;
