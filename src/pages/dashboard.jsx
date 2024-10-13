import React, {useState, useEffect} from 'react';
import '../style/dashboard.css';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Card from '../components/card';
import { FaUsers, FaBox, FaShoppingCart } from 'react-icons/fa';
import Chart from '../components/chart';

const Dashboard = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://chatbot-makers-backend.onrender.com/api/v1/dashboard/metrics');
        const result = await response.json();
        setData(result.metricsData);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <Header />
      <div className="main-content">
      <Sidebar />
        <br></br>
        <br></br>
        <br></br>
        { !loading &&
          <div className="card-container">
            <Card title="Total Computers" value={data.totalComputers} icon={<FaUsers />} />
            <Card title="Total Inventory Value" value={data.totalInventoryValue} icon={<FaBox />} />
            <Card title="Total Brands" value={data.totalBrands} icon={<FaShoppingCart />} />

          </div>
        }
      </div>
      <div className="chard-container">

      <Chart   /></div>
    </div>
  );
}

export default Dashboard;
