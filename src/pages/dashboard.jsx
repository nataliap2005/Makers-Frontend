import React from 'react';
import '../style/dashboard.css';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Card from '../components/card';
import { FaUsers, FaBox, FaShoppingCart } from 'react-icons/fa';
// import ChartSection from '../components/ChartSection';

const Dashboard =() => {
  return (
    <div className="dashboard">
      <Header />
      <div className="main-content">
      <Sidebar />
        <br></br>
        <br></br>
        <br></br>
        <div className="card-container">
          <Card  title="Total Users" value="200" icon={<FaUsers />} />
          <Card  title="Total Products" value="200/250" icon={<FaBox />}/>
          <Card  title="Sells" value="200/250" icon={<FaShoppingCart />} />
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
