// src/components/SalesChart.jsx
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../style/chart.css'; // Importamos el nuevo CSS

const Chart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://chatbot-makers-backend.onrender.com/api/v1/dashboard/sales');
        const result = await response.json();
        setData(result.salesPerYear);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="sales-chart-container">
      <h3 className="chart-title">Ventas del año</h3>
      {!loading &&
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="totalSales" fill="#8884d8" barSize={30} />
        </BarChart>
        </ResponsiveContainer>
    }
    </div>
  );
};

export default Chart;
