import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'BTC', price: 68000 },
  { name: 'ETH', price: 3700 },
  { name: 'SOL', price: 160 },
  { name: 'LINK', price: 15 },
  { name: 'XRP', price: 0.52 },
  { name: 'IO', price: 3.8 },
  { name: 'LTC', price: 85 }
];

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>PhucTrader AI</h1>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
}

export default App;