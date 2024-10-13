// src/components/SalesChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../style/chart.css'; // Importamos el nuevo CSS

const data = [
  { name: 'Enero', ventas: 300 },
  { name: 'Febrero', ventas: 400 },
  { name: 'Marzo', ventas: 500 },
  { name: 'Abril', ventas: 600 },
  { name: 'Mayo', ventas: 700 },
  { name: 'Junio', ventas: 800 },
];

const Chart = () => {
  return (
    <div className="sales-chart-container">
      <h3 className="chart-title">Ventas del año</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="ventas" fill="#8884d8" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
