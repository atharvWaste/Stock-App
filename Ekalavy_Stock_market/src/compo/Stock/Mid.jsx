import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Stock.css";
import { useState, useEffect } from "react";

const Mid = ({ onChange }) => {
  const [data, setData] = useState([]);
  const [isNSE, setIsNSE] = useState(false);

  const handleChange = () => {
    const newValue = !isNSE;
    setIsNSE(newValue);
    onChange(newValue ? "NSE" : "BSE");
  };
  // ----------------------------------------------------------------------------------------------------------------------------

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (isNSE === undefined) return;

      let transmiter = isNSE ? "NSE" : "BSE";
      try {
        const res = await axios.get(
          `http://localhost:3000/StanderdData?market=${transmiter}`,
        );

        console.log("DATA FROM BACKEND:", res.data);

        setData(res.data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, [isNSE]);

  const ShiftToNesxtPage = async (cont_Name) => {
    setLoading(true);

    const formattedName = encodeURIComponent(cont_Name);

    navigate(`/Discription/${formattedName}`);
    setLoading(false);
  };

  const funds = [
    {
      Name: "NIFTY 50",
      lineContent: "about type of production",
      price: "5246",
      pct: "+1.5",
    },
    {
      Name: "NIFTY 50",
      lineContent: "about type of production",
      price: "5246",
      pct: "+1.5",
    },
    {
      Name: "NIFTY 50",
      lineContent: "about type of production",
      price: "5246",
      pct: "+1.5",
    },
    {
      Name: "NIFTY 50",
      lineContent: "about type of production",
      price: "5246",
      pct: "+1.5",
    },
    {
      Name: "NIFTY 50",
      lineContent: "about type of production",
      price: "5246",
      pct: "+1.5",
    },
  ];

  const Stock = [
    {
      name: "Tata Steels",
      price: "72,431.10",
      change: "+450.20",
      pct: "+0.62%",
    },
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
      {loading && <h1>Shifting</h1>}
      <div className="topRow">
        <div className="TickerTrack">
          {[...funds].map((item, index) => (
            <div className="contain" key={index}>
              <span> {item.Name}</span>
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
            <h2>
              Stock <samp className="Tilt">Explorer</samp>
            </h2>
            <div className="WhatShouldIname">
              <div className="MarketStatus">● Market Open</div>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={isNSE}
                  onChange={handleChange}
                />
                <span className="track">
                  <span className="label left">NSE</span>
                  <span className="label right">BSE</span>
                  <span className="thumb" />
                </span>
              </label>
            </div>
          </div>

          <div className="StockGrid">
            {["Top Gainers", "Top Losers", "52 Week High", "Most Active"].map(
              (category, idx) => (
                <div className="StockCategoryCard" key={idx}>
                  <h3>{category}</h3>
                  <div className="MiniList">
                    {[...Stock].map((body, i) => (
                      <div className="StockRow" key={i}>
                        <div className="StockInfo">
                          <span className="Symbol">
                            <a
                              onClick={() => {
                                ShiftToNesxtPage(body.name);
                              }}
                            >
                              {body.name}
                            </a>
                          </span>
                          <span className="Company">Rs. {body.change}</span>
                        </div>
                        <div className="StockGraph">
                          <div className="Sparkline"></div>
                        </div>
                        <div className="StockValue">
                          <span className="Price">Rs. {body.price}</span>
                          <span className="Change up">{body.pct}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="ViewAllBtn">View All</button>
                </div>
              ),
            )}
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
export default Mid;
