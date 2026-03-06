import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  CartesianGrid 
} from "recharts";

const Graph = () => {
  const { symbol } = useParams();
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    if (symbol) {
      axios.get(`http://localhost:3000/Genral?body=${symbol}`)
        .then((res) => setStockData(res.data))
        .catch((err) => console.error(err));
    }
  }, [symbol]);

  const formattedData = stockData?.stockTechnicalData
    ? [...stockData.stockTechnicalData]
        .sort((a, b) => a.days - b.days)
        .map((item) => ({
          days: `${item.days}D`,
          price: parseFloat(item.bsePrice),
        }))
    : [];

   const prices = formattedData.map(d => d.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return (
    <div className="stock-container">




<div className="graph-wrapper">
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart data={formattedData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#00d09c" stopOpacity={0.4}/>

          <stop offset="95%" stopColor="#00d09c" stopOpacity={0}/>
        </linearGradient>
      </defs>

      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#222" />
      
      <XAxis 
        dataKey="days" 
        axisLine={false} 
        tickLine={false} 
        tick={{fill: '#666', fontSize: 11}}
        dy={10}
      />
      
      <YAxis 
        orientation="right" 
        domain={['dataMin - 5', 'dataMax + 5']} 
        axisLine={false}
        tickLine={false}
        tick={{fill: '#666', fontSize: 11}}
      />

      <Tooltip 
        cursor={{ stroke: '#555', strokeWidth: 1, strokeDasharray: '5 5' }}
        content={({ active, payload }) => {
          if (active && payload) return (
            <div className="dark-tooltip">
              <div className="tooltip-price">₹{payload[0].value}</div>
              <div className="tooltip-date">{payload[0].payload.days}</div>
            </div>
          );
          return null;
        }}
      />

      <Area
        type="monotone"
        dataKey="price"
        stroke="#00d09c"
        strokeWidth={2}
        fillOpacity={1}
        fill="url(#colorPrice)"
      />
    </AreaChart>
  </ResponsiveContainer>
</div>
    </div>
  );
};


export default Graph;