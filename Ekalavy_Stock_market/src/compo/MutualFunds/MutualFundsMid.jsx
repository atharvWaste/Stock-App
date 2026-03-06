import "./MutualFunds.css";

const MutualFundsMid = () => {
  const ArrMutualFundsMid = [
    { Name: "TATASTEELE", price: "12345", change: "852", pct: "-2.6%" },
    { Name: "TATASTEELE", price: "12345", change: "852", pct: "-2.6%" },
    { Name: "TATASTEELE", price: "12345", change: "852", pct: "+2.6%" },
    { Name: "TATASTEELE", price: "12345", change: "852", pct: "-2.6%" },
  ];

  const funds = [
    {
      Name: "TATA",
      lineContent: "about type of production",
      price: "5246",
      pct: "+1.5",
    },
    {
      Name: "TATA",
      lineContent: "about type of production",
      price: "5246",
      pct: "+1.5",
    },
    {
      Name: "TATA",
      lineContent: "about type of production",
      price: "5246",
      pct: "+1.5",
    },
   
  ];



  const CardInfo=[
    {
      Name:"TATASTEEL",
      companyInfo:"Tata Steel Ltd.",
      price:"₹141.20",
      pct:"+2.4%"
    },
     {
      Name:"TATASTEEL",
      companyInfo:"Tata Steel Ltd.",
      price:"₹141.20",
      pct:"+2.4%"
    }, {
      Name:"TATASTEEL",
      companyInfo:"Tata Steel Ltd.",
      price:"₹141.20",
      pct:"+2.4%"
    }, {
      Name:"TATASTEEL",
      companyInfo:"Tata Steel Ltd.",
      price:"₹141.20",
      pct:"+2.4%"
    }, {
      Name:"TATASTEEL",
      companyInfo:"Tata Steel Ltd.",
      price:"₹141.20",
      pct:"+2.4%"
    },
  ]
  return (
    <section className="Box">
      <div className="TickerContainer">
        <div className="TickerTrack">
          {[...ArrMutualFundsMid, ...ArrMutualFundsMid].map((item, index) => (
            <div className="StockTickerBlock" key={index}>
              <span className="TickerName">{item.Name}</span>
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
            <h2>Mutual Funds <samp className="Tilt">Explorer</samp></h2>
            <div className="MarketStatus">● Market Open</div>
          </div>

          <div className="StockGrid">
            {['Top Gainers', 'Top Losers', '52 Week High', 'Most Active'].map((category, idx) => (
              <div className="StockCategoryCard" key={idx}>
                <h3>{category}</h3>
                <div className="MiniList">
                  {[...CardInfo].map((contentTExt , i) => (
                    <div className="StockRow" key={i}>
                      <div className="StockInfo">
                        <span className="Symbol">{contentTExt.Name}</span>
                        <span className="Company">{contentTExt.companyInfo}</span>
                      </div>
                      <div className="StockGraph">
                         <div className="Sparkline"></div>
                      </div>
                      <div className="StockValue">
                        <span className="Price">{contentTExt.price}</span>
                        <span className="Change up">{contentTExt.pct}</span>
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
          
         
        </section>
      </div>
    </section>
  );
};

export default MutualFundsMid;